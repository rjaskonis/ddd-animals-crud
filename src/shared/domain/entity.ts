import { Identifier } from "./identifier";
import { v4 as uuid } from "uuid";

const isEntity = (v: any): v is Entity<any> => {
    return v instanceof Entity;
};

export abstract class Entity<T extends Identifier> {
    protected readonly _id: Identifier;

    constructor(id?: T) {
        this._id = id ? id : uuid();
    }

    public equals(object?: Entity<Identifier>): boolean {
        if (object == null || object == undefined) {
            return false;
        }

        if (this === object) {
            return true;
        }

        if (!isEntity(object)) {
            return false;
        }

        return this._id === object._id;
    }
}
