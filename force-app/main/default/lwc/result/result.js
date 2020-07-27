// @ts-check
import { LightningElement, api } from "lwc";

export default class Result extends LightningElement {
  /** @type {import("../../staticresources/coveoheadless/index").Result} */
  @api result;
}
