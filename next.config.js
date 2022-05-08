/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com', 
      'raw.githubusercontent.com',
      'countryflagsapi.com'
    ]
  },
  i18n
}

module.exports = nextConfig
