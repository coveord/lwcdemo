import { ContextValue } from './context-slice';
/**
 * Set the context of the query.
 * @param Context The new context to use.
 */
export declare const setContext: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[Record<string, ContextValue>], Record<string, ContextValue>, "context/set", never, never>;
/**
 * Add a new value context value.
 * @param object The key value pair to add to the context.
 */
export declare const addContext: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[{
    contextKey: string;
    contextValue: ContextValue;
}], {
    contextKey: string;
    contextValue: ContextValue;
}, "context/add", never, never>;
/**
 * Add a new value context value.
 * @param object The key value pair to remove from the context.
 */
export declare const removeContext: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[string], string, "context/remove", never, never>;
