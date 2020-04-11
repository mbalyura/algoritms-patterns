import State from './State.js';
import RedState from './RedState.js';

export default class GreenState extends State {
  constructor(light) {
    super(light);
    this.mode = 'green';
    this.countTick = 3;
    this.NextStateClass = RedState;
  }
}