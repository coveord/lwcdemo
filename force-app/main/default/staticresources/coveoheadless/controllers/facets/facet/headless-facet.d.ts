import { Engine } from '../../../app/headless-engine';
import { FacetOptionalParameters } from '../../../features/facets/facet-set/interfaces/options';
import { FacetSearchRequestOptions } from '../../../features/facets/facet-search-set/facet-search-request-options';
import { FacetRegistrationOptions } from '../../../features/facets/facet-set/interfaces/options';
import { FacetValue } from '../../../features/facets/facet-set/interfaces/response';
import { FacetSortCriterion } from '../../../features/facets/facet-set/interfaces/request';
export declare type Facet = ReturnType<typeof buildFacet>;
export declare type FacetState = Facet['state'];
export declare type FacetProps = {
    options: FacetOptions;
};
export declare type FacetOptions = FacetOptionalParameters & {
    field: string;
    facetId?: string;
    facetSearch?: Partial<FacetSearchRequestOptions>;
};
export declare type ValidatedFacetOptions = FacetRegistrationOptions & {
    facetSearch: Partial<FacetSearchRequestOptions>;
};
export declare function buildFacet(engine: Engine, props: FacetProps): {
    facetSearch: {
        updateText(text: string): void;
        search(): void;
        select(value: import("../../../api/search/facet-search/api/response").FacetSearchResult): void;
        readonly state: {
            values: import("../../../api/search/facet-search/api/response").FacetSearchResult[];
            moreValuesAvailable: boolean;
        };
    };
    /**
     * Selects (deselects) the passed value if unselected (selected).
     * @param selection The facet value to select or deselect.
     */
    toggleSelect(selection: FacetValue): void;
    /**
     * Returns `true` is the passed facet value is selected and `false` otherwise.
     * @param facetValue The facet value to check.
     * @returns {boolean}.
     */
    isValueSelected: (value: FacetValue) => boolean;
    /** Deselects all facet values.*/
    deselectAll(): void;
    hasActiveValues: boolean;
    /** Sorts the facet values according to the passed criterion.
     * @param {FacetSortCriterion} criterion The criterion to sort values by.
     */
    sortBy(criterion: FacetSortCriterion): void;
    /**
     * Returns `true` if the facet values are sorted according to the passed criterion and `false` otherwise.
     * @param {FacetSortCriterion} criterion The criterion to compare.
     */
    isSortedBy(criterion: FacetSortCriterion): boolean;
    /**
     * Increases the number of values displayed in the facet.
     */
    showMoreValues(): void;
    canShowMoreValues: boolean;
    /** Sets the displayed number of values to the originally configured value.*/
    showLessValues(): void;
    canShowLessValues: boolean;
    state: {
        values: FacetValue[];
        sortCriterion: FacetSortCriterion;
    };
    subscribe: (listener: () => void) => import("redux").Unsubscribe;
};
