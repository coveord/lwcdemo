import { QuerySuggestState } from '../../state';
export declare const getQuerySuggestInitialState: () => QuerySuggestState;
export declare const querySuggestReducer: import("redux").Reducer<Record<string, QuerySuggestState | undefined>, import("redux").AnyAction>;
