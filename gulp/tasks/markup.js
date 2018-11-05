const path = require('path');
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const config = require('../../build.config');
const esTemplates = require('../plugins/es-templates');
const parsePagesTree = require('../utils/parse-pages-tree');

gulp.task('markup', () => {
  const revManifest = require(`${config.paths.build}/rev-manifest.json`);
  const pagesTree = parsePagesTree(`${config.paths.source}/pages`);

  return gulp
    .src(`${config.paths.source}/pages/**/template.js`)
    .pipe(
      esTemplates({
        getContext: (pagePath) => ({
          pagesTree,
          currentPage: pagesTree.get(pagePath),
          getLocalAssetUrl: (relativeAssetPath) => {
            return `/${revManifest[path.join(pagePath, relativeAssetPath)]}`;
          },
          getAssetUrl: (assetPath) =>
            `/${revManifest[path.join('assets', assetPath)]}`,
        }),
      }),
    )
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(config.paths.build));
});
