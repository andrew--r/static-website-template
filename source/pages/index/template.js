const layout = require('../../partials/layout/template');

const renderPage = ({ context }) => `
<h1>Index page</h1>
`;

module.exports = ({ context }) =>
  layout({
    context,
    children: renderPage({ context }),
  });
