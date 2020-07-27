import { QuerySuggestSuccessResponse } from '../../api/search/query-suggest/query-suggest-response';
import { SearchAPIErrorWithStatusCode } from '../../api/search/search-api-error-response';
export interface QuerySuggestionID {
    id: string;
}
/**
 * Register a new query suggest entity to the headless state to enable the Coveo ML query suggestions feature.
 * @param id A unique identifier for the new query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 * @param q The partial basic query expression for which to request query suggestions (e.g., `cov`).
 * @param count The number of query suggestions to request from Coveo ML (e.g., `3`). Default: `5`.
 */
export declare const registerQuerySuggest: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[{
    id: string;
    q?: string | undefined;
    count?: number | undefined;
}], {
    id: string;
    q?: string | undefined;
    count?: number | undefined;
}, "querySuggest/register", never, never>;
/**
 * Unregister an existing query suggest entity from the headless state.
 * @param id The unique identifier of the query suggest entity to unregister (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 */
export declare const unregisterQuerySuggest: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[{
    id: string;
}], {
    id: string;
}, "querySuggest/unregister", never, never>;
/**
 * Select a suggestion provided through a specific query suggest entity.
 * @param id The unique identifier of the target query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 * @param expression The selected query suggestion (e.g., `coveo`).
 */
export declare const selectQuerySuggestion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[{
    id: string;
    expression: string;
}], {
    id: string;
    expression: string;
}, "querySuggest/selectSuggestion", never, never>;
/**
 * Clear the current partial basic query expression and list of query suggestions in a specific query suggest entity.
 * @param id The unique identifier of the target query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 */
export declare const clearQuerySuggest: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[{
    id: string;
}], {
    id: string;
}, "querySuggest/clear", never, never>;
/**
 * Clear the list of query suggestions in a specific query suggest entity.
 * @param id The unique identifier of the target query suggest entity (e.g., b953ab2e-022b-4de4-903f-68b2c0682942).
 */
export declare const clearQuerySuggestCompletions: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[{
    id: string;
}], {
    id: string;
}, "querySuggest/clearSuggestions", never, never>;
/**
 * Fetch a list of query suggestions for a specific query suggest entity according to the current headless state.
 * @param id The unique identifier of the target query suggest entity (e.g., b953ab2e-022b-4de4-903f-68b2c0682942).
 */
export declare const fetchQuerySuggestions: import("@reduxjs/toolkit").AsyncThunk<QuerySuggestionID & QuerySuggestSuccessResponse, QuerySuggestionID, {
    rejectValue: SearchAPIErrorWithStatusCode & QuerySuggestionID;
}>;
