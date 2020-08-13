import { Engine } from '../../app/headless-engine';
/**
 * `QueryError` controller allows to retrieve information about the current error returned by the search API, if any.
 */
export declare type QueryError = ReturnType<typeof buildQueryError>;
export declare type QueryErrorState = QueryError['state'];
export declare const buildQueryError: (engine: Engine) => {
    state: {
        hasError: boolean;
        error: import("../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode | null;
    };
    subscribe: (listener: () => void) => import("redux").Unsubscribe;
};
