const renderHead = require('./head/template');
const renderHeader = require('./header/template');
const renderFooter = require('./footer/template');

module.exports = (context, children, { headContent } = {}) => `
<!DOCTYPE html>
<html lang="${context.siteData.lang}">
${renderHead(context, headContent)}
<body>
  ${renderHeader(context)}

  <main>
    ${children}
  </main>

  ${renderFooter(context)}
</body>
</html>
`;
