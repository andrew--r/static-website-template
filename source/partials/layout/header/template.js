const renderNavigation = require('./navigation/template');

module.exports = (context) => `
<header>
  <h1>${context.siteData.title}</h1>
  ${renderNavigation(context)}
</header>
`;
