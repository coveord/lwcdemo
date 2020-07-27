import { FacetRequest } from './request';
declare type FacetRequiredParameters = Pick<FacetRequest, 'facetId' | 'field'>;
export declare type FacetOptionalParameters = Partial<Pick<FacetRequest, 'delimitingCharacter' | 'filterFacetCount' | 'injectionDepth' | 'numberOfValues' | 'sortCriteria'>>;
export declare type FacetRegistrationOptions = FacetRequiredParameters & FacetOptionalParameters;
export {};
