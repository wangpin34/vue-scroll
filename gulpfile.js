var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename')
var pump = require('pump');
var strip = require('gulp-strip-debug');
var deletefile = require('gulp-delete-file');
var version = require('./package.json').version;

gulp.task('clean', function(cb){
 var regexp = /[^\.].js/ig;
  pump([
    gulp.src('dist/*.js'),
    deletefile({
      reg: regexp,
      deleteMatch: true
    }),
    ],cb)
})

gulp.task('compress', ['clean'],function (cb) {
  pump([
    gulp.src('lib/vue-scroll.js'),
    strip(),
    uglify(),
    rename(function (path) {
        path.basename = `vue-scroll-v${version}.min`;
        path.extname = `.js`
    }),
    gulp.dest('dist')
    ],
    cb);
});
