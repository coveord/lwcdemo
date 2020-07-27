import { FacetSearchRequestOptions } from './facet-search-request-options';
import { FacetSearchResult } from '../../../api/search/facet-search/api/response';
export declare type FacetSearchOptions = {
    facetId: string;
} & Partial<FacetSearchRequestOptions>;
declare type selectFacetSearchResultPayload = {
    facetId: string;
    value: FacetSearchResult;
};
/**
 * Register a facet search in the facet search set.
 * @param {FacetSearchOptions} FacetSearchOptions The options to register the facet search with.
 */
export declare const registerFacetSearch: import("@reduxjs/toolkit").ActionCreatorWithPayload<FacetSearchOptions, string>;
/**
 * Updates the options of a facet search.
 * @param {FacetSearchOptions} FacetSearchOptions The options to register the facet search with.
 */
export declare const updateFacetSearch: import("@reduxjs/toolkit").ActionCreatorWithPayload<FacetSearchOptions, string>;
/**
 * Executes a facet search.
 * @param {string} facetId The facet id on which to execute the search.
 */
export declare const executeFacetSearch: import("@reduxjs/toolkit").AsyncThunk<{
    facetId: string;
    response: import("../../../api/search/facet-search/api/response").FacetSearchResponse;
}, string, {}>;
/**
 * Adds a facet search value to the facet.
 * @param {selectFacetSearchResultPayload}.
 */
export declare const selectFacetSearchResult: import("@reduxjs/toolkit").ActionCreatorWithPayload<selectFacetSearchResultPayload, string>;
export {};
