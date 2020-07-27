import { LightningElement, api } from "lwc";

export default class Pipeline extends LightningElement {
  pipeline;
  unsubscribe;
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

  get results() {
    return this.state.results || [];
  }
}
