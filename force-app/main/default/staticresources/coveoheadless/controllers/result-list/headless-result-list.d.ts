import { Engine } from '../../app/headless-engine';
/** The state relevant to the `ResultList` controller.*/
export declare type ResultListState = ResultList['state'];
export declare type ResultList = ReturnType<typeof buildResultList>;
export declare const buildResultList: (engine: Engine) => {
    state: {
        results: import("../..").Result[];
    };
    subscribe: (listener: () => void) => import("redux").Unsubscribe;
};
