/* eslint-disable */
module.exports = {
    mode: "jit",
    content: ["./index.html", "./src/**/*.js", "./src/**/*.ts"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        // colors: {
        //     neutral: {
        //         900: "#1D2023",
        //     },
        // },
        extend: {
            fontFamily: {
                poppins: "'Poppins', sans-serif",
            },
            colors: {
                neutral: {
                    // TODO add all colors here
                    900: "#FF5F1F",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
