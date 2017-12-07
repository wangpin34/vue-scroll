var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename')
var strip = require('gulp-strip-debug');
var deletefile = require('gulp-delete-file');
var version = require('./package.json').version;

gulp.task('build', function () {
  gulp.src('src/*.js')
    .pipe(strip())
    .pipe(gulp.dest('lib'))
})
