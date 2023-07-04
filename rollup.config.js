import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

module.exports = {
	input: 'client/source/tokumei.js',
	output: {
		file: 'client/public/js/tokumei.js',
		format: 'iife'
	},
	plugins: [
		nodeResolve(),
		commonjs()
	]
};