
const path = require('path');

module.exports = 
{
    mode: "development",
    entry: './demo.js',
    output: 
    {
        filename: 'handler.js',
        path: path.join(__dirname, './'),
    },
    resolve: 
    {
        modules: [ 'node_modules' ]
    }
};