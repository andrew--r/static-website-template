const path = require('path');
const gulp = require('gulp');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const config = require('../../build.config');
const esTemplates = require('../plugins/es-templates');

function getLocalAssetRevPath(dirname, assetPath) {
  const fullPagesPath = path.join(config.paths.source, 'pages');
  const revAssetBase = path.relative(fullPagesPath, dirname);

  return path.join(revAssetBase, assetPath);
}

function getAssetRevPath(assetPath) {
  return path.join('assets', assetPath);
}

gulp.task('markup', () => {
  const revManifest = require(`${config.paths.build}/rev-manifest.json`);

  return gulp
    .src(`${config.paths.source}/pages/**/template.js`)
    .pipe(
      esTemplates({
        context: {
          getLocalAssetUrl: (dirname, relativeAssetPath) =>
            `/${revManifest[getLocalAssetRevPath(dirname, relativeAssetPath)]}`,
          getAssetUrl: (assetPath) =>
            `/${revManifest[getAssetRevPath(assetPath)]}`,
        },
      }),
    )
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(
      rename((path) => {
        if (path.dirname === 'index') {
          path.dirname = '';
        }

        path.basename = 'index';
        path.extname = '.html';
      }),
    )
    .pipe(gulp.dest(config.paths.build));
});
