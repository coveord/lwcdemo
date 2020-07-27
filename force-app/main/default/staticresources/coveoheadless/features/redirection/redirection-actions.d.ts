import { SearchAPIErrorWithStatusCode } from '../../api/search/search-api-error-response';
/**
 * Preprocess the query for the current headless state, and updates the redirection URL if a redirect trigger was fired in the query pipeline.
 */
export declare const checkForRedirection: import("@reduxjs/toolkit").AsyncThunk<string | null, void, {
    rejectValue: SearchAPIErrorWithStatusCode;
}>;
