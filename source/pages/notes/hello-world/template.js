const layout = require('../../../partials/layout/template');

const renderPage = ({ currentPage, getLocalAssetUrl }) => `
<link rel="stylesheet" href="${getLocalAssetUrl('hello-world.css')}"/>
<h1>Hello, world!</h1>
<p>published ${currentPage.metadata.publicationDate.toLocaleString()}</p>
`;

module.exports = (context) => layout(context, renderPage(context));
