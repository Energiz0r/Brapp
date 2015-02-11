var gulp = require('gulp');
var concat = require('gulp-concat');
var emberTemplates = require('gulp-ember-templates');

gulp.task('default', function () {
    gulp.src('./public/app/templates/*.handlebars')
        .pipe(emberTemplates())
        .pipe(concat('ember-templates.js'))
        .pipe(gulp.dest('./public/app'));
});