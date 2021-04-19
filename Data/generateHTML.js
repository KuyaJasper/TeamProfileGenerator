const generateHTML = (teamMembers) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css" />
        <script src="https://kit.fontawesome.com/0d8db3f55e.js" crossorigin="anonymous"></script>
    </head>
    
    <body>
        <div class="container-fluid" id="ProjectHeader">
            <div class="row">
                <div class="col-12 jumbotron mb-5 team-heading">
                    <h1 class="text-center">Team Members</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex" id="card-container">
                    <div class="row">
                        ${generateTeam(teamMembers)}
                    </div>
                </div>
            </div>
        </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="./Data/generateHTML.js"></script>
    </body>
    
    </html>
    `
};

function generateTeam(teamMembers) {
    let html = ""
    teamMembers.forEach(member => {
        switch (member.getRole()) {
            case "Manager":
                html += generateManager(member)
                break;
            case "Engineer":
                html += generateEngineer(member)
                break;
            case "Intern":
                html += generateIntern(member)
                break;
            default:
                break;
        }
    })
    return html;
}

const generateManager = (manager) => {
    return `
            <div class="card mb-3" style="max-width: 20rem;">
                <div class="card-header" id="card-title">
                    <h2>${manager.getName()}</h2>
                    <h2><span class="fas fa-mug-hot fa-fw"></span>${manager.getRole()}</h2>
                </div>
                <div class="card-body">
                <p class="card-text">
                    <div class="list-group">
                        <a href="" class="list-group-item list-group-item-action active" id="IDtag">ID: ${manager.getId()}</a>
                        <a href="mailto: ${manager.getEmail()}" class="list-group-item list-group-item-action">Email: ${manager.getEmail()}</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Office Number: ${manager.getOfficeNumber()}</a>
                    </div>
                </p>
                </div>
            </div>
            `
};

const generateEngineer = (engineer) => {
    return `
            <div class="card mb-3" style="max-width: 20rem;">
                <div class="card-header" id="card-title">
                    <h2>${engineer.getName()}</h2>
                    <h2><span class="fas fa-glasses fa-fw"></span>${engineer.getRole()}</h2>
                </div>
                <div class="card-body">
                <p class="card-text">
                    <div class="list-group">
                        <a href="" class="list-group-item list-group-item-action active" id="IDtag">ID: ${engineer.getId()}</a>
                        <a href="mailto: ${engineer.getEmail()}" class="list-group-item list-group-item-action">Email: ${engineer.getEmail()}</a>
                        <a href="https://github.com/${engineer.getGithub()}" target="_blank" class="list-group-item list-group-item-action">Github: ${engineer.getGithub()}</a>
                    </div>
                </p>
                </div>
            </div>
            `
};

const generateIntern = (intern) => {
    return `
            <div class="card mb-3" style="max-width: 20rem;">
                <div class="card-header" id="card-title">
                    <h2>${intern.getName()}</h2>
                    <h2><span class="fas fa-user-graduate fa-fw"></span>${intern.getRole()}</h2>
                </div>
                <div class="card-body bg-light">
                <p class="card-text">
                    <div class="list-group">
                        <a href="" class="list-group-item list-group-item-action active" id="IDtag">ID: ${intern.getId()}</a>
                        <a href="mailto: ${intern.getEmail()}" class="list-group-item list-group-item-action">Email: ${intern.getEmail()}</a>
                        <a href="" class="list-group-item list-group-item-action disabled">School: ${intern.getSchool()}</a>
                    </div>
                </p>
                </div>
            </div>
            `
};

module.exports = generateHTML