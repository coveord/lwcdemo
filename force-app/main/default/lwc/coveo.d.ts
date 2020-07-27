import * as HeadlessTypes from "../staticresources/coveoheadless/index";
export * from "../staticresources/coveoheadless/index";
declare global {
    var CoveoHeadless: typeof HeadlessTypes;
}
