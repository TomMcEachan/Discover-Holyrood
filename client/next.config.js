/** @type {import('next').NextConfig} */

const webpack = require("webpack");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig = {};

const withNeedleEngine = async () => {
    const { needleNext } = await import(
        "@needle-tools/engine/plugins/next/index.js"
    );

    return needleNext({}, { modules: { webpack } });
};

const withPWAModule = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
});

module.exports = withPWAModule(
    withBundleAnalyzer(withNeedleEngine(nextConfig)),
);
