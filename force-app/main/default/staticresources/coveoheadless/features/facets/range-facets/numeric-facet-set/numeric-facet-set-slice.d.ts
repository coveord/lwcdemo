import { NumericFacetRequest } from './interfaces/request';
export declare type NumericFacetSetState = Record<string, NumericFacetRequest>;
export declare function getNumericFacetSetInitialState(): NumericFacetSetState;
export declare const numericFacetSetReducer: import("redux").Reducer<Record<string, NumericFacetRequest>, import("redux").AnyAction>;
