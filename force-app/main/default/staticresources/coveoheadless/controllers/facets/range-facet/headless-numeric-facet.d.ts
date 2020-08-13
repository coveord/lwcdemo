import { Engine } from '../../../app/headless-engine';
import { AutomaticRangeFacetOptions, ManualRangeFacetOptions } from '../../../features/facets/range-facets/generic/interfaces/options';
import { NumericFacetRequest, NumericRangeRequest } from '../../../features/facets/range-facets/numeric-facet-set/interfaces/request';
import { NumericFacetValue } from '../../../features/facets/range-facets/numeric-facet-set/interfaces/response';
declare type NumericRangeOptions = Pick<NumericRangeRequest, 'start' | 'end'> & Partial<NumericRangeRequest>;
export declare function buildNumericRange(config: NumericRangeOptions): NumericRangeRequest;
export declare type NumericFacetProps = {
    options: NumericFacetOptions;
};
export declare type NumericFacetOptions = {
    facetId?: string;
} & (Omit<AutomaticRangeFacetOptions<NumericFacetRequest>, 'facetId'> | Omit<ManualRangeFacetOptions<NumericFacetRequest>, 'facetId'>);
export declare type NumericFacet = ReturnType<typeof buildNumericFacet>;
export declare type NumericFacetState = NumericFacet['state'];
export declare function buildNumericFacet(engine: Engine, props: NumericFacetProps): {
    /**
     * Selects (deselects) the passed value if unselected (selected).
     * @param selection The facet value to select or deselect.
     */
    toggleSelect(selection: NumericFacetValue): void;
    /** Returns `true` if the passed facet value is selected and `false` otherwise.
     * @param {RangeFacetValue}
     * @returns {boolean}
     * */
    isValueSelected: (selection: NumericFacetValue) => boolean;
    state: {
        values: NumericFacetValue[];
    };
    subscribe: (listener: () => void) => import("redux").Unsubscribe;
};
export {};
