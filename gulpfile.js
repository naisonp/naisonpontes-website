// Script: gulpfile.js
// by: Naison Pontes

const gulp = require('gulp');
const debug = require('gulp-debug');
const eventStream = require('event-stream');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const htmlmin = require('gulp-htmlmin');

gulp.task('minify-html', function () {
  return gulp
    .src('./public/*.html')
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(debug({ title: "--- minify file HTML" }))
    .pipe(gulp.dest('./public'))
});

gulp.task('minify-js', function () {
  return gulp
    .src('./public/assets/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(debug({ title: "--- minify file JavaScript" }))
    .pipe(uglify())
    .pipe(gulp.dest('./public/assets/js'))
});

gulp.task('fontawesome', async () => {
  return eventStream.merge([
    gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/*')
      .pipe(debug({ title: "--- copied FontAwesome 5 Free fonts" }))
      .pipe(gulp.dest('./assets/vendor/font-awesome/webfonts')),

    gulp.src('./node_modules/@fortawesome/fontawesome-free/css/all.min.css')
      .pipe(debug({ title: "--- copied FontAwesome 5 Free css" }))
      .pipe(gulp.dest('./assets/vendor/font-awesome/css'))
  ])
});

gulp.task('easypiechart', async () => {
  return gulp
    .src('./node_modules/easy-pie-chart/dist/easypiechart.min.js')
    .pipe(debug({ title: "--- copied Easy Pie Chart 2.1.7 js" }))
    .pipe(gulp.dest('./assets/vendor/easy-pie-chart/js'))
});

gulp.task('clean', async () => {
  return gulp
    .src(['./assets/vendor/font-awesome/*', './assets/vendor/easy-pie-chart/*'], { read: false })
    .pipe(debug({ title: "--- cleaning vendor directorys" }))
    .pipe(clean());
});

gulp.task('minify', gulp.series(['minify-html', 'minify-js']));
gulp.task('postinstall', gulp.series('clean', ['fontawesome', 'easypiechart']));
gulp.task('default', gulp.series('postinstall', gulp.parallel(['minify'])));