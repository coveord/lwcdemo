import { CoveoSearchPageClient, SearchPageClientProvider } from 'coveo.analytics';
import { SearchPageState } from '../../state';
export declare class AnalyticsProvider implements SearchPageClientProvider {
    private state;
    constructor(state: SearchPageState);
    getSearchEventRequestPayload(): {
        queryText: string;
        responseTime: number;
        results: {
            documentUri: string;
            documentUriHash: string;
        }[];
        numberOfResults: number;
    };
    getBaseMetadata(): {};
    getSearchUID(): string;
    getPipeline(): string;
    private mapResultsToAnalyticsDocument;
    private get queryText();
    private get responseTime();
    private get numberOfResults();
}
export declare const configureAnalytics: (state: SearchPageState) => CoveoSearchPageClient;
