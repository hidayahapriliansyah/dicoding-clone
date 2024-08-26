/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dicoding-web-img.sgp1.cdn.digitaloceanspaces.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd17ivq9b7rppb3.cloudfront.net',
        port: '',
        pathname: '/**'
      }
    ],
  },
};

export default nextConfig;
