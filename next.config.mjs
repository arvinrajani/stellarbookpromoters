/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  // Ensure proper CSS processing
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    
    // Optimize for better iOS compatibility
    config.optimization = {
      ...config.optimization,
      minimize: true,
    };
    
    return config;
  }
};

export default nextConfig;
