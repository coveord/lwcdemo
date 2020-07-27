import { Engine } from '../../app/headless-engine';
import { SortCriterion } from '../../features/sort-criteria/criteria';
import { Controller } from '../controller/headless-controller';
export interface SortProps {
    initialState: Partial<SortInitialState>;
}
export interface SortInitialState {
    /** The initial sort criterion to register in state. */
    criterion: SortCriterion;
}
/** The state relevant to the `Sort` controller.*/
export declare type SortState = Sort['state'];
export declare class Sort extends Controller {
    private props;
    constructor(engine: Engine, props?: Partial<SortProps>);
    /**
     * Updates the sort criterion and executes a new search.
     * @param criterion The new sort criterion.
     */
    sortBy(criterion: SortCriterion): void;
    /**
     * Returns `true` if the passed sort criterion matches the value in state, and `false` otherwise.
     * @param criterion The criterion to compare.
     * @returns {boolean}
     */
    isSortedBy(criterion: SortCriterion): boolean;
    /**
     * @returns The state of the `Sort` controller.
     */
    get state(): {
        sortCriteria: string;
    };
    private register;
    private search;
}
