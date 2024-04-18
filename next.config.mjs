/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Add basePath
  basePath: "/cars-rentown-next-ts",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
