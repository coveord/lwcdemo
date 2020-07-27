import { RangeFacetRequest, AutomaticRanges } from './request';
declare type RangeFacetRequiredParameters = Pick<RangeFacetRequest, 'facetId' | 'field' | 'type'>;
declare type RangeFacetOptionalParameters = Partial<Pick<RangeFacetRequest, 'filterFacetCount' | 'injectionDepth' | 'numberOfValues' | 'sortCriteria'>>;
declare type ManualRangeFacetOptions = RangeFacetRequiredParameters & Pick<RangeFacetRequest, 'currentValues'> & AutomaticRanges<false> & RangeFacetOptionalParameters;
declare type AutomaticRangeFacetOptions = RangeFacetRequiredParameters & Partial<Pick<RangeFacetRequest, 'currentValues'>> & AutomaticRanges<true> & RangeFacetOptionalParameters;
export declare type RangeFacetRegistrationOptions = ManualRangeFacetOptions | AutomaticRangeFacetOptions;
export {};
