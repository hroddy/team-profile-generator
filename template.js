function generateTeam(teamMembers) {
    return teamMembers.map((member) => {
        if (member?.officeNumber) {
    
            return `<div class="employee">
            <h2>Manager</h2>
            <p>Name: ${member.name}</p>
            <p>ID number: #${member.id}</p>
            <p>Email: ${member.email}</p>
            <p>Office number: ${member.officeNumber}</p>
            </div>`;

        } else if (member?.github) {
                
            return `<div class="employee">
            <h2>Engineer</h2>
            <p>Name: ${member.name}</p>
            <p>ID number: #${member.id}</p>
            <p>Email: ${member.email}</p>
            <p>Github URL: ${member.github}</p>
            </div>`;

        } else if (member?.school) {

            return `<div class="employee">
            <h2>Intern</h2>
            <p>Name: ${member.name}</p>
            <p>ID number: #${member.id}</p>
            <p>Email address: ${member.email}</p>
            <p>School: ${member.school}</p>
            </div>`;
        }
            
    });
}



module.exports = team => {
    console.log(team);
     let page = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Team Profile</title>
</head>
<body>
    <div class="header">
        <h1>My Team</h1>
    </div>
<div class="container">`
    generateTeam(team).forEach(member => {
        page += member
    })
    
    page += ` </div> </body>
</html>`
return page;
}