export declare type QuerySetState = Record<string, string>;
export declare function getQuerySetInitialState(): QuerySetState;
export declare const querySetReducer: import("redux").Reducer<Record<string, string>, import("redux").AnyAction>;
