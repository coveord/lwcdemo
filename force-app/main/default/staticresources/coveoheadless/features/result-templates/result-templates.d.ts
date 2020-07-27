import { Result } from '../../api/search/search/result';
export declare type ResultTemplateCondition = (result: Result) => boolean;
export interface ResultTemplate<Content = unknown> {
    content: Content;
    conditions: ResultTemplateCondition[];
    priority?: number;
}
