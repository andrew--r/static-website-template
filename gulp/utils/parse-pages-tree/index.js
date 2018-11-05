const fs = require('fs');
const path = require('path');

const isDirectory = (source) => fs.lstatSync(source).isDirectory();

function getMetadata(pagePath) {
  try {
    return require(path.join(pagePath, 'metadata.js'));
  } catch (error) {
    return {};
  }
}

function getChildrenSlugs(pagePath) {
  return fs
    .readdirSync(pagePath)
    .filter((slug) => isDirectory(path.join(pagePath, slug)));
}

function getChildren(pagePath) {
  return new Map(
    getChildrenSlugs(pagePath).map((slug) => {
      return [slug, parsePagesTree(path.join(pagePath, slug))];
    }),
  );
}

function parsePagesTree(rootPath) {
  const metadata = getMetadata(rootPath);
  const children = getChildren(rootPath);

  return {
    metadata,
    children,
    get(relativeUrl) {
      return relativeUrl.split('/').reduce((result, pageSlug) => {
        return result.children.get(pageSlug);
      }, this);
    },
  };
}

module.exports = parsePagesTree;
