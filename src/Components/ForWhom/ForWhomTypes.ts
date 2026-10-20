export enum ForWhomType {
    event = "event",
    course = "course"
}

export interface ForWhomProps {
    forWhom: { text: string }[] | undefined,
    type: ForWhomType
}
