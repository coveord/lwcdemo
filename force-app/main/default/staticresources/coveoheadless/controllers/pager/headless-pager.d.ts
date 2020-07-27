import { Schema, SchemaValues } from '@coveo/bueno';
import { Engine } from '../../app/headless-engine';
import { Controller } from '../controller/headless-controller';
export declare type PagerState = Pager['state'];
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
export declare class Pager extends Controller {
    private options;
    constructor(engine: Engine, props?: PagerProps);
    private initOptions;
    private register;
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
     * Returns `true` when a next page is available, and `false` otherwise.
     */
    get hasNextPage(): boolean;
    /**
     * Returns `true` when a previous page is available, and `false` otherwise.
     */
    get hasPreviousPage(): boolean;
    /** Returns `true` when the current page is equal to the current page, and `false` otherwise.
     * @param page The page number to check.
     * @returns boolean.
     */
    isCurrentPage(page: number): boolean;
    /**
     * @returns The state of the `Pager` controller.
     */
    get state(): {
        currentPage: number;
        currentPages: number[];
        maxPage: number;
    };
    private get currentPages();
    private get currentPage();
    private get maxPage();
}
export {};
