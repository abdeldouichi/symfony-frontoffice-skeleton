var Encore = require("@symfony/webpack-encore");

Encore
    // directory where compiled assets will be stored
    .setOutputPath("web/build/")
    // public path used by the web server to access the output path
    .setPublicPath("/build")
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    .addEntry("app", "./assets/js/index.js")
    .addStyleEntry("style", "./assets/scss/style.scss")

    /*
     * FEATURE CONFIG
     * Enable & configure other features below. For a full
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())

    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    /******
     * SASS Preprocessor ****?
     */
    // enables Sass/SCSS support
    .enableSassLoader()
    .autoProvidejQuery();

module.exports = Encore.getWebpackConfig();
