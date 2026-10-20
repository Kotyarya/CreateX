import {describe, expect, it} from "vitest"
import {normalizeText} from "./normalizeText"

describe("normalizeText", () => {
    it("keeps PostgreSQL text values unchanged", () => {
        expect(normalizeText("Course curator")).toBe("Course curator")
    })

    it("decodes legacy byte arrays", () => {
        expect(normalizeText({data: [67, 114, 101, 97, 116, 101, 88]})).toBe("CreateX")
    })

    it("returns an empty string for absent descriptions", () => {
        expect(normalizeText(undefined)).toBe("")
    })
})
