const webpack = require('webpack');
const path = require('path');

const config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client?http://localhost:3000/',
        path.join(__dirname, '/client/Route.jsx')
    ],
    output: {
        path: path.resolve(__dirname, 'client', 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    
    module: {
			
		
		 rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            }, 
			{
              test: /\.css$/,
              loader: 'style-loader!css-loader'
            },
			{
             test: /\.(jpe?g|gif|png)$/,
             loader: 'file-loader?emitFile=false&name=../assets/images/[name].[ext]'
            }
        ]
		
		
	
    }
}

module.exports = config;
