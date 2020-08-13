import { ResultTemplate } from './result-templates';
import { Result } from '../../api/search/search/result';
import { SearchPageState } from '../../state';
import { Engine } from '../../app/headless-engine';
/**
 * Manager in which result templates can be registered and selected based on a list of conditions and priority.
 */
export declare class ResultTemplatesManager<Content = unknown, State = SearchPageState> {
    private engine;
    private templates;
    constructor(engine: Engine<State>);
    registerTemplates(...templates: ResultTemplate<Content>[]): void;
    private validateTemplates;
    selectTemplate(result: Result): Content | null;
}
