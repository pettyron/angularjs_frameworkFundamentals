const gulp = require('gulp'),
      notify = require('gulp-notify'),
      bs = require('browser-sync').create();

const reload = bs.reload();

gulp.task('scripts', function () {
    return gulp.src('scripts/*.js')
        .pipe(notify({message: 'Gulp task complete'}));
});

gulp.task('serve:files', ['scripts'], function (gulpCallBack) {
    bs.init({
      browser: 'chrome.exe',
      server: {
        baseDir: './',
        directory: true
      },
      cors: true,
      startPath: '/index.html',
      injectChanges: true,
      notify: false
    }, function callback() {
      gulp.watch(['*.html', 'scripts/*.js'], bs.reload);
      gulpCallBack();
    });
  });

  gulp.task('watch', function () {
      gulp.watch('scripts/*.js', ['scripts']);
  });
  
  // Default task
  gulp.task('default', ['watch', 'serve:files']);