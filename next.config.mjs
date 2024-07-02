/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "api.microlink.io"
            },
            {
                hostname: "unsplash.com"
            }
        ],
    },
};

export default nextConfig;
