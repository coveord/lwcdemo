import { BaseFacetResponse, BaseFacetValue } from '../../facet-api/response';
export interface RangeFacetValue extends BaseFacetValue {
    start: string;
    end: string;
    endInclusive: boolean;
}
export declare type RangeFacetResponse = BaseFacetResponse<RangeFacetValue>;
