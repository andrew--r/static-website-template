const layout = require('../partials/layout/template');

const renderPage = (context) => `
<link rel="stylesheet" href="${context.getLocalAssetUrl('index.css')}"/>
<h1>Index page</h1>
`;

module.exports = (context) => layout(context, renderPage(context));
