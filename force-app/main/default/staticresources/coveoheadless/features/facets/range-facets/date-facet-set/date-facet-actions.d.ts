import { DateFacetRegistrationOptions } from './interfaces/options';
import { DateFacetValue } from './interfaces/response';
/**
 * Register a date facet.
 * @param {DateFacetRegistrationOptions} DateFacetRegistrationOptions The options to register the facet with.
 */
export declare const registerDateFacet: import("@reduxjs/toolkit").ActionCreatorWithPayload<DateFacetRegistrationOptions, string>;
/**
 * Select (unselect) a date facet value if unselected (selected).
 */
export declare const toggleSelectDateFacetValue: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    facetId: string;
    selection: DateFacetValue;
}, string>;
