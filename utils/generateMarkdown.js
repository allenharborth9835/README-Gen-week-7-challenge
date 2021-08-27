const renderLicenseSection = require("./generateLicenese")

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ""
  if(license){
    license.forEach(licenseName => {
      licenseBadge += `<img src="https://img.shields.io/badge/license-${licenseName}-blue" alt="${licenseName}">\n`
    })
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let links = ""
  if(license){
    if(license.includes('Unlicensed')){
      links += `For more information, please refer to [https://unlicense.org](https://unlicense.org)\n`
    }
    if(license.includes('MIT')){
      links += `For more information, refer to[https://mit-license.org/](https://mit-license.org/)\n`
    }
    if(license.includes('Boost 1.0')){
      links += `For more information, refer to[https://opensource.org/licenses/BSL-1.0](https://opensource.org/licenses/BSL-1.0)\n`
    }
    if(license.includes('Apache 2.0')){
      links += `For more information, refer to[https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)\n`
    }
    if(license.includes('Mozilla 2.0')){
      links += `For more information, refer to[https://www.mozilla.org/en-US/MPL/](https://www.mozilla.org/en-US/MPL/)\n`
    }
    if(license.includes('GNU LGPLv3')){
      links += `For more information, refer to[https://www.fsf.org/](https://www.fsf.org/)\n`
    }
    if(license.includes('GNU GPLv3')){
      links += `For more information, refer to[https://www.fsf.org/](https://www.fsf.org/)\n`
    }
    if(license.includes('GNU AGPLv3')){
      links += `For more information, refer to[https://www.fsf.org/](https://www.fsf.org/)\n`
    }
  }
  return links
}

//function that creates individual sections if inputed
function sectionInput(data){
  let tabelElements = ""
  let inputString = ""
  let sectionContent = []
  let copyright = renderLicenseSection(data)
  let links = renderLicenseLink(data.license)
  if(data.installation){
    tabelElements += `* [Installation](#installation)\n `
    inputString += `## Installation  \n`
    inputString += `${data.installation}  \n`  
  }if(data.usage){
    tabelElements += `* [Usage](#usage)\n`
    inputString += `## Usage  \n`
    inputString += `${data.usage} \n`
  }if(data.contributing){
    tabelElements += `* [Credits](#credits)\n`
    inputString += `## Credits  \n` 
    inputString += `${data.contributing}  \n`
  }if(data.tests){
    tabelElements += `* [Test](#test)\n`
    inputString += `## Test\n` 
    inputString += `${data.tests}\n`
  }if(data.license.length>0){
    tabelElements += `* [License](#license)\n`
    inputString += `## License\n`
    inputString += `${copyright}\n`
    inputString += `${links}\n`
  }
  sectionContent.push(tabelElements)
  sectionContent.push(inputString)
  return sectionContent
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let [tabelElements, inputString] = sectionInput(data)
  let Badges = renderLicenseBadge(data.license)

  return `# ${data.title}
${Badges}
## Description
${data.description}  
## Table of Contents
${tabelElements}
* [Contact-Info](#contact-info)
${inputString}
## Contact-Info
this project was created by ${data.name}\n
Github(s)[${data.github}](https://github.com/${data.github})\n
get in contact by sending an email at ${data.email}
`;
}

//exports generate markdown function
module.exports = generateMarkdown;
