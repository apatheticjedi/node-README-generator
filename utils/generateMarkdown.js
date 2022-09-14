// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (!license) {
    return "";
  } else if (license === 'MIT') {
    return `![badge](https://img.shields.io/badge/license-MIT-brightgreen)`;
  } else if (license === 'GNU GPLv3') {
    return `![badge](https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen)`;
  } else if (license === 'Apache License 2.0') {
    return `![badge](https://img.shields.io/badge/license-Apache%20License%202.0-blue)`;
  } else if (license === 'Boost Software License 1.0') {
    return `![badge](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-brightgreen)`;
  } else if (license === 'Mozilla Public License 2.0') {
    return `![badge](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-brightgreen)`;
  } else if (license === 'Unilicense') {
    return `![badge](https://img.shields.io/badge/license-Unilicense-brightgreen)`;
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else if (license === 'MIT') {
    return `[MIT License](https://spdx.org/licenses/MIT.html)`;
  } else if (license === 'GNU GPLv3') {
    return `[GNU GPLv3](https://spdx.org/licenses/GPL-3.0-or-later.html)`;
  } else if (license === 'Apache License 2.0') {
    return `[Apache License 2.0](https://spdx.org/licenses/Apache-2.0.html)`;
  } else if (license === 'Boost Software License 1.0') {
    return `[Boost Software License 1.0](https://spdx.org/licenses/BSL-1.0.html)`;
  } else if (license === 'Mozilla Public License 2.0') {
    return `[Mozilla Public License 2.0](https://spdx.org/licenses/MPL-2.0.html)`;
  } else if (license === 'Unilicense') {
    return `[Unilicense](https://spdx.org/licenses/Unlicense.html)`;
  } else {
    return "";
  }
 };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (!license) {
    return "";
  } else {
    return `
## License

${renderLicenseLink(license)}
`
  }
};

// generate a list of all languages chosen
function languageList(languages){
  let languageList = "";
  languages.forEach(language => {
   languageList += `
* ${language}`
  })
  return languageList;
};

// generate text for Tests section, if none input, return an empty string
function renderTestsText(tests) {
  if (!tests) {
    return "";
  } else {
    return tests;
  }
};

// create a section for Tests, if none input, return an empty string
function renderTestsSection(tests) {
  if (!tests) {
    return "";
  } else {
    return `
## Tests

${renderTestsText(tests)}
`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
<div id="top"></div>

${renderLicenseBadge(data.license)}

# [${data.title}](${data.link})

### Table of Contents

1. [Description](#description)
2. [Built With](#built-with)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description

${data.description}

### Built With

${languageList(data.languages)} 

## Installation

${data.install}

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

${data.usage}

## Contributing

${data.contribute}

<p align="right">(<a href="#top">back to top</a>)</p>

${renderTestsSection(data.tests)}

## Questions

Reach out to me with questions by email at:
<${data.email}>

[GitHub](https://github.com/${data.username})

${renderLicenseSection(data.license)}

<p align="right">(<a href="#top">back to top</a>)</p>
`;
}

module.exports = generateMarkdown;
