import * as HeadlessTypes from "../staticresources/coveoheadless/index";
import * as CoveoHeadless from "../staticresources/coveoheadless/index";
declare global {
    var CoveoHeadless: typeof HeadlessTypes;
}
