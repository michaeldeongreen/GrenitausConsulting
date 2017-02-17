// /gulpfile.js 
var gulp = require('gulp');

gulp.task('build', [], function() {
  console.log("Moving all files in styles folder");
  gulp.src("styles/**.*")
      .pipe(gulp.dest('build/styles'));
  gulp.src("fonts/**.*")
      .pipe(gulp.dest('build/fonts'));	  
  gulp.src("images/**.*")
      .pipe(gulp.dest('build/images'));	  
  gulp.src("scripts/**.*")
      .pipe(gulp.dest('build/scripts'));	  	  
  gulp.src("app/**/*.{js,html}")
      .pipe(gulp.dest('build/app'));		  
  gulp.src(['index.html','main.js','systemjs.config.js'])
      .pipe(gulp.dest('build'));		  
  gulp.src("node_modules/core-js/client/shim.min.js")
      .pipe(gulp.dest('build/node_modules/core-js/client'));		  	  
  gulp.src("node_modules/zone.js/dist/zone.js")
      .pipe(gulp.dest('build/node_modules/zone.js/dist'));		  	  	  
  gulp.src("node_modules/systemjs/dist/system.src.js")
      .pipe(gulp.dest('build/node_modules/systemjs/dist'));		  	  	  	  
});