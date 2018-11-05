const gulp = require('gulp');
const rev = require('gulp-rev');
const config = require('../../build.config');

gulp.task('assets', () => {
  return gulp
    .src([`${config.paths.source}/assets/**/!(*.css)`], {
      base: config.paths.source,
    })
    .pipe(rev())
    .pipe(gulp.dest(config.paths.build))
    .pipe(
      rev.manifest({
        base: config.paths.build,
        path: `${config.paths.build}/rev-manifest.json`,
        merge: true,
      }),
    )
    .pipe(gulp.dest(config.paths.build));
});
