import RedState from './RedState';

export default class TrafficLight {
  constructor() {
    this.setState(RedState);
  }

  setState(Class) {
    this.state = new Class(this);
  }

  getCurrentMode() {
    return this.state.getModeName();
  }

  tick() {
    this.state.countTick -= 1;
    if (this.state.countTick === 0) {
      this.state.nextState();
    }
  }
}
