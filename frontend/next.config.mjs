/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/@:username",
        destination: "/user/:username",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
export default nextConfig;
