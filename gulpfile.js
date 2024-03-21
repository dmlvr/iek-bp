const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const posthtml = require('gulp-posthtml');
const htmlmin = require('gulp-htmlmin');
const include = require('posthtml-include');
const del = require('del');
const svgstore = require("gulp-svgstore");

gulp.task('css', function () {
    return gulp.src('source/scss/style.scss')
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(csso())
        .pipe(rename('style.min.css'))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest('build/css'))
});

gulp.task('html', function(){
    return gulp.src('source/*.html')
        .pipe(posthtml([
            include()
        ]))
        .pipe(htmlmin({removeComments: true}))
        .pipe(gulp.dest('build'));
});

gulp.task("sprite", function () {
    return gulp.src("source/img/*.svg")
      .pipe(svgstore({
        inlineSvg: true
      }))
      .pipe(rename("sprite.svg"))
      .pipe(gulp.dest("build/img"));
  });

gulp.task('server', function(){
    server.init({
        server: 'build/',
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch('source/scss/**/*.scss', gulp.series('css', 'refresh'));
    gulp.watch('source/js/**', gulp.series('copy', 'refresh'));
    gulp.watch('source/index.html', gulp.series('html', 'refresh'));
    gulp.watch('source/html/**/*.html', gulp.series('html', 'refresh'));
    gulp.watch('source/img/*.svg', gulp.series('sprite', 'refresh'));
});

gulp.task('refresh', function(done){
    server.reload();
    done();
});

gulp.task('clean', function () {
    return del('build');
});

gulp.task('copy', function(){
    return gulp.src([
        'source/img/**',
        'source/favicon.*',
        'source/js/**',
        ], {
            base: 'source',
        })
        .pipe(gulp.dest('build'));
});

gulp.task('build', gulp.series('clean', 'copy', 'css', 'html', 'sprite'));

gulp.task('start', gulp.series('build', 'server'));