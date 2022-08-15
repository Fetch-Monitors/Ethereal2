const webpack = require('webpack');

module.exports = {
  stories: [
    
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    'themeprovider-storybook/register'
    ],
  framework: '@storybook/react',
  webpackFinal: async (config, { configType }) => {
    config.plugins.push(
      // Monkeypatch Styled Components
      new webpack.DefinePlugin({
        SC_DISABLE_SPEEDY: true
      }),
    );
    // Monkeypatch Framer Motion
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    return config;
  },
}
