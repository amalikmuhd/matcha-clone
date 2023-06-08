const path = require('path');
module.exports = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'assets.example.com',
  //       port: '',
  //       pathname: '/account123/**',
  //     },
  //   ],
  // },
};

// module.exports = nextConfig;
