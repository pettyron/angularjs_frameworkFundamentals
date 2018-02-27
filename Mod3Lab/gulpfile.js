const gulp = require('gulp'),
      notify = require('gulp-notify'),
      bs = require('browser-sync').create();

const reload = bs.reload();

gulp.task('scripts', function () {
    return gulp.src('app/*.js')
        .pipe(notify({message: 'Gulp task complete'}));
});

gulp.task('serve:files', ['scripts'], function (gulpCallBack) {
    bs.init({
      browser: 'chrome.exe',
      server: {
        baseDir: './',
        directory: true
      },
      startPath: '/index.html',
      injectChanges: true,
      notify: false
    }, function callback() {
      gulp.watch(['*.html', 'app/*.js'], bs.reload);
      gulpCallBack();
    });
  });

  gulp.task('watch', function () {
      gulp.watch('app/*.js', ['scripts']);
  });
  
  // Default task
  gulp.task('default', ['watch', 'serve:files']);