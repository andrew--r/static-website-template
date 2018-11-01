const fs = require('fs');
const path = require('path');
const layout = require('../../partials/layout/template');

const isDirectory = (source) => fs.lstatSync(source).isDirectory();
const notes = fs
  .readdirSync(__dirname)
  .filter((slug) => isDirectory(path.join(__dirname, slug)));

const renderPage = ({ context }) => `
<h1>Notes</h1>
<ul>
  ${notes.map(
    (slug) => `
  <li>
    <a href="/notes/${slug}">${slug}</a>
  </li>
  `,
  )}
</ul>
`;

module.exports = ({ context }) =>
  layout({
    context,
    children: renderPage({ context }),
  });
