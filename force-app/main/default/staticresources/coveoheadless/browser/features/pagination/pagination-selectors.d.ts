import { SearchPageState } from '../../state';
/** Calculates the current page number.
 * @param state SearchPageState.
 * @returns the current page number.
 */
export declare const currentPageSelector: import("reselect").OutputSelector<SearchPageState, number, (res1: number, res2: number) => number>;
/** Calculates the maximum page number
 * @param state SearchPageState.
 * @returns the maximum page number.
 */
export declare const maxPageSelector: import("reselect").OutputSelector<SearchPageState, number, (res1: number, res2: number) => number>;
/** Calculates the current pages relative to the current page.
 * @param state SearchPageState.
 * @param desiredNumberOfPages the number of pages to return.
 * @returns the current page numbers.
 */
export declare const currentPagesSelector: import("reselect").OutputParametricSelector<SearchPageState, number, number[], (res1: number, res2: number, res3: number) => number[]>;
