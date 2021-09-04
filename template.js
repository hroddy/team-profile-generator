function generateTeam(teamMembers) {
    return teamMembers.map((member) => {
        if (member?.officeNumber) {
    
            return `<div>
            <h2>Manager</h2>
            <h3>Name: ${member.name}</h3>
            <h3>ID number: ${member.id}</h3>
            <h3>Email: ${member.email}</h3>
            <h3>Office number: ${member.officeNumber}</h3>
            </div>`;

        } else if (member?.github) {
                
            return `<div>
            <h2>Engineer</h2>
            <h3>Name: ${member.name}</h3>
            <h3>ID number: ${member.id}</h3>
            <h3>Email: ${member.email}</h3>
            <h3>Github URL: ${member.github}</h3>
            </div>`;

        } else if (member?.school) {

            return `<div>
            <h2>Intern</h2>
            <h3>Name: ${member.name}</h3>
            <h3>ID number: ${member.id}</h3>
            <h3>Email address: ${member.email}</h3>
            <h3>School: ${member.school}</h3>
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
    <title>Team Profile</title>
</head>
<body> `
    generateTeam(team).forEach(member => {
        page += member
    })
    
    page += ` </body>
</html>`
return page;
}