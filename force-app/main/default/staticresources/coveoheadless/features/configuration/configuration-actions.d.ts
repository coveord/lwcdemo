/**
 * Update the global headless engine configuration.
 * @param accessToken The access token to use to authenticate requests against the Coveo Cloud endpoints. Typically, this will be an API key or search token that grants the privileges to execute queries and push usage analytics data in the target Coveo Cloud organization.
 * @param organizationId The unique identifier of the target Coveo Cloud organization (e.g., `mycoveocloudorganizationg8tp8wu3`)
 */
export declare const updateBasicConfiguration: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[{
    accessToken: string;
    organizationId: string;
}], {
    accessToken: string;
    organizationId: string;
}, "configuration/updateBasicConfiguration", never, never>;
/**
 * Update the search configuration.
 * @param searchApiBaseUrl The Search API base URL to use (e.g., https://globalplatform.cloud.coveo.com/rest/search/v2).
 */
export declare const updateSearchConfiguration: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[{
    searchApiBaseUrl?: string | undefined;
}], {
    searchApiBaseUrl?: string | undefined;
}, "configuration/updateSearchConfiguration", never, never>;
/**
 * Renew the accessToken specified in the global headless engine configuration.
 * @param renew A function that fetches a new access token. The function must return a Promise that resolves to a string (the new access token).
 */
export declare const renewAccessToken: import("@reduxjs/toolkit").AsyncThunk<string, () => Promise<string>, {}>;
/**
 * Disable analytics tracking
 */
export declare const disableAnalytics: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"configuration/analytics/disable">;
/**
 * Enable analytics tracking
 */
export declare const enableAnalytics: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"configuration/analytics/enable">;
