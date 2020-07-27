import { Engine } from '../../app/headless-engine';
import { Controller } from '../controller/headless-controller';
/** The state relevant to the `History` controller.*/
export declare type HistoryState = History['state'];
export declare class History extends Controller {
    constructor(engine: Engine);
    /**
     * @returns The state of the `History` controller.
     */
    get state(): import("../../app/undoable").StateWithHistory<import("../../search-parameters-state").SearchParametersState>;
    back(): Promise<void>;
    forward(): Promise<void>;
}
