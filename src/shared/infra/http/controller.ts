import { Request, Response } from "express";
import { HttpRequest, HttpResponse } from "./transfer";

export abstract class HttpController<T> {
    constructor(public readonly useCase: T) {}

    public abstract handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}
