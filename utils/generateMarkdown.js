// Function call to retrieve urls related to the license passed to the function
function getLicense(license) {
  return [
    {
      name: "Apache 2.0",
      badge: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
      link: "https://opensource.org/licenses/Apache-2.0"
    },
    {
      name: "BSD 3",
      badge: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
      link: "https://opensource.org/licenses/BSD-3-Clause"
    },
    {
      name: "GNU GPL 3",
      badge: "https://img.shields.io/badge/License-GPLv3-blue.svg",
      link: "https://www.gnu.org/licenses/gpl-3.0"
    },
    {
      name: "ISC",
      badge: "https://img.shields.io/badge/License-ISC-blue.svg",
      link: "https://opensource.org/licenses/ISC"
    },
    {
      name: "MIT",
      badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
      link: "https://opensource.org/licenses/MIT"
    },
    {
      name: "Mozilla 2.0",
      badge: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
      link: "https://opensource.org/licenses/MPL-2.0"
    }
  ].find(obj => obj.name === license);
}

// Function call to generate markdown to display the license badge
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") return "";

  return `[![License](${getLicense(license).badge})](${renderLicenseLink(license)})`;
}

// Function call to retrieve the license url
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// Function call to generate the markdown to display in the License section of the README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function call to generate the markdown to save to the README file
function generateMarkdown(data) {
  return `# ${data.title}
  
`;
}

module.exports = generateMarkdown;
