import { Schema, SchemaValues } from '@coveo/bueno';
import { Engine } from '../../app/headless-engine';
export interface PagerProps {
    options?: PagerOptions;
    initialState?: PagerInitialState;
}
declare const optionsSchema: Schema<{
    numberOfPages: number;
}>;
export declare type PagerOptions = SchemaValues<typeof optionsSchema>;
export declare type PagerInitialState = {
    /** The initial page number */
    page?: number;
};
/**
 * The `Pager` controller allows to navigate through the different result pages.
 */
export declare type Pager = ReturnType<typeof buildPager>;
export declare type PagerState = Pager['state'];
export declare const buildPager: (engine: Engine, props?: PagerProps) => {
    state: {
        currentPage: number;
        currentPages: number[];
        maxPage: number;
    };
    currentPages: number[];
    currentPage: number;
    maxPage: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    /**
     * Updates the results to those on the passed page.
     * @param page The page number.
     */
    selectPage(page: number): void;
    /**
     * Updates the results to those on the next page.
     */
    nextPage(): void;
    /**
     * Updates the results to those on the previous page.
     */
    previousPage(): void;
    /**
     * @returns `true` when the current page is equal to the current page, and `false` otherwise.
     * @param page The page number to check.
     * @returns boolean.
     */
    isCurrentPage(page: number): boolean;
    subscribe: (listener: () => void) => import("redux").Unsubscribe;
};
export {};
