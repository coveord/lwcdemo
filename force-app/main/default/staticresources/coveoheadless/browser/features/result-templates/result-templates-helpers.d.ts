import { ResultTemplateCondition } from './result-templates';
/**
 * Condition that verifies if a field value contains any of the specified values.
 * @param fieldName Name of the field to match against.
 * @param valuesToMatch List of possible values to match.
 */
export declare const fieldMustMatch: (fieldName: string, valuesToMatch: string[]) => ResultTemplateCondition;
/**
 * Condition that verifies that a field value does not contains any of the specified values.
 * @param fieldName Name of the field to verify against.
 * @param blacklistedValues List of all values to blacklist.
 */
export declare const fieldMustNotMatch: (fieldName: string, blacklistedValues: string[]) => ResultTemplateCondition;
