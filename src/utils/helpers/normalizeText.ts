export type ApiText = string | {data?: number[]} | null | undefined

export const normalizeText = (value: ApiText): string => {
    if (typeof value === "string") return value
    if (value && Array.isArray(value.data)) return value.data.map((element) => String.fromCharCode(element)).join("")
    return ""
}
