const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scriptytui.js',
    library: 'scriptytui',
    libraryTarget: 'umd',
  },
};
