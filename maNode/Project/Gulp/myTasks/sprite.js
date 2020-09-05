var gulp = require('gulp'),
    sprite = require('gulp-svg-sprite');

var config = {
      mode: {
        css: {
          render: {
            css: {
              template: 'Gulp/template/sprite.css'
            }
          }
        }
      }
    };

gulp.task('createSprite', function() {
  return gulp.src('tt/assets/images/icons/**/*.svg')
  .pipe(sprite(config))
  .pipe(gulp.dest('tt/Css/Sprite/'));
});
