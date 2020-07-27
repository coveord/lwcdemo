import { ResultTemplate } from './result-templates';
import { Result } from '../../api/search/search/result';
/**
 * Manager in which result templates can be registered and selected based on a list of conditions and priority.
 */
export declare class ResultTemplatesManager<Content = unknown> {
    private templates;
    constructor();
    registerTemplates(...templates: ResultTemplate<Content>[]): void;
    private validateTemplates;
    selectTemplate(result: Result): Content | null;
}
