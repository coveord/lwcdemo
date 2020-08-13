import { AutomaticRanges } from './request';
import { RangeFacetRequest } from './range-facet';
declare type RangeFacetRequiredParameters = Pick<RangeFacetRequest, 'facetId' | 'field'>;
declare type RangeFacetOptionalParameters = Partial<Pick<RangeFacetRequest, 'filterFacetCount' | 'injectionDepth' | 'numberOfValues' | 'sortCriteria'>>;
export declare type ManualRangeFacetOptions<T extends RangeFacetRequest> = RangeFacetRequiredParameters & Pick<T, 'currentValues'> & AutomaticRanges<false> & RangeFacetOptionalParameters;
export declare type AutomaticRangeFacetOptions<T extends RangeFacetRequest> = RangeFacetRequiredParameters & Partial<Pick<T, 'currentValues'>> & AutomaticRanges<true> & RangeFacetOptionalParameters;
export {};
