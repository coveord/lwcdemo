import { FacetRegistrationOptions } from './interfaces/options';
import { FacetValue } from './interfaces/response';
import { FacetSortCriterion } from './interfaces/request';
/**
 * Register a facet in the facet set.
 * @param {FacetRegistrationOptions} FacetRegistrationOptions The options to register the facet with.
 */
export declare const registerFacet: import("@reduxjs/toolkit").ActionCreatorWithPayload<FacetRegistrationOptions, string>;
/**
 * Select a facet value.
 */
export declare const toggleSelectFacetValue: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    facetId: string;
    selection: FacetValue;
}, string>;
/**
 * Deselects all facet values.
 * @param id The unique identifier of the facet.
 */
export declare const deselectAllFacetValues: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>;
/**
 * Updates the sort criterion of a facet.
 */
export declare const updateFacetSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    facetId: string;
    criterion: FacetSortCriterion;
}, string>;
/**
 * Update the number of values of a facet.
 */
export declare const updateFacetNumberOfValues: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    facetId: string;
    numberOfValues: number;
}, string>;
