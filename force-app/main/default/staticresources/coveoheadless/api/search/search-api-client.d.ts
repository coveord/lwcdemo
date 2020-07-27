import { PlanResponseSuccess, Plan } from './plan/plan-response';
import { SearchPageState } from '../../state';
import { QuerySuggestSuccessResponse, QuerySuggest } from './query-suggest/query-suggest-response';
import { FacetSearchResponse } from './facet-search/api/response';
import { Search, SearchResponseSuccess } from './search/search-response';
import { SearchAPIErrorWithStatusCode } from './search-api-error-response';
export declare type AllSearchAPIResponse = Plan | Search | QuerySuggest;
export interface SearchAPIClientOptions<RequestParams> {
    accessToken: string;
    searchApiBaseUrl: string;
    requestParams: RequestParams;
}
export declare type SearchAPIClientResponse<T> = {
    success: T;
} | {
    error: SearchAPIErrorWithStatusCode;
};
export declare class SearchAPIClient {
    static plan(state: SearchPageState): Promise<SearchAPIClientResponse<PlanResponseSuccess>>;
    static querySuggest(id: string, state: SearchPageState): Promise<SearchAPIClientResponse<QuerySuggestSuccessResponse>>;
    static search(state: SearchPageState): Promise<SearchAPIClientResponse<SearchResponseSuccess>>;
    static facetSearch(id: string, state: SearchPageState): Promise<FacetSearchResponse>;
}
export declare const isSuccessResponse: <T>(r: SearchAPIClientResponse<T>) => r is {
    success: T;
};
export declare const isErrorResponse: <T>(r: SearchAPIClientResponse<T>) => r is {
    error: SearchAPIErrorWithStatusCode;
};
