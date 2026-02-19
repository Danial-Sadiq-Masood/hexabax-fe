/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // if using static export
  basePath: "/hexabax-fe",
  images: {
    unoptimized: true, // IMPORTANT for GitHub Pages
  },
};

export default nextConfig;
