// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ""
  if(license){
    license.forEach(licenseName => {
      licenseBadge += `<img src="https://img.shields.io/badge/license-${licenseName}-blue" alt="${licenseName}">\n`
    });
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let Copyright = ""
  if(license){
    if(license.includes('Unlicensed')){
      Copyright += `
      This is free and unencumbered software released into the public domain.

      Anyone is free to copy, modify, publish, use, compile, sell, or
      distribute this software, either in source code form or as a compiled
      binary, for any purpose, commercial or non-commercial, and by any
      means.
      
      In jurisdictions that recognize copyright laws, the author or authors
      of this software dedicate any and all copyright interest in the
      software to the public domain. We make this dedication for the benefit
      of the public at large and to the detriment of our heirs and
      successors. We intend this dedication to be an overt act of
      relinquishment in perpetuity of all present and future rights to this
      software under copyright law.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
      IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
      OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
      ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
      OTHER DEALINGS IN THE SOFTWARE.`
    }
    if(license.includes('MIT')){}
    if(license.includes('Boost 1.0')){}
    if(license.includes('Apache 2.0')){}
    if(license.includes('Mozilla 2.0')){}
    if(license.includes('GNU LGPLv3')){}
    if(license.includes('GNU GPLv3')){}
    if(license.includes('GNU AGPLv3')){}
  }
  return Copyright;
}

function sectionInput(data){
  let inputString = ""
  let copyright = renderLicenseSection(data.license)
  if(data.installation){
    inputString += `## Installation  \n`
    inputString += `${data.installation}  \n`  
  }if(data.usage){
    inputString += `## Usage  \n`
    inputString += `${data.usage}  \n`
  }if(data.contributing){
    inputString += `## Credits  \n` 
    inputString += `${data.contributing}  \n`
  }if(data.license){
    inputString += `## License  \n`
    inputString += `${copyright}  \n`
  }
  return inputString;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let inputString = sectionInput(data);
  let Badges = renderLicenseBadge(data.license)

  return `# ${data.title}
  ${Badges}
  ## Description
  ${data.description}  
  ## Table of Contents
  * [Installation](#installation)  
  * [Usage](#usage)  
  * [Credits](#credits)  
  * [License](#license)  
  ${inputString}
  ## Tests
  ${data.tests}
  ## Questions
  [${data.github}](https://github.com/${data.github})
  ${data.email}
`;
}

module.exports = generateMarkdown;
