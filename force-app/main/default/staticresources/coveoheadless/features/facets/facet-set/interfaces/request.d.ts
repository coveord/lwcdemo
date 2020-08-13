import { BaseFacetRequest, CurrentValues, Freezable, Delimitable, Type, SortCriteria, BaseFacetValueRequest, Expandable } from '../../facet-api/request';
export declare type FacetSortCriterion = 'score' | 'alphanumeric';
export interface FacetValueRequest extends BaseFacetValueRequest {
    value: string;
}
export interface FacetRequest extends BaseFacetRequest, CurrentValues<FacetValueRequest>, Expandable, Freezable, Delimitable, Type<'specific'>, SortCriteria<FacetSortCriterion> {
}
