import path from 'path';
import { Configuration } from 'webpack';

const common: Configuration = {
	context: path.join(__dirname, 'src'),
	entry: {
		app: './index.tsx'
	},
	module: {
		rules: [
			{
				test: /.ts$/,
				use: 'ts-loader',
			},
			{
				test: /\.tsx$/,
				use: 'ts-loader',
			}
		],
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
};

export default common;