import { Engine } from '../app/headless-engine';
import { MockStoreEnhanced } from 'redux-mock-store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { SearchPageState } from '../state';
export interface MockEngine extends Engine {
    store: MockStore;
    actions: AnyAction[];
}
export declare function buildMockEngine(config?: Partial<Engine>): MockEngine;
declare type DispatchExts = ThunkDispatch<SearchPageState, void, AnyAction>;
declare type MockStore = MockStoreEnhanced<SearchPageState, DispatchExts>;
export {};
