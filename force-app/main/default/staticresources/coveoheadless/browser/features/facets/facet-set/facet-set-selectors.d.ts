import { SearchPageState } from '../../../state';
export declare const facetSelector: (state: SearchPageState, id: string) => import("./interfaces/response").FacetResponse | undefined;
export declare const facetRequestSelector: (state: SearchPageState, id: string) => import("./interfaces/request").FacetRequest;
