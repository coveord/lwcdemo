import { LightningElement, track, api } from "lwc";

export default class Facet extends LightningElement {
  @track state = {};
  @api field;
  @api title;

  facet;
  unsubscribe;

  @api
  set engine(eng) {
    if (!eng) {
      return;
    }

    this.e = eng;
    this.facet = CoveoHeadless.buildFacet(this.e, {
      options: {
        field: this.field
      }
    });
    this.facet.sortBy("occurrences");
    this.unsubscribe = this.facet.subscribe(() => this.updateState());
  }

  get engine() {
    return this.e;
  }

  disconnectedCallback() {
    this.unsubscribe && this.unsubscribe();
  }

  updateState() {
    this.state = this.facet.state;
  }

  get values() {
    return this.state.values || [];
  }

  get canShowMore() {
    if (!this.facet) {
      return false;
    }
    return this.facet.canShowMoreValues && !this.facet.canShowLessValues;
  }

  get canShowLess() {
    if (!this.facet) {
      return false;
    }
    return this.facet.canShowLessValues && !this.facet.canShowMoreValues;
  }

  get canShowMoreAndLess() {
    if (!this.facet) {
      return false;
    }
    return this.facet.canShowLessValues && this.facet.canShowMoreValues;
  }

  get hasFooter() {
    return this.canShowLess || this.canShowMore || this.canShowMoreAndLess;
  }

  get hasValues() {
    return this.values.length !== 0;
  }

  onSelect(evt) {
    this.facet.toggleSelect(evt.detail);
  }

  showMore() {
    this.facet.showMoreValues();
  }

  showLess() {
    this.facet.showLessValues();
  }
}
