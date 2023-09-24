/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["tailwindui.com"]
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/products',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
