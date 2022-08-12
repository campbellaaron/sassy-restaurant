const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// SASS Task
function scssTask() {
    return src('scss/main.scss', {sourcemaps: true}).pipe(sass()).pipe(postcss([cssnano()])).pipe(dest('css', {sourcemaps: '.'}));
}

// JS Task
function jsTask() {
    return src('js/script.js', {sourcemaps: true}).pipe(terser()).pipe(dest('dist/js', {sourcemaps: '.'}));
}

// BrowserSync Task
function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

function browsersyncReload(cb) {
    browsersync.reload();
    cb();
}

// Default Gulp task

function watchTask() {
    watch('*.html', browsersyncReload);
    watch('scss/**/*.scss', series(scssTask, browsersyncReload));
    watch('js/**/*.js', series(jsTask, browsersyncReload));
}

exports.default = series(
    scssTask,
    jsTask,
    browsersyncServe,
    watchTask
);