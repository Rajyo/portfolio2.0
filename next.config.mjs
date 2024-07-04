/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "api.microlink.io"
            },
            {
                hostname: "unsplash.com"
            },
            {
                hostname: "images.unsplash.com"
            },
        ],
    },
};

export default nextConfig;
