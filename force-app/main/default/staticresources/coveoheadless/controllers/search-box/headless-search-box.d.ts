import { Schema, SchemaValues } from '@coveo/bueno';
import { Engine } from '../../app/headless-engine';
export interface SearchBoxProps {
    options: SearchBoxOptions;
}
declare const optionsSchema: Schema<{
    id: string;
    numberOfSuggestions: number;
    isStandalone: boolean;
}>;
export declare type SearchBoxOptions = SchemaValues<typeof optionsSchema>;
/**
 * A scoped and simplified part of the headless state that is relevant to the `SearchBox` controller.
 */
export declare type SearchBoxState = SearchBox['state'];
/**
 * The `SearchBox` headless controller offers a high-level interface for designing a common search box UI controller.
 */
export declare type SearchBox = ReturnType<typeof buildSearchBox>;
export declare const buildSearchBox: (engine: Engine, props?: Partial<SearchBoxProps>) => {
    id: string;
    /**
     * Updates the search box text value and shows the suggestions for that value.
     * @param value  The string value to update the search box with.
     */
    updateText(value: string): void;
    /**
     * Clears the search box text and the suggestions.
     */
    clear(): void;
    /**
     * Clears the suggestions.
     */
    hideSuggestions(): void;
    /**
     * Shows the suggestions for the current search box value.
     */
    showSuggestions(): void;
    /**
     * Selects a suggestion and calls `submit`.
     * @param value The string value of the suggestion to select
     */
    selectSuggestion(value: string): void;
    /**
     * If the `standalone` option is `true`, gets the redirection URL.
     * If the `standalone` option is `false`, triggers a search query.
     */
    submit(): void;
    state: {
        value: string;
        suggestions: {
            value: string;
        }[];
        redirectTo: string | null;
    };
    subscribe: (listener: () => void) => import("redux").Unsubscribe;
};
export {};
