/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/reyti',
  assetPrefix: '/reyti',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
