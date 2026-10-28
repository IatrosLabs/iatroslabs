const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = (_, argv) => ({
 mode: argv.mode || 'production', entry:'./src/index.js', devtool:false,
 output:{path:path.resolve(__dirname,'dist'),filename:'assets/[name].[contenthash].js',clean:true,publicPath:'auto'},
 plugins:[new HtmlWebpackPlugin({template:'./src/index.html'}),new CopyWebpackPlugin({patterns:[{from:'public',to:'.'}]})],
 devServer:{historyApiFallback:true,port:3000},performance:{hints:false}
});
