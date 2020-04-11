import RedState from './RedState.js';

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
    this.state.countTick = this.state.countTick - 1;
    if (this.state.countTick === 0) {
      this.state.nextState();
    }
  }
}

// const traffic = new TrafficLight()

// console.log(traffic.getCurrentMode())