// var gulp = require('gulp'),
//     imagemin = require('gulp-imagemin'),
//     pngquant = require('imagemin-pngquant');
//
// // Change default task to use compress_images task
// gulp.task('default', ['compress_images']);
//
// // Compress png images from images/ folder
// gulp.task('compress_images', function () {
//    return gulp.src('images/**')
//        .pipe(imagemin({
//            progressive: true,
//            use: [pngquant()]
//        }))
//        .pipe(gulp.dest('_site/images'));
// });

var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function() {
    return gulp.src("/_site/**/*")
})
