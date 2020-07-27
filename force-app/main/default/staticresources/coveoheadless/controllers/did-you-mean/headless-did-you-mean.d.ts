import { Engine } from '../../app/headless-engine';
import { Controller } from '../controller/headless-controller';
/** The state relevant to the `DidYouMean` controller.*/
export declare type DidYouMeanState = DidYouMean['state'];
/**
 * The DidYouMean controller is responsible for handling query corrections.
 * When a query returns no result but finds a possible query correction, the controller either suggests the correction or
 * automatically triggers a new query with the suggested term.
 */
export declare class DidYouMean extends Controller {
    constructor(engine: Engine);
    /**
     * @returns The state of the `DidYouMean` controller.
     */
    get state(): {
        hasQueryCorrection: boolean;
        enableDidYouMean: boolean;
        wasCorrectedTo: string;
        wasAutomaticallyCorrected: boolean;
        queryCorrection: import("../../api/search/search/query-corrections").QueryCorrection;
    };
    applyCorrection(): void;
}
