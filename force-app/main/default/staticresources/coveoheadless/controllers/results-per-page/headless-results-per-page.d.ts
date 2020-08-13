import { Engine } from '../../app/headless-engine';
export interface ResultsPerPageProps {
    initialState: Partial<ResultsPerPageInitialState>;
}
export interface ResultsPerPageInitialState {
    numberOfResults: number;
}
/**
 * The ResultsPerPage component allows the end user to choose how many results to display per page.
 */
export declare type ResultsPerPage = ReturnType<typeof buildResultsPerPage>;
/** The state relevant to the `ResultsPerPage` controller.*/
export declare type ResultsPerPageState = ResultsPerPage['state'];
export declare const buildResultsPerPage: (engine: Engine, props?: Partial<ResultsPerPageProps>) => {
    state: {
        numberOfResults: number;
    };
    /** Updates the number of results to request
     * @param number The number of results.
     */
    set(num: number): void;
    /** Returns `true` if the number of results is equal to the passed value, and `false` otherwise.
     * @returns boolean
     */
    isSetTo(num: number): boolean;
    subscribe: (listener: () => void) => import("redux").Unsubscribe;
};
