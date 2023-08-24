export enum ForWhomType {
    event = "event",
    course = "event"
}

export interface ForWhomProps {
    forWhom: { text: string }[] | undefined,
    type: ForWhomType
}