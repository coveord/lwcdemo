import { LightningElement, api, track } from "lwc";

export default class Facetvalue extends LightningElement {
  @api item;

  onSelect(evt) {
    evt.preventDefault();
    this.dispatchEvent(new CustomEvent("selectvalue", { detail: this.item }));
  }
}
