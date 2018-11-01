const layout = require('../../../partials/layout/template');

const renderPage = ({ context }) => `
<h1>Hello, world!</h1>
`;

module.exports = ({ context }) =>
  layout({
    context,
    children: renderPage({ context }),
  });
