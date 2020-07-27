import { Engine } from '../../app/headless-engine';
import { Controller } from '../controller/headless-controller';
export interface ResultsPerPageProps {
    initialState: Partial<ResultsPerPageInitialState>;
}
export interface ResultsPerPageInitialState {
    numberOfResults: number;
}
/** The state relevant to the `ResultsPerPage` controller.*/
export declare type ResultsPerPageState = ResultsPerPage['state'];
export declare class ResultsPerPage extends Controller {
    private props;
    constructor(engine: Engine, props?: Partial<ResultsPerPageProps>);
    /** Updates the number of results to request
     * @param number The number of results.
     */
    set(num: number): void;
    /** Returns `true` if the number of results is equal to the passed value, and `false` otherwise.
     * @returns boolean
     */
    isSetTo(num: number): boolean;
    /**
     * @returns The state of the `ResultsPerPage` controller.
     */
    get state(): {
        numberOfResults: number;
    };
    private register;
}
