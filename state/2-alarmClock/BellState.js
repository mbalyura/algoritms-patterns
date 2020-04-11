import State from './State';

export default class BellState extends State {
  constructor(clock) {
    super(clock);
    this.mode = 'bell';
  }

  clickMode() {
    this.clock.setState(this.clock.states.clock);
  }

  incrementH() {
    return null;
  }

  incrementM() {
    return null;
  }

  tick() {
    this.clock.setState(this.clock.states.clock);
  }
}
