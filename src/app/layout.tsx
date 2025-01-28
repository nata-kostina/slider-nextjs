/* eslint-disable max-len */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const PPNeueMontreal = localFont({
    src: "../../public/fonts/PPNeueMontreal-Book.otf"
});

export const metadata: Metadata = {
    title: "STEMPS - Наши услуги",
    description:
        "Откройте для себя наши профессиональные услуги, которые помогут вашему бизнесу расти и развиваться. Мы предоставляем инновационные решения, ориентированные на результат и эффективность."
};

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru">
            <body
                className={
                    `${PPNeueMontreal.className} touch-action-pan-x touch-action-pan-y tap-highlight-transparent ` +
                    "hide-scrollbar-ms hide-scrollbar-firefox font-synthesis-none text-rendering-legibility webkit-font-smoothing select-none" +
                    "moz-osx-font-smoothing webkit-text-size-adjust scroll-smooth bg-bg text-black antialiased"
                }
            >
                {children}
            </body>
        </html>
    );
}
