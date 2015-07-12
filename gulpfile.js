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
	return gulp.src(["css/application.css", "css/slick-theme.css"])
	    .pipe(maps.init())
		.pipe(cssConcat("app.css"))
		.pipe(maps.write("./"))
		.pipe(gulp.dest("css"));
});

gulp.task("concatScripts", function() {
  return gulp.src(["js/jquery-1.11.3.min.js", "js/bootstrap.min.js", "js/lightbox.js", "js/slick.min.js"])
	    .pipe(maps.init())
		.pipe(concat("app.js"))
		.pipe(maps.write("./"))
		.pipe(gulp.dest("js"));
});

gulp.task("minifyCss", ["concatCss"], function() {
	return gulp.src("css/app.css")
		.pipe(minify())
		.pipe(rename("app.min.css"))
		.pipe(gulp.dest("dist/css"));
});

gulp.task("minifyScripts", ["concatScripts"], function() {
	return gulp.src("js/app.js")
		.pipe(uglify())
		.pipe(rename("app.min.js"))
		.pipe(gulp.dest("dist/js"));
});

// gulp.task("watchFiles", function() {
// 	gulp.watch("css/**/*.css", ["concatCss"]);
// 	gulp.watch("js/*.js", ["concatScripts"]);
// });

gulp.task("clean", function() {
	del(["dist", "css/app.*css*", "js/app.*js*"]);
});

gulp.task("build", ["minifyCss", "minifyScripts"], function() {
	return gulp.src(["css/app.*.*", "css/ajax-loader.gif", "js/app.*.*", "cars.html", "contact.html", "index.html", "fonts/**", "images/**"], {base: "./"})
				.pipe(gulp.dest("dist"));
});

gulp.task("serve", ["watchFiles"]);

gulp.task("default", ["clean"], function() {
	gulp.start("build");
});