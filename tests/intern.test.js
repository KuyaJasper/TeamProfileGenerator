const Intern = require("../Data/intern")

describe("Intern class", () => {
    describe("getSchool method", () => {
        it("would return user's school name", () => {
            const intern = new Intern("Fred", "19", "Fred@mail.com", "Rutgers University");
            expect(intern.getSchool()).toBe("Rutgers University");
        })
    });
    describe("getRole method", () => {
        it("would return user's role", () => {
            const intern = new Intern("Fred", "19", "Fred@mail.com", "Rutgers University");
            expect(intern.getRole()).toBe("Intern");
        })
    });
})