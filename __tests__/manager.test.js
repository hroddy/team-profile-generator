const Manager = require("../lib/manager.js");

test("creates an manager object", () => {
  const manager = new Manager("Hannah", 1, "email@email.com", 123);

  //check that employee name is a string
  expect(manager.name).toEqual("Hannah");

  //check that employee id is a number
  expect(manager.id).toEqual(1);

  //check that employee email is a string
  expect(manager.email).toEqual("email@email.com");

  //check that office number is a number
  expect(manager.officeNumber).toEqual(123);

  console.log(manager);
});
