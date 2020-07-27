import { Engine } from '../../app/headless-engine';
import { Controller } from '../controller/headless-controller';
/** The state relevant to the `QueryError` component.*/
export declare type QueryErrorState = QueryError['state'];
export declare class QueryError extends Controller {
    constructor(engine: Engine);
    /**
     * @returns The state of the `QueryError` component.
     */
    get state(): {
        hasError: boolean;
        error: import("../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode | null;
    };
}
