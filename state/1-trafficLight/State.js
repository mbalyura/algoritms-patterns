export default class State {
  constructor(light) {
    this.light = light;
  }

  nextState(StateClass) {
    this.light.setState(StateClass || this.NextStateClass);
  }

  getModeName() {
    return this.mode;
  }
}
