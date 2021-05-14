import request from "supertest";
import app from "@/infra/http/app";

describe("Animals endpoint", () => {
    it("should create new animal", async () => {
        const { status, body, text } = await request(app).post("/animals").send({ name: "Xoxo", type: "Cow", weight: 10, age: 1 });

        console.log(status, body, text);

        expect(status).toEqual(200);
    });

    it("should not create new animal - invalid name", async () => {
        const { status, body, text } = await request(app).post("/animals").send({ name: "Xo", type: "Cow", weight: 10, age: 1 });

        console.log(status, body, text);

        expect(status).toEqual(400);
    });
});
