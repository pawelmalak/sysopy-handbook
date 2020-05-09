const gulp = require('gulp');
const concat = require('gulp-concat');

function bundleCss() {
  return gulp.src('src/css/**/*.css')
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('dist'));
}

// exports.default = series(bundleCss);
exports.default = bundleCss;