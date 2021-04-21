const Engineer = require("../Data/engineer")

describe("Engineer class", () => {
    describe("getGithub method", () => {
        it("would return the user github username", () => {
            const engineer = new Engineer("Eddie", "26", "Eddie@mail.com", "github");
            expect(engineer.getGithub()).toBe("github");
        })
    });
    describe("getRole method", () => {
        it("would return user's role", () => {
            const engineer = new Engineer("Eddie", "26", "Eddie@gmail.com", "github");
            expect(engineer.getRole()).toBe("Engineer");
        })
    });
})