import { BaseFacetSearchRequest, Type } from '../api/request';
import { SearchPageState } from '../../../../state';
export interface FacetSearchRequest extends BaseFacetSearchRequest, Type<'specific'> {
}
export declare const facetSearchRequestParams: (id: string, state: SearchPageState) => FacetSearchRequest;
