import { LightningElement, api, track } from "lwc";

export default class Pager extends LightningElement {
  @track currentPages = [];

  pager;
  unsubscribe;
  hasPrevious;
  hasNext;
  currentPage = 1;

  @api
  set engine(eng) {
    if (!eng) {
      return;
    }

    this.e = eng;
    this.pager = new CoveoHeadless.Pager(this.e);
    this.unsubscribe = this.pager.subscribe(() => this.updateState());
  }

  get engine() {
    return this.e;
  }

  disconnectedCallback() {
    this.unsubscribe && this.unsubscribe();
  }

  updateState() {
    this.hasPrevious = this.pager.hasPreviousPage;
    this.hasNext = this.pager.hasNextPage;
    this.currentPages = this.pager.state.currentPages;
    this.currentPage = this.pager.state.currentPage;
  }

  previous() {
    this.pager.previousPage();
  }

  next() {
    this.pager.nextPage();
  }

  goto(event) {
    this.pager.selectPage(event.detail);
  }

  get nextDisabled() {
    return !this.hasNext;
  }

  get previousDisabled() {
    return !this.hasPrevious;
  }
}
