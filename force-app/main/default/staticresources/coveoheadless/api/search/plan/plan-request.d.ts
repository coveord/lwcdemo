import { SearchPageState } from '../../../state';
export declare const planRequestParams: (state: SearchPageState) => {
    context: Record<string, import("../../../features/context/context-slice").ContextValue>;
    pipeline: string;
    searchHub: string;
    organizationId: string;
    q: string;
};
export declare type PlanRequestParams = ReturnType<typeof planRequestParams>;
