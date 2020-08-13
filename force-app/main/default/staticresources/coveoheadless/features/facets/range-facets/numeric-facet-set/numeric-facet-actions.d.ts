import { NumericFacetRegistrationOptions } from './interfaces/options';
import { NumericFacetValue } from './interfaces/response';
/**
 * Register a numeric facet.
 * @param {NumericFacetRegistrationOptions} NumericFacetRegistrationOptions The options to register the facet with.
 */
export declare const registerNumericFacet: import("@reduxjs/toolkit").ActionCreatorWithPayload<NumericFacetRegistrationOptions, string>;
/**
 * Select (unselect) a numeric facet value if unselected (selected).
 */
export declare const toggleSelectNumericFacetValue: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    facetId: string;
    selection: NumericFacetValue;
}, string>;
