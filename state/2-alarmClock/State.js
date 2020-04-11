export default class State {
    constructor(clock) {
      this.clock = clock;
    }
  
    getCurrentMode() {
      return this.mode;
    }
  }
  