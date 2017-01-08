var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename')
var pump = require('pump');
var strip = require('gulp-strip-debug');

gulp.task('compress', function (cb) {
    pump([
            gulp.src('lib/vue-scroll.js'),
            uglify(),
            strip(),
            rename(function (path) {
                path.basename = "vue-scroll.min";
                path.extname = ".js"
            }),
            gulp.dest('dist')
            ],
            cb);
});
