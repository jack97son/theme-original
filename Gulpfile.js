
var gulp = require('gulp');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('demo', function () {
  gulp.src('src/css/*.css')
  .pipe(gulp.dest('css/'));
});