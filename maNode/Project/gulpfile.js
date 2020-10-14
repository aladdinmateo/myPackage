require('./Gulp/myTasks/cssWork');
require('./Gulp/myTasks/watch');
require('./Gulp/myTasks/sprite');
require('./Gulp/myTasks/scripts');

// var gulp = require('gulp'),
//     watch = require('gulp-watch'),
//     postCss = require('gulp-postcss'),
//     autoPrefix = require('autoprefixer'),
//     cssVars = require('postcss-simple-vars'),
//     nested = require('postcss-nested'),
//     importCss = require('postcss-import'),
//     browserSync = require('browser-sync').create();
//
// gulp.task('lolo', function() {
//   console.log('brand new gulp task');
// });
//
// gulp.task('htmlWork', function() {
//   console.log('pretending like it is a hard html coding job');
// });
//
// gulp.task('cssWork', function() {
//   return gulp.src('tt/Css/again/maCssII.css')
//     .pipe(postCss([importCss, cssVars, nested, autoPrefix]))
//     .pipe(gulp.dest('tt/Css/styles'));
// });
//
// gulp.task('watch', function() {
//
//   browserSync.init({
//     notify: false,
//     server: {
//       baseDir: "tt"
//     }
//   });
//
//   watch('tt/index.html', function() {
//     browserSync.reload();
//   });
//
//   watch('tt/Css/**/*.css', function() {
//   gulp.start('cssReload');
//   });
// });
//
// gulp.task('cssReload', ['cssWork'], function() {
//   return gulp.src('tt/Css/styles/maCssII.css')
//     .pipe(browserSync.stream());
// });
