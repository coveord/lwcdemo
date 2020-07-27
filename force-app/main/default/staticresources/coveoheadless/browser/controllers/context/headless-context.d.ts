import { Engine } from '../../app/headless-engine';
import { Controller } from '../controller/headless-controller';
import { Context as ContextPayload, ContextValue } from '../../features/context/context-slice';
/** The state relevant to the `Context` controller.*/
export declare type ContextState = Context['state'];
export declare class Context extends Controller {
    constructor(engine: Engine);
    /**
     * @returns The state of the `Context` controller.
     */
    get state(): {
        contextValues: Record<string, ContextValue>;
    };
    /**
     * Set the context for the query. Replace any existing context by the new one.
     * @param ctx The context to set in the query.
     */
    setContext(ctx: ContextPayload): void;
    /**
     * Add, or replace if already present, a new context key and value pair.
     * @param key The context key to add.
     * @param value The context value to add.
     */
    addContext(key: string, value: ContextValue): void;
    /**
     * Remove a context key from the query.
     * @param key The context key to remove.
     */
    removeContext(key: string): void;
}
