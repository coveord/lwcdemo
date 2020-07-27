import { SearchPageState } from '../../state';
import { HttpMethods, HTTPContentTypes } from '../platform-client';
export declare const getOrganizationIdParam: (state: SearchPageState) => {
    /**
     * The unique identifier of the target Coveo Cloud organization.
     */
    organizationId: string;
};
export declare const getQParam: (state: SearchPageState) => {
    /**
     * The basic query expression filter applied to the state.
     */
    q: string;
};
export declare const baseSearchParams: (state: SearchPageState, method: HttpMethods, contentType: HTTPContentTypes, path: string) => {
    accessToken: string;
    method: HttpMethods;
    contentType: HTTPContentTypes;
    url: string;
};
