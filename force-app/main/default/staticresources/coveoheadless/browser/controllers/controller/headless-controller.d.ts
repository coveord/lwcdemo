import { Engine } from '../../app/headless-engine';
import { SearchPageState } from '../../state';
export declare abstract class Controller<State = SearchPageState> {
    protected engine: Engine<State>;
    constructor(engine: Engine<State>);
    /**
     * Adds a callback that will be called on state change.
     *
     * @param listener A callback to be invoked on state change.
     * @returns An unsubscribe function to remove the listener.
     */
    subscribe(listener: () => void): import("redux").Unsubscribe;
    protected get dispatch(): import("redux-thunk").ThunkDispatch<unknown, null, import("redux").AnyAction> & import("redux-thunk").ThunkDispatch<unknown, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
}
export declare function buildController(engine: Engine): {
    subscribe: (listener: () => void) => import("redux").Unsubscribe;
};
