const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    },
    configureWebpack: {
        plugins: [
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'),
                routes: ['/', '/blog'],
            })
        ]
    }
}

function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/scss/*.scss'),
            ],
        })
}