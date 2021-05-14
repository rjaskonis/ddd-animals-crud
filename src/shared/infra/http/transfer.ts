export interface HttpRequest {
    params?: any;
    body?: any;
}

export abstract class HttpResponseInfo {
    statusCode: number;
    body: any;
    text: string;
}

export class HttpResponse extends HttpResponseInfo {
    static ok(data: any): HttpResponseInfo {
        return {
            statusCode: 200,
            body: data,
            text: "OK",
        };
    }

    static badRequest(error: Error): HttpResponseInfo {
        return {
            statusCode: 400,
            body: error.message,
            text: "Bad Request",
        };
    }

    static serverError(errorText: string): HttpResponseInfo {
        return {
            statusCode: 500,
            body: new Error(errorText),
            text: "Internal Server Error",
        };
    }
}
