import { Engine } from '../../app/headless-engine';
import { Controller } from '../controller/headless-controller';
/** The state relevant to the `ResultList` controller.*/
export declare type ResultListState = ResultList['state'];
export declare class ResultList extends Controller {
    constructor(engine: Engine);
    /**
     * @returns The state of the `ResultList` controller.
     */
    get state(): {
        results: import("../..").Result[];
    };
}
