var gulp = require("gulp"),
    // util = require("gulp-util"),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
// var rev = require('gulp-rev');
// var revCollector = require('gulp-rev-collector');
// var connect = require("gulp-connect");
// var webserver = require("gulp-webserver");
//var minifyCss = require('gulp-minify-css');  
let packageInfo = require('./package.json')
let BUILD_PATH = './build/'+packageInfo.version;
//任务
gulp.task("copy-src", function() {
    gulp.src(["./src/libs*/**/*","./src/resource*/**/*"]).pipe(gulp.dest(BUILD_PATH))
    
})

//压缩js
var jsFiles = [
    "src/libs/modules/egret/egret.js",
    "src/libs/modules/egret/egret.web.js",
    
    "src/libs/modules/egret_4399_h5api/egret_4399_h5api.js",
    "src/libs/modules/tween/tween.js",
    "src/libs/modules/res/res.js",
    "src/libs/modules/eui/eui.js"
];
gulp.task("packjs", function() {
    gulp.src(jsFiles).
    pipe(uglify()).
    pipe(concat("lib.js")).
    pipe(gulp.dest(BUILD_PATH))
})
// var cssFiles=[
//     'src/css/index1.css',
//     'src/css/index2.css',
    
// ]
// gulp.task('packcss',function(){
//     gulp.src(cssFiles).
//     pipe(minifyCss()).   
//     pipe(concat("bundleCss2.css")).
//     pipe(gulp.dest("./app/css"))

// })

// gulp.task("ver-js", function() {
//     gulp.src("./app/js/main.js").pipe(rev()).pipe(rev.manifest()).pipe(gulp.dest("./app/ver/js"))
// })
// gulp.task("html", function() {
//     gulp.src(["./app/ver/**/*.json", "./app/*.html"]).pipe(revCollector({ repleacereved: true })).pipe(gulp.dest("./app"))
// })
// gulp.task("watch", function() {
//     gulp.watch('./src/js/*.js', ['packjs']);
//     gulp.watch('./src/**/*', ["copy-src"]);
//     gulp.watch('./app/js/main/js', ["ver-js"]);
//     // gulp.watch(["webserver"])

// })

// gulp.task('default', ['copy-src', 'packjs', 'ver-js', 'html', "watch"])
gulp.task('default', ['copy-src','packjs'])