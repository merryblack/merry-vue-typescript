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

      if (index === 0 || index === 3) {
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

    new Flicking(".iphone .panels", { circular: true, gap: 10, });
    new Flicking(".ipad .panels", { circular: true, gap: 5, });
    new Flicking(".imac .panels", { circular: true, gap: 5, });
    new Flicking(".macbook .panels", { circular: true, gap: 5, });

    // @ts-ignore
    const scene = new Scene({
      ".c1": {
        0: {
          right: "45%",
          transform: "translate(0%, 0vh) translateY(0%)",
        },
        1: {
          right: "60%",
          transform: "translate(0%, 50vh) translateY(60%)",
        },
        2: {
          right: "85%",
          transform: "translate(40%, 20vh) translateX(0vw) translateY(0%) scale(1)",
        },
        3: {
          right: "50%",
          transform: "translateX(7vw) translate(50%, 8vh) translateY(50%) scale(0.3)",
        }
      },
      ".c2": {
        0.4: {
          transform: "translate(-50%, -50%) scale(1)",
        },
        1: {
          transform: "scale(0)",
        }
      },
      ".c3": {
        0.5: {
          width: "40vmax",
        },
        0.8: {
          "border-radius": "50%",
        },
        1: {
          width: "120vmax",
          "border-radius": "0%",
          transform: "translate(-50%, -50%) translateY(0vh)",
        },
        2: {
          width: "120vmax",
          transform: "translateY(-100vh) translate(-50%, -50%) scale(1)",
          "border-radius": "0%",
        },
        2.2: {
          "border-radius": "50%",
        },
        3: {
          width: "40vmax",
          transform: "translate(-65%, -40%) translateY(0vh) scale(0.5)",
        }
      },
      ".c4": {
        0: {
          transform: "translate(0%, 0vh) translateY(0%)",
          left: "45%",
        },
        1: {
          transform: "translate(0%, -50vh) translateY(-60%)",
          left: "60%",
        },
        2: {
          transform: "translate(0%, -100vh) translateY(-100%)  scale(1)",
          left: "85%",
        },
        3: {
          left: "57%",
          transform: "translate(-50%, 0vh) translateY(-60%) scale(0.27)",
        }
      },
      ".c5": {
        0: {
          transform: "translate(0, 0%)",
        },
        1: {
          transform: "translate(0, -100%)",
        },
      },
      ".c6": {
        0: {
          transform: "translate(0, 0%) translate2(0vw, 0vh)",
        },
        1: {
          transform: "translate(0, -100%) translate2(0vw, -100vh)",
        },
      },
      ".iphone": {
        0: {
          transform: "translate(-50%, -90px) translateY(0vh) translateY2(0%)",
        },
        1: {
          transform: "translate(-50%, 0px) translateY(-50vh) translateY2(-50%) translateX(0px) translateY3(0vh) scale(1)",
          background: "#eee",
        },
        2: {
          transform: "translate(-50%, -30px) translateX(120px) translateY2(-50%) translateY3(0vh) scale(0.3)",
          background: "#444",
        },
        3: {
          transform: "translateY3(-50vh) translateY2(-100%)",
        }
      },
      ".imac": {
        1: {
          transform: "translate(-50%) translate2(0px, 170px) translateY(50vh)",
          opacity: 0,
        },
        2: {
          transform: "translateY(0vh) translateY2(0%)",
          opacity: 1,
        },
        3: {
          transform: "translateY(-50vh) translateY2(-100%)",
        },
      },
      ".macbook": {
        1: {
          transform: "translate(-50%) translate2(-200px, 170px) translateY(70vh)",
          opacity: 0,
        },
        2: {
          transform: "translateY(0vh) translate2(-200px, 170px) translateY2(0%)",
          opacity: 1,
        },
        3: {
          transform: "translateY(-50vh) translate2(-200px, 0px) translateY2(-150%)",
        },
      },
      ".ipad": {
        1: {
          transform: "translate(-50%) translate2(200px, 170px) translateY(70vh)",

        },
        1.3: {
          opacity: 0,
        },
        2: {
          transform: "translateY(0vh) translate2(200px, 170px) translateY2(0%)",
          opacity: 1,
        },
        3: {
          transform: "translateY(-50vh) translate2(200px, 50px) translateY2(-100%)",
        },
      },
      ".background2": {
        1: {
          transform: "translateY(100vh)",
        },
        2: {
          transform: "translateY(0vh)",
        },
        3: {
          transform: "translateY(-100vh)",
        }
      },
      ".iphone .container": {
        0.9: {
          opacity: 0,
        },
        1: {
          opacity: 1,
        },
      },
      // @ts-ignore
      ".feature": i => ({
        0.9: {
          transform: "translate(-50%, -50%) translate2(0px, 0px)",
          opacity: 0,
        },
        1: {
          transform: `translate2(${(i % 2 ? 1 : -1) * 220}px, ${(Math.floor(i / 2) - 1) * 120}px)`,
          opacity: 1,
        },
        2: {
          opacity: 0,
        }
      }),
      ".panel.slogan h2": {
        1.7: {
          opacity: 0,
        },
        2: {
          opacity: 1,
        }
      },
      ".c7": {
        1: {
          transform: "translate(0%, 0%)",
          top: "100%",
        },
        2: {
          transform: "translate(0%, 0%) scale(1)",
          top: "80%",
        },
        3: {
          top: "50%",
          transform: "translate(-60%, -60%) scale(0.3)",
        },
      },
    }, {
      selector: true,
    }).setTime(0);


    flicking.on("move", e => {
      scene.setTime(`${e.progress * 100}%`);
    });

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
