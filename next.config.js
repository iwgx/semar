const withTM = require('next-transpile-modules')(['react-hook-speech-to-text']); // pass the modules you would like to see transpiled

module.exports = withTM({
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: 'empty', module: 'empty' }
    }

    return config
  },
})