module.exports = api => {
  const babelEnv = api.env();
  const plugins = [];
  if (babelEnv !== 'development') {
    plugins.push(['transform-remove-console']);
  }
  const {createRequire} = require('module');
  const rnRequire = createRequire(require.resolve('react-native'));
  return {
    // presets: ['module:metro-react-native-babel-preset'],
    presets: [rnRequire.resolve('metro-react-native-babel-preset')],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@components': './src/components',
            '@config': './src/config',
            '@constants': './src/constants',
            '@navigation': './src/navigation',
            '@redux': './src/redux',
            '@screen': './src/screen',
            '@utils': './src/utils',
            tests: ['./tests/'],
          },
        },
      ],
    ],
  };
};