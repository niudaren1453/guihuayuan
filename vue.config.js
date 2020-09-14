module.exports = {
    devServer: {
        port: 4883,
        proxy: {
            '/api': {
                target: 'http://58.22.125.43:8888',
                changeOrigin: true
            }
        }
    }
}
