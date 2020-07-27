// @ts-check
import { LightningElement, api } from "lwc";

export default class Pipeline extends LightningElement {
  
  /** @type {import("coveo").Pipeline} */
  pipeline;
  /** @type {() => any} */
  unsubscribe;
  /** @type {string} */
  @api querypipeline;

  @api
  set engine(eng) {
    if (!eng) {
      return;
    }

    this.e = eng;
    this.pipeline = new CoveoHeadless.Pipeline(this.e);
    this.unsubscribe = this.pipeline.subscribe(() => this.updateState());
    this.pipeline.setPipeline(this.querypipeline);
  }

  get engine() {
    return this.e;
  }

  disconnectedCallback() {
    this.unsubscribe && this.unsubscribe();
  }

  updateState() {
    this.state = this.pipeline.state;
  }
}
