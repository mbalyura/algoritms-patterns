import State from './State.js';
import GreenState from './GreenState.js';

export default class YellowState extends State {
  constructor(light) {
    super(light);
    this.mode = 'yellow';
    this.countTick = 1;
    this.NextStateClass = GreenState;
  }
}