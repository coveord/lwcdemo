import { SortCriterion } from './criteria';
/**
 * Initializes the sortCritera. For more information, refer to {@link https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-sortCriteria}
 * @param string The initial sort criterion.
 */
export declare const registerSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[SortCriterion], SortCriterion, "sortCriteria/register", never, never>;
/**
 * Updates the sortCritera to the passed criterion.
 * @param string The updated sort criterion.
 */
export declare const updateSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[SortCriterion], SortCriterion, "sortCriteria/update", never, never>;
