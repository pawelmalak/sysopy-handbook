const path = require('path');

const mainConfig = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

const addConfig = {
  entry: path.resolve(__dirname, 'src/js/add.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'subBundle.js'
  }
};

module.exports = [mainConfig, addConfig];