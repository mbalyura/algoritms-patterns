/* eslint-disable import/no-cycle */
import State from './State';
import RedState from './RedState';

export default class GreenState extends State {
  constructor(light) {
    super(light);
    this.mode = 'green';
    this.countTick = 3;
    this.NextStateClass = RedState;
  }
}
