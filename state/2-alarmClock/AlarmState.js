import State from './State';

export default class AlarmState extends State {
  constructor(clock) {
    super(clock);
    this.mode = 'alarm';
  }

  clickMode() {
    this.clock.setState(this.clock.states.clock);
  }

  incrementH() {
    if (this.clock.aH === 23) {
      this.clock.aH = 0;
    } else {
      this.clock.aH += 1;
    }
  }

  incrementM() {
    if (this.clock.aM === 59) {
      this.clock.aM = 0;
    } else {
      this.clock.aM += 1;
    }
  }

  tick() {
    this.clock.setState(this.clock.states.clock);
    this.clock.clickM();
    this.clock.setState(this.clock.states.alarm);

    if (this.clock.isAlarmOn() && this.clock.isAlarmTime()) {
      this.clock.setState(this.clock.states.bell);
    }
  }
}
