import { SearchParametersState } from '../../search-parameters-state';
export declare const snapshot: import("@reduxjs/toolkit").ActionCreatorWithPayload<SearchParametersState, string>;
export declare const back: import("@reduxjs/toolkit").AsyncThunk<void, void, {}>;
export declare const forward: import("@reduxjs/toolkit").AsyncThunk<void, void, {}>;
export declare const change: import("@reduxjs/toolkit").AsyncThunk<SearchParametersState, void, {}>;
export declare const logNavigateForward: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: import("../analytics/analytics-actions").AnalyticsType.Search;
}, void, {}>;
export declare const logNavigateBackward: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: import("../analytics/analytics-actions").AnalyticsType.Search;
}, void, {}>;
