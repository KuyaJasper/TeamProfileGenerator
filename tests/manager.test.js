const Manager = require("../Data/manager")

describe("Manager class", () => {
    describe("getOfficeNumber method", () => {
        it("would return user's office number", () => {
            const manager = new Manager("Chewey", "35", "Chewey@yahoo.com", "7325555555");
            expect(manager.getOfficeNumber()).toBe("7325555555");
        })
    });
    describe("getRole method", () => {
        it("would return user's role", () => {
            const manager = new Manager("Chewey", "35", "Chewey@yahoo.com", "Rutgers University");
            expect(manager.getRole()).toBe("Manager");
        })
    });
})