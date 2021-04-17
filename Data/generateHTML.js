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
        <link rel="stylesheet" href="/style.css" />
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
                        INSERT TEAM MEMBER CARDS HERE
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
    teamMembers.array.forEach(member => {
        
    });
}