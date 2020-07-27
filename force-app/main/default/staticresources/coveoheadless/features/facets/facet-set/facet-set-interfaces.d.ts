import { BaseFacetRequest, CurrentValues, Freezable, Delimitable, Type, SortCriteria } from '../facet-api/request';
import { BaseFacetResponse } from '../facet-api/response';
declare type FacetValueState = 'idle' | 'selected';
export declare type FacetSortCriterion = 'score' | 'alphanumeric';
export interface FacetValueRequest {
    value: string;
    state: FacetValueState;
}
export interface FacetValue {
    value: string;
    state: FacetValueState;
    numberOfResults: number;
}
export interface FacetRequest extends BaseFacetRequest, CurrentValues<FacetValueRequest>, Freezable, Delimitable, Type<'specific'>, SortCriteria<FacetSortCriterion> {
}
export declare type FacetRequestOptions = Partial<Pick<FacetRequest, 'delimitingCharacter' | 'filterFacetCount' | 'injectionDepth' | 'numberOfValues' | 'sortCriteria'>>;
export declare type FacetResponse = BaseFacetResponse<FacetValue>;
export {};
