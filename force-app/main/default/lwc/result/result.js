// @ts-check
import { LightningElement, api } from "lwc";

export default class Result extends LightningElement {
  /** @type {import("coveo").Result} */
  @api result;
}
