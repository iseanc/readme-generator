// VARIABLES:
let licenseBadge, title, description, toc, installation, usage, contributing, tests, githubUsername, githubUrl, githubProfileURL, emailAddress;

const readmeSections = ['Description','Table of Contents','Installation','Usage','License','Contributing','Tests','Questions'];
// License resource URL
const osiUrl = 'https://opensource.org/licenses/';
const chooseALicense = 'https://choosealicense.com/licenses/'

//License badge URL
const licenseBadgeUrl = 'https://img.shields.io/static/v1?label=License&color=blue&message=';

githubUrl = 'https://github.com/';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = licenseBadgeUrl + license; 
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = osiUrl + license;
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseData = '';

  if (license != 'NONE') {
    licenseData += `## ${readmeSections[4]}\n\n`;
    licenseData += `See ${renderLicenseLink(license)} for license details.\n\n`;
  }
  return licenseData;
}

function createTOC(data) {
  let contents = data;
  let tocText = '';

  delete contents.title;
  delete contents.description;

  if (Object.keys(contents).length != 0){
    tocText += `## ${readmeSections[1]}\n\n`;
    for (const item in contents) {
  
      if (contents[item] != '' && item != 'githubUsername' && item != 'emailAddress') {
        tocText += '- [' + item[0].toUpperCase() + item.substring(1) + '](#' + item + ')\n'
      }

      else if (item === 'githubUsername' || item === 'emailAddress') {

        if (item === 'githubUsername' && contents[item] != '') {
          tocText += '- [Questions](#questions)\n';
          break;
        }

        else if (item === 'emailAddress' && contents[item] != '') {
          tocText += '- [Questions](#questions)\n';
          break;
        }
      }
    };

    tocText += '\n'

  }
  return tocText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  let markdown; 

  // Title
  markdown = `# ${data.title}\n\n`;

  // License Badge
  if (data.license != 'NONE') {
    markdown += `![LICENSE](${renderLicenseBadge(data.license)})\n\n`
  }

  // Description
  if (data.description != '') {
    markdown += `## ${readmeSections[0]}\n\n`;
    markdown += `${data.description}\n\n`;
  }

  // TOC
  markdown += createTOC(data);

  // Installation
  if (data.installation != '') {
    markdown += `## ${readmeSections[2]}\n\n`;
    markdown += `${data.installation}\n\n`;
  }
  // Usage
  if (data.usage != '') {
    markdown += `## ${readmeSections[3]}\n\n`;
    markdown += `${data.usage}\n\n`;
  }
  
  // License
  if (data.license != '') { // && data.license != 'NONE'
    markdown += renderLicenseSection(data.license);
  }

  // Contributing
  if (data.contributing != '') {
    markdown += `## ${readmeSections[5]}\n\n`;
    markdown += `${data.contributing}\n\n`;
  }

  // Tests
  if (data.tests != '') {
    markdown += `## ${readmeSections[6]}\n\n`;
    markdown += `${data.tests}\n\n`;
  }

  // Questions
  if (data.githubUsername != '' || data.emailAddress != '') {
    markdown += `## ${readmeSections[7]}\n\n`;

    if (data.githubUsername != '') {
      markdown += `Visit me [on Github](${githubUrl + data.githubUsername}).  `;
    }

    if (data.emailAddress != '') {
      markdown += `You may also email me with questions and comments at [${data.emailAddress}](mailto:${data.emailAddress})\n\n`;
    }
  }

  return markdown;
  // return data;
}

module.exports = generateMarkdown;
