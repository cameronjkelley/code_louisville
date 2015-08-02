"use strict";

var concat = require("gulp-concat"),
	cssConcat = require('gulp-concat-css'),
	del = require("del"),
	gulp = require("gulp"),
	maps = require("gulp-sourcemaps"),
	minify = require('gulp-minify-css'),
	rename = require("gulp-rename"),
	uglify = require("gulp-uglify");

gulp.task("concatCss", function() {
	return gulp.src([
		"css/bootstrap.min.css", 
		"css/bootstrap-theme.min.css", 
		"css/lightbox.css", 
		"css/babbit.css"
		])
	    .pipe(maps.init())
		.pipe(cssConcat("main.css"))
		.pipe(maps.write("./"))
		.pipe(gulp.dest("css"));
});

gulp.task("concatScripts", function() {
  return gulp.src([
  	"js/jquery-1.11.3.min.js", 
  	"js/bootstrap.min.js", 
  	"node_modules/angular/angular.min.js", 
  	"node_modules/angular-route/angular-route.min.js",
  	"js/lightbox.min.js", 
  	"js/app.js", 
  	"js/controllers.js", 
  	"js/directives.js",
  	"js/filters/js"
  	])
	    .pipe(maps.init())
		.pipe(concat("main.js"))
		.pipe(maps.write("./"))
		.pipe(gulp.dest("js"));
});

gulp.task("minifyCss", ["concatCss"], function() {
	return gulp.src("css/main.css")
		.pipe(minify())
		.pipe(rename("main.min.css"))
		.pipe(gulp.dest("dist/css"));
});

gulp.task("minifyScripts", ["concatScripts"], function() {
	return gulp.src("js/main.js")
		.pipe(uglify())
		.pipe(rename("main.min.js"))
		.pipe(gulp.dest("dist/js"));
});

gulp.task("watchFiles", function() {
	gulp.watch("css/main.css", ["minifyCss"]);
});

gulp.task("clean", function() {
	del(["dist", "css/main.*css*", "js/main.*js*"]);
});

gulp.task("build", ["minifyCss", "minifyScripts"], function() {
	return gulp.src(["css/main.*.*", "css/ajax-loader.gif", "js/main.*.*", "partials/**", "index.html", "fonts/**", "images/**", "cars.json", "README.md"], {base: "./"})
				.pipe(gulp.dest("dist"));
});

gulp.task("serve", ["watchFiles"]);

gulp.task("default", ["clean"], function() {
	gulp.start("build");
});