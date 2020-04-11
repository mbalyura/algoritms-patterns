import State from './State.js';
import YellowState from './YellowState.js';

export default class RedState extends State {
  constructor(light) {
    super(light);
    this.mode = 'red';
    this.countTick = 3;
    this.NextStateClass = YellowState;
  }
}