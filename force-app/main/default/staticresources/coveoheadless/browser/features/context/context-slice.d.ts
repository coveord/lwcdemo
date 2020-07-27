export declare type ContextValue = string | string[];
export declare type Context = Record<string, ContextValue>;
export declare type ContextState = {
    contextValues: Context;
};
export declare function getContextInitialState(): ContextState;
export declare const contextReducer: import("redux").Reducer<ContextState, import("redux").AnyAction>;
