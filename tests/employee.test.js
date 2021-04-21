const Employee = require('../Data/employee');

describe("Employee class", () => {
    describe("getName method", () => {
        it("would return charles", () => {
            const employee = new Employee("Ryan", "21", "Ryan@gmail.com");
            expect(employee.getName()).toBe("Ryan");
        })
    });
    describe("getId method", () => {
        it("would return user's id", () => {
          const employee = new Employee("Ryan", "21", "Ryan@gmail.com");
            expect(employee.getId()).toBe("21");
        })
    });
    describe("getEmail method", () => {
        it("would return user's email", () => {
            const employee = new Employee("Ryan", "21", "Ryan@gmail.com");
            expect(employee.getEmail()).toBe("Ryan@gmail.com");
        })
    });
    describe("getRole method", () => {
        it("would return user's role", () => {
            const employee = new Employee("Ryan", "21", "Ryan@gmail.com");
            expect(employee.getRole()).toBe("Employee");
        })
    });
})