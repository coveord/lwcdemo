import { Engine } from '../../app/headless-engine';
import { Controller } from '../controller/headless-controller';
/** The state relevant to the `Pipeline` controller.*/
export declare type PipelineState = Pipeline['state'];
export declare class Pipeline extends Controller {
    constructor(engine: Engine);
    /**
     * @returns The state of the `Pipeline` controller.
     */
    get state(): {
        pipeline: string;
    };
    setPipeline(pipeline: string): void;
}
