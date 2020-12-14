/* eslint-disable import/no-cycle */
import State from './State';
import YellowState from './YellowState';

export default class RedState extends State {
  constructor(light) {
    super(light);
    this.mode = 'red';
    this.countTick = 3;
    this.NextStateClass = YellowState;
  }
}
