export interface FieldsState {
    fieldsToInclude: string[];
}
export declare const getFieldsInitialState: () => FieldsState;
export declare const fieldsReducer: import("redux").Reducer<FieldsState, import("redux").AnyAction>;
