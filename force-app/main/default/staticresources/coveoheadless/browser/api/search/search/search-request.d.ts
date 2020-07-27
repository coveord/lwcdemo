import { SearchPageState } from '../../../state';
import { FacetRequest } from '../../../features/facets/facet-set/interfaces/request';
import { Context } from '../../../features/context/context-slice';
import { RangeFacetRequest } from '../../../features/facets/range-facet-set/interfaces/request';
export interface SearchRequest {
    q: string;
    numberOfResults: number;
    sortCriteria: string;
    firstResult: number;
    facets: (FacetRequest | RangeFacetRequest)[];
    context: Context;
    enableDidYouMean: boolean;
    pipeline: string;
}
/** The search request parameters. For a full description, refer to {@link https://docs.coveo.com/en/13/cloud-v2-api-reference/search-api#operation/searchUsingPost}*/
export declare const searchRequestParams: (state: SearchPageState) => SearchRequest;
