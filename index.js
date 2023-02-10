// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'What is your LinkedIn username'
    },
    {
        type: 'input',
        name: 'link',
        message: 'Please provide the link to the repository. (Required)',
        validate: repoLink => {
            if (repoLink) {
                return true;
            } else {
                console.log('Please enter the repo URL!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your application.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide installation instructions.'
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What technologies were used to build this application?',
        choices: ['JavaScript', 'HTML', 'CSS', 'Python', 'jQuery', 'React.js', 'Handlebars.js', 'Bootstrap', 'MD Bootstrap','Node.js', 'Express.js', 'MySQL', 'Sequelize', 'MongoDB', 'Mongoose', 'GraphQL', 'Apollo Server', 'Jest.js']
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please describe contribution guidelines for this application.'
    },
    {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Did you write tests for your application?',
        default: false
    }, 
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide examples on how to run your tests',
        when: ({ confirmTest }) => {
            if (confirmTest) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to include a license for your application?',
        default: false
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the appropriate license for your application.',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'Boost Software License 1.0', 'Mozilla Public License 2.0', 'Unilicense'],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The README file has been created!')
    });
};

// function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile('./Develop/README.md', generateMarkdown(answers));
    });
}

// function call to initialize app
init();
