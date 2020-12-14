/* eslint-disable import/no-cycle */
import State from './State';
import GreenState from './GreenState';

export default class YellowState extends State {
  constructor(light) {
    super(light);
    this.mode = 'yellow';
    this.countTick = 1;
    this.NextStateClass = GreenState;
  }
}
