const gulp = require("gulp");
const ts = require("gulp-typescript");
const browserify = require("gulp-browserify");

let project = ts.createProject("tsconfig.json");

// transpile Ts to ES5 / CommonJS
gulp.task("build", function() {
  return project.src()
    .pipe(project())
    .js.pipe(gulp.dest("build"))
});

// bundle ES5 / CommonJS into single UMD for browser
gulp.task("bundle", function() {
  return gulp.src("build/client.js")
    .pipe(browserify())
    .pipe(gulp.dest("build/static"))
})

gulp.task("default", gulp.series("build", "bundle"));
