import { Engine } from '../../app/headless-engine';
/**
 * The DidYouMean controller is responsible for handling query corrections.
 * When a query returns no result but finds a possible query correction, the controller either suggests the correction or
 * automatically triggers a new query with the suggested term.
 */
export declare type DidYouMean = ReturnType<typeof buildDidYouMean>;
export declare type DidYouMeanState = DidYouMean['state'];
export declare const buildDidYouMean: (engine: Engine) => {
    state: {
        hasQueryCorrection: boolean;
        enableDidYouMean: boolean;
        wasCorrectedTo: string;
        wasAutomaticallyCorrected: boolean;
        queryCorrection: import("../../api/search/search/query-corrections").QueryCorrection;
    };
    /**
     * Apply query correction using the query correction, if any, currently present in the state.
     */
    applyCorrection(): void;
    subscribe: (listener: () => void) => import("redux").Unsubscribe;
};
