const Employee = require('../lib/employee.js');

test('creates an employee object', () => {
    
    const employee = new Employee('Hannah', 1, 'email@email.com');
  
    //check that employee name is a string
    expect(employee.name).toEqual(expect.any(String));

    //check that employee id is a number
    expect(employee.id).toEqual(expect.any(Number));

    //check that employee email is a string
    expect(employee.email).toEqual(expect.any(String));
   
    console.log(employee);
});


