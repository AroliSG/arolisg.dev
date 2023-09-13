/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        loader: 'akamai',
        path: '/assets',
        unoptimized: true
    },
}

module.exports = nextConfig
