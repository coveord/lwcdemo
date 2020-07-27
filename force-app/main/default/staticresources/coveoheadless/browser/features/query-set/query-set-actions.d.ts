/**
 * Register a query in the query set.
 * @param id The unique identifier of the target query.
 * @param query The initial basic query expression.
 */
export declare const registerQuerySetQuery: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[{
    id: string;
    query: string;
}], {
    id: string;
    query: string;
}, "querySet/register", never, never>;
/**
 * Update a query in the query set.
 * @param id The unique identifier of the target query.
 * @param query The updated basic query expression.
 */
export declare const updateQuerySetQuery: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[{
    id: string;
    query: string;
}], {
    id: string;
    query: string;
}, "querySet/update", never, never>;
