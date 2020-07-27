import { SearchPageState } from '../../../state';
export declare const querySuggestRequestParams: (id: string, state: SearchPageState) => {
    /**
     * Specifies the number of suggestions that the Coveo Machine Learning service should return.
     */
    count: number;
    /**
     * The basic query expression for which to get completion.
     */
    q: string;
    /**
     * Specifies the context that Coveo Machine Learning should leverage to return suggestions.
     */
    context: Record<string, import("../../../features/context/context-slice").ContextValue>;
    /**
     * Specifies the name of the query pipeline to use for the query. If not specified, the default query pipeline will be used.
     */
    pipeline: string;
    organizationId: string;
};
export declare type QuerySuggestRequestParams = ReturnType<typeof querySuggestRequestParams>;
