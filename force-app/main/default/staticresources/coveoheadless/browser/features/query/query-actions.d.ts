/**
 * Update the basic query expression.
 * @param q The new basic query expression (e.g., `acme tornado seeds`).
 */
export declare const updateQuery: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[{
    q: string;
}], {
    q: string;
}, "query/updateQuery", never, never>;
