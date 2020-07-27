import { Engine } from '../../app/headless-engine';
import { Controller } from '../controller/headless-controller';
/** The state relevant to the `QuerySummary` controller.*/
export declare type QuerySummaryState = QuerySummary['state'];
export declare class QuerySummary extends Controller {
    constructor(engine: Engine);
    /**
     * @returns The state of the `QuerySummary` controller.
     */
    get state(): {
        firstResult: number;
        lastResult: number;
        total: number;
        query: string;
        hasQuery: boolean;
        hasDuration: boolean;
        hasResults: boolean;
        durationInMilliseconds: number;
        durationInSeconds: number;
    };
    private get durationInSeconds();
}
