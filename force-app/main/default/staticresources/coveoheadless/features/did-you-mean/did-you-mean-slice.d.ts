import { QueryCorrection } from '../../api/search/search/query-corrections';
export interface DidYouMeanState {
    enableDidYouMean: boolean;
    wasCorrectedTo: string;
    wasAutomaticallyCorrected: boolean;
    queryCorrection: QueryCorrection;
}
export declare const emptyCorrection: () => {
    correctedQuery: string;
    wordCorrections: never[];
};
export declare function getDidYouMeanInitialState(): DidYouMeanState;
export declare const didYouMeanReducer: import("redux").Reducer<DidYouMeanState, import("redux").AnyAction>;
