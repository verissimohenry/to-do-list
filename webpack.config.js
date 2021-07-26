import { resolve } from 'path';

export const mode = 'development';
export const entry = './src/index.js';
export const devtool = 'inline-source-map';
export const devServer = {
  contentBase: './dist',
};
export const module = {
  rules: [{
    test: /\.scss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  }],
};
export const output = {
  filename: 'main.js',
  path: resolve(__dirname, 'dist'),
};
