// The packages used for the application
const inquirer=require("inquirer");
const fs=require("fs");

function init() {
    inquirer.prompt([
        {
            name:"name1",
            message:"What is the team manager's name?",
            type:"input"
        },
        {
            name:"id1",
            message:"What is the team manager's employee ID?",
            type:"input"
        },
        {
            name:"emailAddress1",
            message:"What is the team manager's email address?",
            type:"input",
            default:"Rose1@gmail.com"
        }, 
        {
            name:"officeNumber",
            message:"What is the team manager's office number?",
            type:"input",
        }, 
        {
            name:"member1",
            message:"Which team member do you want to add?",
            type:"list",
            choices:["Engineer", "Intern"]
        },
        {
            name:"name2",
            message:"What is the engineer's name?",
            type:"input"
        },
        {
            name:"id2",
            message:"What is the engineer's ID?",
            type:"input"
        },
        {
            name:"emailAddress2",
            message:"What is the engineer's email address?",
            type:"input",
            default:"Sky@gmail.com"
        }, 
        {
            name:"gitHubUsername",
            message:"What is the engineer's GitHub username?",
            type:"input",
            default:"Sky12"
        },
        {
            name:"member2",
            message:"Which team member do you want to add?",
            type:"list",
            choices:["Engineer", "Intern"]
        },
        {
            name:"name3",
            message:"What is the intern's name?",
            type:"input"
        },
        {
            name:"id3",
            message:"What is the intern's ID?",
            type:"input"
        },
        {
            name:"emailAddress3",
            message:"What is the intern's email address?",
            type:"input",
            default:"BJay@gmail.com"
        }, 
        {
            name:"school",
            message:"Did the intern attend school?",
            type:"input",
            default:"College"
        },
      
    ])
    .then((response) => {
        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
            <link rel="stylesheet" href="./assets/css/style.css" />
            <script src="https://kit.fontawesome.com/74f65d5c8b.js" crossorigin="anonymous"></script>
            </head>
        
            <body>
                <main>
                <!-- Hero for team application -->
                <section class="hero is-primary">
                    <div class="hero-body is-flex is-justify-content-center">
                        <p class="title">
                        <b>My Team</b>
                        </p>
                    </div>
                </section>
                <br>
                <br>
                <br>
                <br>
            <!-- Section for team member's information -->
            <section class="team-members">
                <div class="tile is-ancestor">
                    <div class="tile is-parent" style="background-color: #05d1b2">
                        <article class="tile is-child box">
                        <b><p class="name"> ${response.name1}</p></b>
                        <b><p class="manager-title"> <i class="fa-solid fa-mug-hot"></i> Manager</p></b>
                        <p class="tile-one"><b>ID: ${response.id1}</p></b>
                        <p class="title-two"><b>Email:<a href="mailto:Rose1@gmail.com"> ${response.emailAddress1}</a></p></b>
                        <p class="title-three"><b> ${response.officeNumber}</p></b>
                        </article>
                    </div>
                    <div class="tile is-parent" style="background-color: #05d1b2">
                        <article class="tile is-child box">
                        <b><p class="name"> ${response.name2}</p></b>
                        <b><p class="manager-title"> <i class="fa-solid fa-pen-to-square"></i> Engineer</p></b>
                        <p class="tile-one"><b>ID: ${response.id2}</p></b>
                        <p class="title-two"><b>Email:<a href="mailto:Sky@gmail.com"> ${response.emailAddress2}</a></p></b>
                        <p class="tile-three"><b>GitHub Username:<b> ${response.gitHubUsername}</p></b>
                        </article>
                    </div>
                    <div class="tile is-parent" style="background-color: #05d1b2">
                        <article class="tile is-child box">
                        <p class="name"> ${response.name3}</p>
                        <p class="manager-title"> <i class="fa-solid fa-user-graduate"></i><b>Intern</p></b>
                        <p class="tile-one"><b>ID: ${response.id3}</p></b>
                        <p class="title-two"><b>Email:<a href="mailto:BJay@gmail.com"> ${response.emailAddress3}</a></p></b>
                        <p class="tile-three"><b>School: ${response.school}</p></b>
                        </article>
                    </div>
                </div>
            </section>
            </main>
    
        </body>
    
        <script type="text/javascript" src="./index.js"></script>
    
    </html>`

    // console.log(response);
        fs.writeFile("./dist/index.html", html, (err) =>
            err ? console.log(err) : console.log('Successfully created HTML')
        );
    });
}

init()
