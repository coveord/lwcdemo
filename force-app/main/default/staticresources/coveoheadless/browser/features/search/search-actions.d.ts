import { SearchAction } from '../analytics/analytics-actions';
import { SearchResponseSuccess } from '../../api/search/search/search-response';
import { SearchAPIErrorWithStatusCode } from '../../api/search/search-api-error-response';
export interface ExecuteSearchThunkReturn {
    response: SearchResponseSuccess;
    duration: number;
    queryExecuted: string;
    automaticallyCorrected: boolean;
    analyticsAction: SearchAction;
}
/**
 * Executes a search query.
 */
export declare const executeSearch: import("@reduxjs/toolkit").AsyncThunk<ExecuteSearchThunkReturn, import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: import("../analytics/analytics-actions").AnalyticsType.Search;
}, void | {}, {}>, {
    rejectValue: SearchAPIErrorWithStatusCode;
}>;
