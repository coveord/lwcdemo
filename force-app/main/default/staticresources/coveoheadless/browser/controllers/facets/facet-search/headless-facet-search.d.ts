import { Engine } from '../../../app/headless-engine';
import { FacetSearchOptions } from '../../../features/facets/facet-search-set/facet-search-actions';
import { FacetSearchResult } from '../../../api/search/facet-search/api/response';
export interface FacetSearchProps {
    options: FacetSearchOptions;
}
export declare type FacetSearch = ReturnType<typeof buildFacetSearch>;
export declare function buildFacetSearch(engine: Engine, props: FacetSearchProps): {
    /** Updates the facet search query.
     * @param text The new query.
     */
    updateText(text: string): void;
    /** Executes a facet search to update the values.*/
    search(): void;
    /** Selects a search result.*/
    select(value: FacetSearchResult): void;
    readonly state: {
        values: FacetSearchResult[];
        moreValuesAvailable: boolean;
    };
};
