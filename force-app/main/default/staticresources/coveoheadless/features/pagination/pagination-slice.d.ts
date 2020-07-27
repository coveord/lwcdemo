export interface PaginationState {
    firstResult: number;
    numberOfResults: number;
    totalCountFiltered: number;
}
export declare function getPaginationInitialState(): PaginationState;
export declare const minimumPage = 1;
export declare const maximumNumberOfResultsFromIndex = 1000;
export declare const paginationReducer: import("redux").Reducer<PaginationState, import("redux").AnyAction>;
export declare function calculateFirstResult(page: number, numberOfResults: number): number;
export declare function calculatePage(firstResult: number, numberOfResults: number): number;
export declare function calculateMaxPage(totalCountFiltered: number, numberOfResults: number): number;
