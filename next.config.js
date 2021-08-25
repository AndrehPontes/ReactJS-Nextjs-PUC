const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        path: path.join(__dirname, 'images'),
    },
    trailingSlash: true,
}