import * as HeadlessTypes from "./force-app/main/default/staticresources/coveoheadless/index";
export * from "./force-app/main/default/staticresources/coveoheadless/index";
declare global {
    var CoveoHeadless: typeof HeadlessTypes;
}
