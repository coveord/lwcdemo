import { SchemaDefinition, SchemaValue } from '@coveo/bueno';
export declare const validatePayloadSchema: <P>(payload: P, schemaDefinition: SchemaDefinition<Required<P>>) => {
    payload: P;
};
export declare const validatePayloadValue: <P>(payload: P, schemaValue: SchemaValue<P>) => {
    payload: P;
};
