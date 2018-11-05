const fs = require('fs');
const path = require('path');
const layout = require('../../partials/layout/template');

const renderNotesList = (currentPage) => {
  const notes = Array.from(currentPage.children.keys());

  return notes
    .map(
      (slug) => `
        <li>
          <a href="/notes/${slug}">${slug}</a>
        </li>
      `,
    )
    .join('');
};

const renderPage = ({ currentPage, getLocalAssetUrl }) => `
<link rel="stylesheet" href="${getLocalAssetUrl('notes.css')}"/>
<h1>Notes</h1>
<ul>
  ${renderNotesList(currentPage)}
</ul>
`;

module.exports = (context) => layout(context, renderPage(context));
