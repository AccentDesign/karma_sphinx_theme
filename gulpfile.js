var $ = require('gulp-load-plugins')();
var gulp = require('gulp');

var config = {
    publicDir: 'karma_sphinx_theme/static',
    scssDir: 'scss',
    fontello: {
        config: 'scss/config.json',
        options: {
            host: 'http://fontello.com',
            font: 'fonts',
            css: 'module',
            assetsOnly: true
        }
    }
};

gulp.task('fontello', function () {
    return gulp.src(config.fontello.config)
    .pipe($.fontello(config.fontello.options))
    .pipe($.rename(function(path) {
        if (path.extname === '.css') {
            path.basename = '_' + path.basename;
            path.extname = '.scss'
        }
    }))
    .pipe(gulp.dest(config.scssDir))
});

gulp.task('fontello_dist', function () {
    return gulp.src(config.scssDir + '/fonts/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'))
});
