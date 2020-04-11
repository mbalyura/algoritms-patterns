import ClockState from './ClockState';
import AlarmState from './AlarmState';
import BellState from './BellState';

export default class AlarmClock {
  constructor() {
    this.states = {
      clock: ClockState,
      alarm: AlarmState,
      bell: BellState,
    };
    this.setState(ClockState);
    this.h = 12;
    this.m = 0;
    this.aH = 6;
    this.aM = 0;
    this.alarmOn = false;
  }

  setState(Class) {
    this.state = new Class(this);
  }

  minutes() {
    return this.m;
  }

  hours() {
    return this.h;
  }

  alarmMinutes() {
    return this.aM;
  }

  alarmHours() {
    return this.aH;
  }

  getCurrentMode() {
    return this.state.getCurrentMode();
  }

  isAlarmOn() {
    return this.alarmOn;
  }

  isAlarmTime() {
    return this.h === this.aH && this.m === this.aM;
  }

  clickMode() {
    this.state.clickMode();
  }

  longClickMode() {
    this.alarmOn = !this.isAlarmOn();
  }

  clickH() {
    this.state.incrementH();
  }

  clickM() {
    this.state.incrementM();
  }

  tick() {
    this.state.tick();
  }
}
