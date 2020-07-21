var gulp = require('gulp'),
    look = require('gulp-watch'),
    postCss = require('gulp-postcss'),
    autoPrefix = require('autoprefixer'),
    cssVars = require('postcss-simple-vars'),
    nested = require('postcss-nested');

gulp.task('lolo', function() {
  console.log('brand new gulp task');
});
gulp.task('htmlWork', function() {
  console.log('pretending like it is a hard html coding job');
});
gulp.task('cssWork', function() {
  return gulp.src('./Css/again/maCss.css')
    .pipe(postCss([cssVars, nested, autoPrefix]))
    .pipe(gulp.dest('./Css/styles'));
});
gulp.task('look', function() {
  look('htmlByJava.html', function() {
    console.log('hi');
  });
  look('./Css/again/maCss.css', function() {
  gulp.start('cssWork');
  });
});
