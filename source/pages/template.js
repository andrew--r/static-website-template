const layout = require('../partials/layout/template');

const renderPage = () => `
<h2>Index page</h2>
`;

module.exports = (context) => layout(context, renderPage(context));
