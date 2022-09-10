// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `<div id="top"></div>

  # <a href="${data.link}">${data.title}</a>

  <details>
  <summary><strong>Table of Contents</strong></summary>
  <ol>
    <li><a href="#description">Description</a>
    </li>
    <li><a href="#languages">Built With</a></li>
    <li><a href="#install">Installation Instructions</a>    
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributors">Contributors</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>
</details>

  ## <p id="description">Description</p>
  ${data.description}

  ### <p id="languages">Built With</p>
  ${data.languages}

  ### <p id="install">Installation Instructions</p>
  ${data.install}

  <p align="right">(<a href="#top">back to top</a>)</p>

  ### <p id="usage">Usage</p>
  ${data.usage}

  ### <p id="contributors">Contributors</p>
  ${data.contribute}

  <p align="right">(<a href="#top">back to top</a>)</p>

  ### <p id="tests">Tests</p>

  ${data.tests}

  ### <p id="questions">Questions</p>

  Reach out to me with questions by email at:
  <a href="mailto:${data.email}">${data.email}</a>

  <a href="https://github.com/${data.username}">${data.username}</a>

<p align="right">(<a href="#top">back to top</a>)</p>
`;
}

module.exports = generateMarkdown;
