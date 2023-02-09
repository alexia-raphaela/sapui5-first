var gulp = require('gulp');
var ui5preload = require( 'gulp-ui5-preload' );
var uglify = require( 'gulp-uglify' );
var gulpif = require( 'gulp-if' );

gulp.task( 'ui5preload' , function () {
  return gulp.src(
  [ '**/**.+(js|xml)' , '!Component-preload.js' , '!gulpfile.js' ,
  '!model/metadata.xml' ]).pipe(gulpif( '**/*.js' , uglify()))
  .pipe(ui5preload({
  base: '.' ,
  namespace: 'SeuNamespace'
  })).pipe(gulp.dest( '.' ));
  })