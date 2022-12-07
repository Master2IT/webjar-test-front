/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    api_url: 'https://challenge.webjar.ir/',
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzdmOTk4N2ZkMTcxNzAwMWYzYmFlMTkiLCJzdWIiOiI2MzdmOTk4N2ZkMTcxNzAwMWYzYmFlMTkiLCJ0b2tlblR5cGUiOiJBQ0NFU1NfVE9LRU4iLCJyb2xlIjoiVVNFUiIsInRva2VuS2V5IjoiZDE2OWQ2MGUtNTNhYy00NWM4LTgwZTAtN2Y2NDUyZDc1Y2Y5IiwiaWF0IjoxNjcwNDI2Nzc5LCJleHAiOjE2NzMwMTg3Nzl9.0M9ZLsps4DwMk3DEPqmVPKBC-PaZj5gMNY8Zs_z_mKM'
  }
}

module.exports = nextConfig
