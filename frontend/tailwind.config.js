/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                "custom-bg": "#f0f0f0", // Your desired background color
            },
            colors: {
                light: "#FFFEFC",
                dark: "#191919",
                buttonLight: "#F7F7F4",
                buttonRedBg: "#FCF5F2",
            },
        },
    },
    plugins: [],
};
