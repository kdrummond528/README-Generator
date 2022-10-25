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
  return `# ${data.title}


## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)

## Installation
${data.installation}
<p align="right"> 

## Usage
${data.usage}
<p align="right">

## Contributing
${data.contributing}
<p align="right">

## Tests
${data.tests}
<p align="right">

## License
Copyright (c) [${data.username}](https://github.com/${data.username}). All rights reserved. 
\nLicensed under the [${data.license} license](https://choosealicense.com/licenses/${data.license.toLowerCase()}/).
<p align="right">

## Questions
Feel free to contact me with any questions.
- GitHub: [${data.username}](https://github.com/${data.username})
- Email: [${data.email}](mailto:${data.email})
<p align="right">
`;
}

module.exports = generateMarkdown;
