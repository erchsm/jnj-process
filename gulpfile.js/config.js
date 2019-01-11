var path = require('path');
var historyApiFallback = require('connect-history-api-fallback');

// var webpack = require('webpack');
// var webpackDevMiddleware = require('webpack-dev-middleware');
// var webpackHotMiddleware = require('webpack-hot-middleware');

// var webpackConfig = require('./webpack.config');
// var bundler = webpack(webpackConfig);

module.exports = {
    root: {
        src: path.join(__dirname, '../src'),
        dest: path.join(__dirname, '../docs')
    },
    watchableTasks: ['copyScripts', 'copyImg', 'copyFonts', 'ejs', 'scripts', 'styles', 'iconfont'],
    tasks: {
        browserSync: {
            server: {
                baseDir: "./docs",
                middleware: [historyApiFallback()]
            }
        },
        node: {
            src: 'js/*',
            extensions: ['js']
        },
        scripts: {
            src: 'js/client',
            dest: 'assets/js',
            output: 'app.js',
            sources: [
                { input: 'main.js', output: 'main.js'},
                { input: 'mdc-nav.js', output: 'mdc-nav.js'},
                { input: 'mdc-buttons.js', output: 'mdc-buttons.js'},
                { input: 'mdc-cards.js', output: 'mdc-cards.js'},
                { input: 'mdc-compare-module.js', output: 'mdc-compare-module.js'},
                { input: 'mdc-switcher.js', output: 'mdc-switcher.js'},
                { input: 'mdc-companies-picker.js', output: 'mdc-companies-picker.js'},
                { input: 'mdc-taxonomy-diagram.js', output: 'mdc-taxonomy-diagram.js'},
                { input: 'home-profile-setup.js', output: 'home-profile-setup.js'},
                { input: 'home-sitemap.js', output: 'home-sitemap.js'},
                { input: 'home-nav.js', output: 'home-nav.js'},
                { input: 'home-links.js', output: 'home-links.js'},
            ],
            extensions: ['js']
        },
        copyScripts: {
            src: 'js/vendor',
            dest: 'assets/js',
            extensions: ['js']
        },
        copyImg: {
            src: 'img',
            dest: 'assets/img',
            extensions: ['jpg', 'svg', 'png', 'gif']
        },
        copyFonts: {
            src: 'fonts',
            dest: 'assets/fonts',
            extensions: ['woff', 'eot', 'woff2', 'svg', 'ttf', 'otf']
        },
        styles: {
            src: 'styles',
            dest: 'assets/css',
            sources: [
            { input: 'styles.scss', output: 'styles.css'},
            { input: 'company-page.scss', output: 'company-page.css'},
            { input: 'brightcove-player.scss', output: 'brightcove-player.css'},
            ],
            extensions: ['scss','sass','css']
        },
        ejs: {
            src: 'templates',
            dest: '.',
            extensions: ['ejs']
        },   
        sprite: {
            src: 'images/',
            dest: 'assets/css/img/',
            cssDest: './src/styles',
            imgName: 'sprite.png',
            retinaImgName: 'sprite@2x.png',
            cssName: 'sprite.scss',
            extensions: ['png']
        },
        iconfont: {
            src: 'icons/',
            dest: 'assets/fonts/',
            template: 'icons/templates/webfont.template.css',
            cssDest: './src/styles',
            cssName: '_icons.scss',
            extensions: ['svg'],
            config: {
                fontName: 'icons', // required
                appendUnicode: true, // recommended option
                formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'], // default, 'woff2' and 'svg' are available
                timestamp: Math.round(Date.now()/1000), // recommended to get consistent builds when watching files
                normalize: true,
                fontHeight: 500
            }
        },
    }
};
