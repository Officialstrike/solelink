/* eslint-disable */
import { ViteEjsPlugin } from "vite-plugin-ejs";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
import tailwindConfig from "./tailwind.config.cjs";
import {
    loadConfig,
    htmlMinifierAndLicenseCopier,
    createCSP,
} from "./vite-utils.js";

export default {
    // config options
    plugins: [
        ViteEjsPlugin(loadConfig()),
        htmlMinifierAndLicenseCopier,
        createCSP,
    ],
    css: {
        postcss: {
            plugins: [
                tailwind(tailwindConfig),
                autoprefixer,
                postcssPresetEnv({ browsers: "last 2 versions" }),
            ],
        },
    },
    build: {
        target: ["firefox90", "chrome90"],
        outDir: "./dist",
        assetsInlineLimit: 0,
        modulePreload: false,
    },
};
