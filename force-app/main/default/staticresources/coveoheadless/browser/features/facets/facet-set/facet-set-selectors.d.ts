import { SearchPageState } from '../../../state';
export declare const facetSelector: (state: SearchPageState, id: string) => import("./interfaces/response").FacetResponse | import("../range-facets/date-facet-set/interfaces/response").DateFacetResponse | import("../range-facets/numeric-facet-set/interfaces/response").NumericFacetResponse | undefined;
export declare const facetRequestSelector: (state: SearchPageState, id: string) => import("./interfaces/request").FacetRequest;
