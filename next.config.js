/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_PAYPAL_CLIENT_ID: 'AfFdike6trZ2RydA4QUMQeW0i2LqWacdlpdOWET_XR0A6ZVqTzYj9WtQDJDxMocK3BiVIZtHL7hSnsx9',
    PAYPAL_ACCESS_TOKEN: 'EMmY-tY2dILBclSATchY6UsfrqPv1lmivUKRJfO2ocS-Mu-ufHyMtpB3fZPQ7wrZBuFTRbGHd_7jeX7E'
  }
}

module.exports = nextConfig
