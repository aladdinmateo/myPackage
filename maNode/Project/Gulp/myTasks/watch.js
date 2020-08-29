var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

    gulp.task('watch', function() {

    browserSync.init({
      notify: false,
      server: {
        baseDir: "tt"
      }
    });

    watch('tt/index.html', function() {
      browserSync.reload();
    });

    watch('tt/Css/**/*.css', function() {
    gulp.start('cssReload');
    });

  });

  gulp.task('cssReload', ['cssWork'], function() {
    return gulp.src('tt/Css/styles/maCssII.css')
      .pipe(browserSync.stream());
  });
