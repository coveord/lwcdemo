import { Engine } from '../../app/headless-engine';
/**
 * The QuerySummary component can display information about the current range of results (e.g., "Results
 * 1-10 of 123").
 *
 * When the query does not match any items, the QuerySummary component can instead return information to the end users.
 */
export declare type QuerySummary = ReturnType<typeof buildQuerySummary>;
/** The state relevant to the `QuerySummary` controller.*/
export declare type QuerySummaryState = QuerySummary['state'];
export declare const buildQuerySummary: (engine: Engine) => {
    state: {
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
    subscribe: (listener: () => void) => import("redux").Unsubscribe;
};
