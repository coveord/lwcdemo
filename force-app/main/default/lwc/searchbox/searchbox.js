import { LightningElement, api, track } from "lwc";
import TributePath from "@salesforce/resourceUrl/tributejs";
import { loadScript } from "lightning/platformResourceLoader";

export default class Searchbox extends LightningElement {
  @track state = {};
  @track suggestions = [];

  searchBox;
  unsubscribe;
  tributeLoaded = false;
  tribute;

  connectedCallback() {
    if (this.tributeLoaded) {
      return;
    }

    loadScript(this, TributePath + "/tribute.js").then(
      () => (this.tributeLoaded = true)
    );
  }

  disconnectedCallback() {
    this.unsubscribe && this.unsubscribe();
  }

  renderedCallback() {
    const input = this.template.querySelector("input");
    const wrapper = this.template.querySelector(".slds-dropdown");
    const combobox = this.template.querySelector(".slds-combobox");

    if (!input || !wrapper || !this.tributeLoaded || this.tribute) {
      return;
    }

    this.configureTributeJS(input, wrapper, combobox);
  }

  configureTributeJS(input, wrapper, combobox) {
    this.tribute = new Tribute({
      values: [],
      searchOpts: {
        skip: true
      },
      selectTemplate: (item) => item.string,
      menuContainer: wrapper,
      positionMenu: false,
      autocompleteMode: true,
      replaceTextSuffix: "",
      containerClass: "slds-listbox slds-listbox_vertical",
      itemClass:
        "slds-listbox__item slds-media slds-listbox__option slds-listbox__option_plain slds-media_small",
      noMatchTemplate: ""
    });
    this.tribute.attach(input);

    input.addEventListener("tribute-replaced", (e) => {
      this.searchBox.updateText(e.detail.item.string);
      this.searchBox.submit();
    });

    input.addEventListener("tribute-active-true", () => {
      combobox.classList.add("slds-is-open");
    });

    input.addEventListener("tribute-active-false", () => {
      combobox.classList.remove("slds-is-open");
    });
  }

  @api
  set engine(eng) {
    if (!eng) {
      return;
    }

    this.e = eng;
    this.searchBox = new CoveoHeadless.SearchBox(this.e);
    this.unsubscribe = this.searchBox.subscribe(() => this.updateState());
  }

  get engine() {
    return this.e;
  }

  onChange(event) {
    this.searchBox.updateText(event.target.value);
  }

  onKeyup(event) {
    if (event.which === 13) {
      this.searchBox.submit();
    }
    this.searchBox.updateText(event.target.value);
  }

  isLoading() {
    return this.se;
  }

  updateState() {
    this.state = this.searchBox.state;
    this.suggestions = this.state.suggestions.map((s) => s.value);
    if (!this.tribute) {
      return;
    }

    this.tribute.append(
      0,
      this.state.suggestions.map((s) => ({ key: s.value, value: s.value })),
      true
    );
  }

  onFocus() {
    this.searchBox.showSuggestions();
  }
}
