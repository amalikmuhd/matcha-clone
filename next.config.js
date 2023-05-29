const path = require('path');
module.exports = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

// module.exports = nextConfig;
