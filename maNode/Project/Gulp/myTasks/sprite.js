var gulp = require('gulp'),
    sprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename');

var config = {
      mode: {
        css: {
          sprite: 'sprite.svg',
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

gulp.task('copySpriteLocate', ['createSprite'], function() {
  return gulp.src('tt/Css/Sprite/css/**/*.svg')
   .pipe(gulp.dest('tt/assets/images/sprite'))
});

gulp.task('copySpriteCss', ['createSprite'], function() {
  return gulp.src('tt/Css/Sprite/css/*.css')
  .pipe(rename('_sprite.css'))
  .pipe(gulp.dest('tt/Css/again/newStyle'));
});

gulp.task('icon', ['createSprite', 'copySpriteLocate', 'copySpriteCss']);
