import fileinclude from 'gulp-file-include';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';

export const html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber({
      errorHandler(err) {
        app.plugins.notify.onError({
          title: 'HTML Error',
          message: 'Error: <%= error.message %>',
        })(err);
        this.emit('end');
      },
    }))
    .pipe(fileinclude())
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(
      app.plugins.if(
        app.isBuild,
        webpHtmlNosvg()
      )
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
};