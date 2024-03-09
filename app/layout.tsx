import '@radix-ui/themes/styles.css';
import "./globals.css";
import {Providers} from "@/app/providers";
import {Theme} from "@radix-ui/themes";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import {Oswald, Roboto} from "next/font/google";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    display: "swap",
    subsets: ["latin"],
    variable: "--font-roboto"
});

const oswald = Oswald({
    display: "swap",
    subsets: ["latin"],
    variable: "--font-oswald"
})
export default function RootLayout({
       children,
   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${roboto.variable} ${oswald.variable}`} suppressHydrationWarning>
        <body className={"bg-gray-800"}>
        <Providers>
            <Theme>
                <Header/>
                <div className={"bg-white pb-4"}>
                    {children}
                </div>
                <Footer/>
            </Theme>
        </Providers>
        </body>
        <GoogleTagManager gtmId={"GTM-TVZ85WPM"}/>
        </html>
    );
}
