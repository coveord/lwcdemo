import { SearchResponseSuccess } from '../../api/search/search/search-response';
import { SearchAPIErrorWithStatusCode } from '../../api/search/search-api-error-response';
export interface SearchState {
    /** The search response. For a full description, refer to {@link https://docs.coveo.com/en/13/cloud-v2-api-reference/search-api#operation/searchUsingPost}*/
    response: SearchResponseSuccess;
    duration: number;
    queryExecuted: string;
    error: SearchAPIErrorWithStatusCode | null;
    automaticallyCorrected: boolean;
}
export declare function getSearchInitialState(): SearchState;
export declare const searchReducer: import("redux").Reducer<SearchState, import("redux").AnyAction>;
