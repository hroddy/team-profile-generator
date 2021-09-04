const Engineer = require('../lib/engineer.js');

test('creates an engineer object', () => {
    
    const engineer = new Engineer ('Hannah', 1, 'email@email.com', 'hroddy.github.com');
  
    //check that employee name is a string
    expect(engineer.name).toEqual('Hannah');

    //check that employee id is a number
    expect(engineer.id).toEqual(1);

    //check that employee email is a string
    expect(engineer.email).toEqual('email@email.com');

    //check that engineer github is a string
    expect(engineer.github).toEqual('hroddy.github.com');
   
    console.log(engineer);
});