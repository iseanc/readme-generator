// VARIABLES:
let licenseBadge, title, description, toc, installation, usage, license, contributing, tests, githubUsername, githubUrl, githubProfileURL, emailAddress;

const readmeSections = ['Description','Table of Contents','Installation','Usage','License','Contributing','Tests','Questions'];
// License resource URL
const osiUrl = 'https://opensource.org/licenses/';
const chooseALicense = 'https://choosealicense.com/licenses/'

//License badge URL
const licenseBadgeUrl = 'https://img.shields.io/static/v1?label=License&color=blue&message=';

//Badge URL if "repo already licensed"
const licenseBadgeExistsUrl = 'https://img.shields.io/github/license/';
// -- add /<githubUserID>/repoName
const badgeColor = '?color=blue';

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
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != 'None') {
    //...
    licenseSection += `## ${readmeSections[4]}\n\n`;
    licenseSection += `See ${renderLicenseLink(license)} for license details.\n\n`;
  }
  return licenseSection;
}

function createTOC(data) {
  let contents = data;
  let tocText = '';

  delete contents.title;
  delete contents.description;

  console.log("createTOC: ");
  if (Object.keys(contents).length != 0){
    tocText += `## ${readmeSections[1]}\n\n`;
    for (const item in contents) {
      console.log(item, contents[item], contents[item] === '');
      if (contents[item] != '') {
        
      }
    };
  }
  // for (d in data) {};
  //return tocText
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  let markdown; 

  // Title
  markdown = `# ${data.title}\n\n`;

  //`# ${}`;
  // markdown += `## ${}\n`;
  if (data != '') {

  }
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
  if (data.license != '') {
    renderLicenseSection(data.license);
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
  if (data.githubUsername != '' && data.emailAddress != '') {
    markdown += `## ${readmeSections[7]}\n\n`;

    if (data.githubUsername != '') {
      markdown += `Visit me [on Github](${githubUrl + data.githubUsername}).\n`;
    }

    if (data != '') {
      markdown += `You may also email me with questions and comments at ${data.emailAddress}\n\n`;
    }
  }

  // return markdown;
  // return data;
}

module.exports = generateMarkdown;
