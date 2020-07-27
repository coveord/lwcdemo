import { FacetSearchRequestOptions } from './facet-search-request-options';
import { FacetSearchResponse } from '../../../api/search/facet-search/api/response';
declare type FacetSearchState = {
    options: FacetSearchRequestOptions;
    response: FacetSearchResponse;
};
export declare type FacetSearchSetState = Record<string, FacetSearchState>;
export declare function getFacetSearchSetInitialState(): FacetSearchSetState;
export declare const facetSearchSetReducer: import("redux").Reducer<Record<string, FacetSearchState>, import("redux").AnyAction>;
export declare function buildFacetSearchState(config?: Partial<FacetSearchState>): FacetSearchState;
export declare function buildFacetSearchOptions(config?: Partial<FacetSearchRequestOptions>): FacetSearchRequestOptions;
export {};
