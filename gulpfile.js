const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sync = require('browser-sync').create();
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const svgstore = require('gulp-svgstore');
const del = require('del');
const terser = require('gulp-terser');
const htmlValidator = require('gulp-w3c-html-validator');


// Styles

const styles = () => {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('build/css/'))
    .pipe(csso())
    .pipe(sourcemap.write('.'))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css/'))
    .pipe(sync.stream());
}
exports.styles = styles;

// Html

const html = () => {
  return gulp.src('source/*.html')
  .pipe(htmlValidator())
  .pipe(gulp.dest('build/'))
}
exports.html = html;

// Scripts

const scripts = () => {
  return gulp.src('source/js/script.js')
    .pipe(terser())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('build/js/'))
    .pipe(sync.stream())
}
exports.scripts = scripts;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build/'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}
exports.server = server;


// Images-min

const images = () => {
  return gulp.src('source/img/*.{jpg,svg}')
    .pipe(imagemin([
      imagemin.mozjpeg({progressive: true}),
      imagemin.svgo()
    ]))
}
exports.images = images;

// Images-webp

const toWebp = () => {
	return gulp.src('source/img/*.{png,jpg}')
    .pipe(webp({quality: 90}))
		.pipe(gulp.dest('source/img'))
};
exports.toWebp = toWebp;

// Sprite

const sprite = () => {
  return gulp.src('source/img/icon-*.svg')
  .pipe(svgstore())
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('build/img'))
}
exports.sprite = sprite;


//Build

const copy = () => {
  return gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**',
  ], {
    base:'source'
  })
  .pipe(gulp.dest('build'));
};
exports.copy = copy;


const clean = () => {
  return del('build');
};
exports.clean = clean;

// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch('source/*.html', gulp.series(html));
  gulp.watch('source/js/script.js', gulp.series(scripts));
  gulp.watch('source/img/icon-*.svg', gulp.series(sprite));
}

const build = gulp.series(
  clean,
  gulp.parallel(
    copy,
    images,
    styles,
    scripts,
    html,
    sprite
  )
)
exports.build = build;

exports.default = gulp.series(
  build,
  server,
  watcher
);
