var gulp = require('gulp'),
    postCss = require('gulp-postcss'),
    autoPrefix = require('autoprefixer'),
    cssVars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    mixins = require('postcss-mixins'),
    importCss = require('postcss-import');

gulp.task('cssWork', function() {
  return gulp.src('tt/Css/again/maCssII.css')
    .pipe(postCss([importCss, mixins, cssVars, nested, autoPrefix]))
    .on('error', function(errorFix) {
      console.log(errorFix.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('tt/Css/styles'));
});
