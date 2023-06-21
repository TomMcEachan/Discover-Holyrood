/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/app/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                XSMobile: "280px",
                MDMobile: "375px",
                LMobile: "425px",
                STablet: "520px",
                MDTablet: "768px",
                MDLaptop: "1024px",
                LGLaptop: "1440px",
            },
            colors: {
                spblue: {
                    dark: "#00223E",
                    light: "#003057",
                },
                spmagenta: {
                    dark: "#7C0165",
                    light: "#B0008E",
                },
                sppurple: {
                    light: "#500778",
                    dark: "#3A0059",
                },
                spsilver: "#848789",
                splightblue: "#007dba",
                sporange: "#e87722",
                spwhite: "#FFFFFF",
                spblack: "#000000",
                spgreen: "#0C644B",
                spred: "#e40046",
                spmustard: "#996900",
            },
        },
    },
    daisyui: {
        themes: [
            {
                parliamentStylesLight: {
                    primary: "#500778",
                    secondary: "#3a0059",
                    accent: "#7c0165",
                    neutral: "#f3f4f6",
                    "base-100": "#FFFFFF",
                    "base-content": "#000000",
                    info: "#B85A15",
                    success: "#108765",
                    warning: "#daaa00",
                    error: "#e40046",
                },
                parliamentStylesDark: {
                    primary: "#f3f4f6",
                    secondary: "#7c0165",
                    accent: "#007dba",
                    neutral: "#d1d5db",
                    "base-100": "#000000",
                    "base-content": "#FFFFFF",
                    info: "#B85A15",
                    success: "#108765",
                    warning: "#daaa00",
                    error: "#e40046",
                },
                parliamentStylesHighContrast: {
                    primary: "#f3f4f6",
                    secondary: "#7c0165",
                    accent: "#007dba",
                    neutral: "#d1d5db",
                    "base-100": "#000000",
                    info: "#B85A15",
                    success: "#108765",
                    warning: "#daaa00",
                    error: "#e40046",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
