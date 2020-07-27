import { LightningElement, api } from "lwc";
import HeadlessPath from "@salesforce/resourceUrl/coveoheadless";
import { loadScript } from "lightning/platformResourceLoader";

export default class Coveosearch extends LightningElement {
  @api flexipageRegionWidth;
  @api hasResults;

  initialized;
  engine;
  unsubscribe;

  connectedCallback() {
    if (this.initialized) {
      return;
    }

    loadScript(this, HeadlessPath + "/browser/headless.js")
      .then(() => this.initializeCoveo())
      .catch((e) => {
        console.error(e);
      });
  }

  disconnectedCallback() {
    this.unsubscribe && this.unsubscribe();
  }

  initializeCoveo() {
    this.engine = new CoveoHeadless.HeadlessEngine({
      configuration: CoveoHeadless.HeadlessEngine.getSampleConfiguration(),
      reducers: CoveoHeadless.searchPageReducers
    });
    this.unsubscribe = this.engine.subscribe(() => this.updateState());
    this.initialized = true;

    // TODO: proper child sync
    setTimeout(() => {
      this.engine.dispatch(
        CoveoHeadless.searchActions.executeSearch(
          CoveoHeadless.analyticsActions.logGenericSearchEvent({
            evt: "interfaceLoad"
          })
        )
      );
    }, 100);
  }

  updateState() {
    this.hasResults = this.engine.state.search.response.results.length !== 0;
  }
}
