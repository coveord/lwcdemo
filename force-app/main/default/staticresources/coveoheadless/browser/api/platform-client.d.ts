export declare type HttpMethods = 'POST' | 'GET' | 'DELETE' | 'PUT';
export declare type HTTPContentTypes = 'application/json' | 'text/html';
export interface PlatformClientCallOptions<RequestParams> {
    url: string;
    accessToken: string;
    method: HttpMethods;
    contentType: HTTPContentTypes;
    requestParams: RequestParams;
}
export interface PlatformResponse<T> {
    body: T;
    response: Response;
}
export declare class PlatformClient {
    static call<RequestParams, ResponseType>(options: PlatformClientCallOptions<RequestParams>): Promise<PlatformResponse<ResponseType>>;
}
