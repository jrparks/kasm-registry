/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Parks Solutions',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://jrparks.github.io/kasm-registry/',
    contactUrl: 'https://github.com/jrparks/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
