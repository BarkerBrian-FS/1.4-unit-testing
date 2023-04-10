const secureCc = require ('./ccfunction')

describe("Valid CC number", () => {
    test("As a user I want to be able to obscure a 12 digit CC number", () => {
        expect(secureCc('123456789123')).toBe('********' + 9123)
    })
})

describe("Valid CC number", () => {
    test("As a user I want to be able to obscure a 16 digit CC number", () => {
        expect(secureCc('1234567891233245')).toBe('************' + 3245)
    })
})

describe("Valid CC number", () => {
    test("As a user I want to be able to obscure a 14 digit CC number", () => {
        expect(secureCc('12345678912332')).toBe('**********' + 2332)
    })
})

describe("Invalid CC number", () => {
    test("As a user I want to be informed of any typing error", () => {
        expect(secureCc("123")).toBe(error)
    })
})





