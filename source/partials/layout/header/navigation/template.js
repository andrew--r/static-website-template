const renderNavItem = ({ title, url }) => `
<li>
  <a href="${url}">${title}</a>
</li>
`;

module.exports = (context) => `
<nav>
  <ul>
    ${context.siteData.navigationItems.map(renderNavItem).join('')}
  </ul>
</nav>
`;
