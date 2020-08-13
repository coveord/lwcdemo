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
    /**
     * The first level of origin of the request, typically the identifier of the graphical search interface from which the request originates.
     * Coveo Machine Learning models use this information to provide contextually relevant output.
     * Notes:
     *    This parameter will be overridden if the search request is authenticated by a search token that enforces a specific searchHub.
     *    When logging a Search usage analytics event for a query, the originLevel1 field of that event should be set to the value of the searchHub search request parameter.
     */
    searchHub: string;
    organizationId: string;
};
export declare type QuerySuggestRequestParams = ReturnType<typeof querySuggestRequestParams>;
