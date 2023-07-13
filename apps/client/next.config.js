const webpack = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
        ],
    },
    swcMinify: true,
};

module.exports = withNeedleEngine = async () => {
    const { needleNext } = await import(
        "@needle-tools/engine/plugins/next/index.js"
    );

    return needleNext({}, { modules: { webpack } });
};

module.exports = withPWAModule = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
});

module.exports = nextConfig;
