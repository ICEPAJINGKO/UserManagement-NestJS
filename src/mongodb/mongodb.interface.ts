import { Document } from "mongoose";

export interface IUser extends Document {
    readonly id: string,
    readonly name: string,
    readonly age: number,
    readonly position: string,
}

export interface IVideo extends Document {
    readonly description: string,
    readonly sources: [string],
    readonly subtitle: string,
    readonly thumb: string,
    readonly title: string,
    readonly like: number,
    readonly view: number,
    readonly score: number,
}