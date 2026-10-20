export interface IJoinForm {
    name: string,
    email: string,
    phone: string
}

export enum JoinFormTypes {
    raw = "raw",
    event = "event",
    course = "course"
}

export interface JoinFormTypesInterface {
    type: JoinFormTypes
}