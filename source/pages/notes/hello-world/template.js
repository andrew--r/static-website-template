const layout = require('../../../partials/layout/template');

const renderPage = (context) => `
<h2>Hello, world!</h2>
<p>published ${context.currentPage.metadata.publicationDate.toLocaleString()}</p>
<img src="${context.getPageAssetUrl(
  'cover.jpg',
)}" alt="" style="display: block; max-width: 100%;"/>
`;

module.exports = (context) => layout(context, renderPage(context));
