import { ReducersMapObject, StateFromReducersMapObject, Middleware } from '@reduxjs/toolkit';
interface ConfigureStoreOptions<Reducers extends ReducersMapObject> {
    reducers: Reducers;
    preloadedState?: StateFromReducersMapObject<Reducers>;
    middlewares?: Middleware[];
}
export declare function configureStore<Reducers extends ReducersMapObject>({ reducers, preloadedState, middlewares, }: ConfigureStoreOptions<Reducers>): import("@reduxjs/toolkit").EnhancedStore<any, import("redux").AnyAction, Middleware<{}, any, import("redux").Dispatch<import("redux").AnyAction>>[]>;
export declare type Store = ReturnType<typeof configureStore>;
export {};
