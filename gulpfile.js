const gulp = require("gulp");
const babel = require("gulp-babel");
const tslint = require("gulp-tslint");

const babelConfig = {
    plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-export-default-from",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-object-rest-spread"
    ],
    presets: ["@babel/preset-typescript", "@babel/preset-env"]
};

gulp.task(
    "build",
    gulp.series(() => {
        return gulp
            .src("src/**/*.ts")
            .pipe(tslint({ configuration: `${__dirname}/tslint.json` }))
            .pipe(babel(babelConfig))
            .pipe(gulp.dest("dist"));
    })
);