import State from './State';

export default class ClockState extends State {
  constructor(clock) {
    super(clock);
    this.mode = 'clock';
  }

  clickMode() {
    this.clock.setState(this.clock.states.alarm);
  }

  incrementH() {
    if (this.clock.h === 23) {
      this.clock.h = 0;
    } else {
      this.clock.h += 1;
    }
  }

  incrementM() {
    if (this.clock.m === 59) {
      this.clock.m = 0;
      this.incrementH();
    } else {
      this.clock.m += 1;
    }
  }

  tick() {
    this.clock.clickM();

    if (this.clock.isAlarmOn() && this.clock.isAlarmTime()) {
      this.clock.setState(this.clock.states.bell);
    }
  }
}
