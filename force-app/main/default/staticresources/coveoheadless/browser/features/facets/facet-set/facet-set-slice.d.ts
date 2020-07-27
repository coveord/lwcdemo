import { FacetRequest, FacetValueRequest } from './interfaces/request';
import { FacetValue } from './interfaces/response';
export declare type FacetSetState = Record<string, FacetRequest>;
export declare function getFacetSetInitialState(): FacetSetState;
export declare const facetSetReducer: import("redux").Reducer<Record<string, FacetRequest>, import("redux").AnyAction>;
export declare function convertFacetValueToRequest(facetValue: FacetValue): FacetValueRequest;
