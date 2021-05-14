import { UseCase } from "@/shared/core/use-case";
import { Request, Response } from "express";
import { HttpController } from "./controller";
import { HttpRequest } from "./transfer";

export const routeAdapter = (controller: HttpController<UseCase<any, any>>) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = { body: req.body, params: req.params };

        const httpResponse = await controller.handle(httpRequest);

        res.status(httpResponse.statusCode).send(httpResponse.body);
    };
};
