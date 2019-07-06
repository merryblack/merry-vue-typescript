import Flicking, { Plugin, Direction } from "@egjs/flicking";
declare class ScrollFlicking implements Plugin {
  private duration;
  private direction;
  private timerId;
  constructor(duration?: number, direction?: Direction[keyof Direction]);
  init(flicking: Flicking): void;
  destroy(flicking: Flicking): void;
  private play;
  private onPlay;
  private onStop;
}
export default ScrollFlicking;
