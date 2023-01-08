/* eslint-disable */
import fs from "fs";
import path from "path";
import { minify } from "html-minifier-terser";
import TOML from "@iarna/toml";
import QRCode from "qrcode";
// import { createHash } from "crypto";

export const htmlMinifierAndLicenseCopier = {
    name: "html-minifier-license-copier",
    apply: "build",
    transformIndexHtml: {
        enforce: "post",
        async transform(html) {
            // minify html
            return await minify(html, {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                minifyCSS: true,
            });
        },
    },
    writeBundle: {
        order: "post",
        handler(options) {
            // check if the license file exists.
            if (fs.existsSync("LICENSE")) {
                fs.copyFileSync("LICENSE", path.join(options.dir, "LICENSE"));
            } else {
                // If the source file does not exist, log an error and exit the application
                console.error(
                    "Error: License file not found. It is important to include the LICENSE.md file in the final build artifact if you are using the MPL 2.0 license, as the MPL requires that users be able to access the license terms when they receive the software. Failing to include the license file in the build artifact could potentially violate the terms of the MPL.",
                );
                process.exit(1);
            }
        },
    },
};

/*
 * FIXME:
 Sadly this code does not work, due to the fact that:
 when vite gives you the transforms html it doesn't produce the actual assets name it puts something like:
 url("__VITE_ASSET__f5b6468f__")
 while you would expect it to be: assets/poppins-v19-latin-700-9338e65f.woff2
*/

export const createCSP = {
    name: "create-csp",
    apply: "build",
    transformIndexHtml: {
        enforce: "post",
        async transform(html, ctx) {
            return html.replace(
                "<head>",
                `<head><meta http-equiv="Content-Security-Policy" content="default-src 'none'; base-uri 'none'; object-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; prefetch-src 'self'; font-src 'self'; img-src * data:;"/>`,
            );
        },
        // async transform(html, ctx) {
        //     const styles = [];
        //     const inlineStylesRegex = /<style[^>]*>([^]*?)<\/style>/g;
        //     let match;
        //     while ((match = inlineStylesRegex.exec(html)) !== null) {
        //         console.log(match, match[1], ctx);
        //         const style = match[1];
        //         const hash = createHash("sha256")
        //             .update(style)
        //             .digest("base64");
        //         styles.push("sha-256-" + hash);
        //     }

        //     return html.replace(
        //         "<head>",
        //         `<head><meta http-equiv="Content-Security-Policy" content="default-src 'none'; base-uri 'none'; object-src 'none'; script-src 'self'; style-src 'self' '${styles.join(
        //             " ",
        //         )}'; img-src *"/>`,
        //     );
        // },
    },
};

export const loadConfig = () => {
    // Check if the template.toml file exists and if the config environment variable is not set
    if (!fs.existsSync("template.toml", "utf8") && !process.env?.config) {
        // If neither the template.toml file nor the config environment variable are present, log a suggestion to use template.blank.toml as a starting point and mention template.example.toml as an example
        console.error(
            "No config found. If you are looking for an example, you can refer to template.example.toml. Otherwise, consider using template.blank.toml as a starting point for your template.toml configuration file. Alternatively, you can specify a base64 encoded TOML config in the 'config' environment variable.",
        );
        process.exit(78);
    }

    // We use TOML for configuration because it is easy to use.
    // If the 'config' environment variable is set, we parse its base64-encoded value as TOML.
    // Otherwise, we parse the template.toml file in the root directory.
    const config = process.env?.config
        ? TOML.parse(Buffer.from(process.env.config, "base64"))
        : TOML.parse(fs.readFileSync("template.toml", "utf8"));

    // we add a DataUrl for the qr code on the config.
    // This allows us when templating to put in the qr code.
    config.elements.map(async (element) => {
        element.qr = await QRCode.toDataURL(element.content, {
            errorCorrectionLevel: "L",
            type: "image/webp",
            quality: 1,
            width: 162,
        });
    });

    return config;
};
