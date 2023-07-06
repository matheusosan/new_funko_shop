/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "matheus-nodebucket.s3.us-east-2.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
