import { AsyncThunkAction } from '@reduxjs/toolkit';
import { SearchPageEvents } from 'coveo.analytics/dist/definitions/searchPage/searchPageEvents';
import { SearchPageState } from '../../state';
export declare const searchPageState: (getState: () => unknown) => SearchPageState;
export declare enum AnalyticsType {
    Search = 0,
    Custom = 1,
    Click = 2
}
export declare type SearchAction = AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void | {}, {}>;
export declare type CustomAction = AsyncThunkAction<{
    analyticsType: AnalyticsType.Custom;
}, {}, {}>;
export declare type ClickAction = AsyncThunkAction<{
    analyticsType: AnalyticsType.Click;
}, {}, {}>;
export declare const makeSearchActionType: () => {
    analyticsType: AnalyticsType.Search;
};
export interface GenericSearchEventPayload {
    evt: SearchPageEvents | string;
    meta?: Record<string, any>;
}
/**
 * Log generic search event
 */
export declare const logGenericSearchEvent: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, GenericSearchEventPayload, {}>;
