import Flicking, { Plugin } from "@egjs/flicking";
import Scene from "scenejs";

class ScrollFlicking implements Plugin {
  private timerId = 0;
  private isEnableScroll = true;

  public init(flicking: Flicking): void {
    window.addEventListener("wheel", (e) => {
      this.onScrollEvent(e, flicking)
    });

    const pagination = document.querySelector(".pagination");
    // @ts-ignore
    const dots = [].slice.call(pagination.querySelectorAll(".dot"));

    // @ts-ignore
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        flicking.moveTo(i);
      });
    })
    flicking.on("change", e => {
      const index = e.index;

      if (index === 0) {
        // @ts-ignore
        pagination.classList.add("black");
      } else {
        // @ts-ignore
        pagination.classList.remove("black");
      }
      if (dots[flicking.getIndex()]) {
        dots[flicking.getIndex()].classList.remove("selected");
      }
      if (dots[index]) {
        dots[index].classList.add("selected");
      }
    });

    flicking.on("move", e => {
      scene.setTime(`${e.progress * 100}%`);
    });

    const scene = new Scene({
      ".c1": {
        0: {
          right: "45%",
          transform: "translate(0%, 0vh) translateY(0%)",
        },
        1: {
          right: "70%",
          transform: "translate(0%, 55vh) translateY(70%)",
        },
        3: {
          right: "200%",
        },
      },
      ".c4": {
        0: {
          transform: "translate(0%, 0vh) translateY(0%)",
          left: "45%",
        },
        1: {
          transform: "translate(0%, -55vh) translateY(-70%)",
          left: "70%",
        },
        3: {
          left: "200%",
        },
      },
      ".c2": {
        0.8: {
          transform: "translate(-50%, -50%) scale(1)",
        },
        2: {
          transform: "scale(2)",
        }
      },
      ".box-black": {
        0: {
          width: "40vw",
          opacity: 1,
        },
        1: {
          width: "120vw",
          opacity: 1,
        },
        2: {
          transform: "translate(-50%, -50%) translateY(0vh)",
          "background-color": "black",
        },
        3: {
          width: "120vmax",
          transform: "translate(-50%, -50%) scale(1)",
          "background-color": "white",
          opacity: 0,
        },
        4: {
          width: "120vmax",
          transform: "translate(-50%, -50%) translateY(0vh) scale(2)",
          opacity: 0.5,
        }
      },
      "body": {
        0: {
          "background-color": "white"
        },
        0.6: {
          "background-color": "black"
        }
      },
      ".feature": (i:number) => ({
        0: {
          transform: "translate(-50%, -50%) translateY(50vh) translate2(0px, 0px)",
          opacity: 0,
        },
        1.1: {
          transform: `translate2(${(i % 2 ? 1 : -1) * 240}px, ${(Math.floor(i / 2) - 1) * 120}px)`,
          opacity: 1,
        },
        1.4: {
          opacity: 0,
          transform: `translate2(${(i % 2 ? 1 : -1) * 1000}vw, ${(Math.floor(i / 2) - 1) * 500}vh)`,
        },
        4: {
          opacity: 0,
        }
      }),
    }, {
      selector: true,
    }).setTime(0);

    new Scene({
      ".wheel": {
        0: {
          transform: "translate(-50%, -90px)",
          height: "0px",
        },
        0.5: {
          height: "30px",
        },
        1: {
          height: "0px",
          transform: "translate(-50%, 0px)",
        }
      },
    }, {
      selector: true,
      easing: "ease-in-out",
      iterationCount: "infinite",
    }).playCSS();

  }
  public destroy(flicking: Flicking): void {

  }

  // @ts-ignore
  private onScrollEvent = (e, flicking: Flicking): void => {
    var delta = e.deltaY;
    if (Math.abs(delta) > 40) {
      this.setScrollTimer();
      if (delta > 0) {
        flicking.next();
      } else if (delta < 0) {
        flicking.prev();
      }
    }
  }

  private setScrollTimer = () => {
    this.isEnableScroll = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    this.timerId = setTimeout(function () {
      // @ts-ignore
      this.isEnableScroll = true;
    }, 600);
  }
}

export default ScrollFlicking;
