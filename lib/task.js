import { PRIORITIES_FACTORS } from './const.js';

export default class Task {
  priority = 'minor';
  inWebWorker = false;

  constructor(callback, options = {}) {
    this.iterator = callback();
    this.priority = options.priority || this.priority;
    this.priorityFactor = PRIORITIES_FACTORS[this.priority];
    this.inWebWorker = options.inWebWorker || this.inWebWorker;
  }
}