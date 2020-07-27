import { LightningElement, api, track } from "lwc";

export default class Resultlist extends LightningElement {
  @track state = {};

  resultList;
  unsubscribe;

  @api
  set engine(eng) {
    if (!eng) {
      return;
    }

    this.e = eng;
    this.resultList = new CoveoHeadless.ResultList(this.e);
    this.unsubscribe = this.resultList.subscribe(() => this.updateState());
  }

  get engine() {
    return this.e;
  }

  disconnectedCallback() {
    this.unsubscribe && this.unsubscribe();
  }

  updateState() {
    this.state = this.resultList.state;
  }

  get results() {
    return this.state.results || [];
  }
}
