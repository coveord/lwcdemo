declare type SortOrder = 'ascending' | 'descending';
export interface SortCriterion {
    expression: string;
}
export declare function buildRelevanceSortCriterion(): SortCriterion;
export declare function buildQueryRankingExpressionSortCriterion(): SortCriterion;
export declare function buildNoSortCriterion(): SortCriterion;
export declare function buildDateSortCriterion(order: SortOrder): SortCriterion;
export declare function buildFieldSortCriterion(field: string, order: SortOrder): SortCriterion;
export declare function buildCompositeSortCriterion(criteria: SortCriterion[]): SortCriterion;
export {};
