import { FacetSortCriterion } from './interfaces/request';
export declare type FacetUpdateSortMetadata = {
    facetId: string;
    criterion: FacetSortCriterion;
};
export declare type FacetSelectionChangeMetadata = {
    facetId: string;
    facetValue: string;
};
/**
 * Log a facet show more.
 */
export declare const logFacetShowMore: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: import("../../analytics/analytics-actions").AnalyticsType.Search;
}, string, {}>;
/**
 * Log a facet show less.
 */
export declare const logFacetShowLess: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: import("../../analytics/analytics-actions").AnalyticsType.Search;
}, string, {}>;
/**
 * Log a facet search.
 */
export declare const logFacetSearch: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: import("../../analytics/analytics-actions").AnalyticsType.Search;
}, string, {}>;
/**
 * Log a facet sort change.
 */
export declare const logFacetUpdateSort: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: import("../../analytics/analytics-actions").AnalyticsType.Search;
}, FacetUpdateSortMetadata, {}>;
/**
 * Log a facet clear all event.
 * @param facetId The unique identifier for the facet.
 */
export declare const logFacetClearAll: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: import("../../analytics/analytics-actions").AnalyticsType.Search;
}, string, {}>;
/**
 * Log the selected facet value.
 */
export declare const logFacetSelect: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: import("../../analytics/analytics-actions").AnalyticsType.Search;
}, FacetSelectionChangeMetadata, {}>;
/**
 * Log the deselected facet value.
 */
export declare const logFacetDeselect: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: import("../../analytics/analytics-actions").AnalyticsType.Search;
}, FacetSelectionChangeMetadata, {}>;
