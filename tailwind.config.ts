import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/vectors/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            screens: {
                md: "768px"
            },
            colors: {
                primary: "#A59DFF",
                "light-gray": "#e1e1e1",
                gray: "#F0F0F0",
                "medium-gray": "#CCCCCC",
                black: "#151515",
                bg: "#FAFAFA",
                "light-white": "#F3F3F3"
            }
        }
    },
    plugins: [
        function ({ addComponents }: PluginAPI) {
            addComponents({
                ".transition-slide": {
                    transition:
                        "opacity 0.2s ease-in-out, transform 0.3s ease-in-out, visibility 0s 0s"
                },
                ".font-synthesis-none": {
                    "font-synthesis": "none"
                },
                ".text-rendering-legibility": {
                    "text-rendering": "optimizeLegibility"
                },
                ".webkit-font-smoothing": {
                    "-webkit-font-smoothing": "antialiased"
                },
                ".moz-osx-font-smoothing": {
                    "-moz-osx-font-smoothing": "grayscale"
                },
                ".webkit-text-size-adjust": {
                    "-webkit-text-size-adjust": "100%"
                }
            });
        }
    ]
} satisfies Config;
