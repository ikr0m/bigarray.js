var gulp = require('gulp'),
    concat = require('gulp-concat'),
    coffee = require('gulp-coffee'),
    uglify = require('gulp-uglify');

gulp.task('coffee-uglify', function () {
    var stream = gulp.src([
        "src/bigarray.coffee"
    ]);
    stream
        .pipe(coffee())
        .pipe(gulp.dest('./dist/'))
        .pipe(uglify())
        .pipe(concat({path: 'bigarray.min.js'}))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('default', [
    'coffee-uglify'
]);