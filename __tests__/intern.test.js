const Intern = require("../lib/intern.js");

test("creates an intern object", () => {
  const intern = new Intern("Hannah", 1, "email@email.com", "Los Positas");

  //check that employee name is a string
  expect(intern.name).toEqual("Hannah");

  //check that employee id is a number
  expect(intern.id).toEqual(1);

  //check that employee email is a string
  expect(intern.email).toEqual("email@email.com");

  //check that intern school is a string
  expect(intern.school).toEqual('Los Positas');

  console.log(intern);
});
