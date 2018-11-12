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

const renderPage = (context) => `
<h2>Notes</h2>
<ul>
  ${renderNotesList(context.currentPage)}
</ul>
`;

module.exports = (context) =>
  layout(context, renderPage(context), {
    headContent: `<link rel="stylesheet" href="${context.getPageAssetUrl(
      'style.css',
    )}" />`,
  });
