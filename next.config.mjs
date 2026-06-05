/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/resume", destination: "/#about", permanent: true },
      { source: "/work", destination: "/#work", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
