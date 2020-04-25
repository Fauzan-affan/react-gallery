const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindcss('./tailwindcss.js'),
        require('autoprefixer')
    ]
}