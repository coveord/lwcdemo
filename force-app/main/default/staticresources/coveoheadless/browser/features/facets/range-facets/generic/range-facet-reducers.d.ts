import { RangeFacetRequest, RangeFacetResponse, RangeFacetValue } from './interfaces/range-facet';
export declare function registerRangeFacet<T extends RangeFacetRequest>(state: Record<string, T>, request: T): void;
export declare function toggleSelectRangeValue<T extends RangeFacetRequest, U extends RangeFacetValue>(state: Record<string, T>, facetId: string, selection: U): void;
export declare function onRangeFacetRequestFulfilled<T extends RangeFacetRequest, U extends RangeFacetResponse>(state: Record<string, T>, facets: U[], convert: (values: U['values']) => T['currentValues']): void;
