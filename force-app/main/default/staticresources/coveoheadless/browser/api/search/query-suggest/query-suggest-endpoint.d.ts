import { SearchPageState } from '../../../state';
export declare function getQuerySuggestions(id: string, state: SearchPageState): Promise<import("../search-api-client").SearchAPIClientResponse<import("./query-suggest-response").QuerySuggestSuccessResponse>>;
