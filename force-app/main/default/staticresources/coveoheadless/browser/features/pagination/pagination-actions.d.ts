/**
 * Initializes the number of results. For more information, refer to {@link https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-numberOfResults}
 * @param number The initial number of results.
 */
export declare const registerNumberOfResults: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[number], number, "pagination/registerNumberOfResults", never, never>;
/**
 * Updates the number of results.
 * @param number The updated number of results.
 */
export declare const updateNumberOfResults: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[number], number, "pagination/updateNumberOfResults", never, never>;
/**
 * Sets the initial page by initializing the firstResult property. For more information on firstResult, refer to {@link https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-firstResult}
 * @param number The initial page number.
 */
export declare const registerPage: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[number], number, "pagination/registerPage", never, never>;
/**
 * Updates the page by setting the firstResult property.
 * @param number The new page number.
 */
export declare const updatePage: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[number], number, "pagination/updatePage", never, never>;
/**
 * Updates the page to the next page.
 */
export declare const nextPage: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"pagination/nextPage">;
/**
 * Updates the page to the previous page.
 */
export declare const previousPage: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"pagination/previousPage">;
