import { DateFacetRequest } from './interfaces/request';
export declare type DateFacetSetState = Record<string, DateFacetRequest>;
export declare function getDateFacetSetInitialState(): DateFacetSetState;
export declare const dateFacetSetReducer: import("redux").Reducer<Record<string, DateFacetRequest>, import("redux").AnyAction>;
