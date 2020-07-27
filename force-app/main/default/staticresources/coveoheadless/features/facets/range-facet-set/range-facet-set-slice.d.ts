import { RangeFacetRequest } from './interfaces/request';
export declare type RangeFacetSetState = Record<string, RangeFacetRequest>;
export declare function getRangeFacetSetInitialState(): RangeFacetSetState;
export declare const rangeFacetSetReducer: import("redux").Reducer<Record<string, RangeFacetRequest>, import("redux").AnyAction>;
