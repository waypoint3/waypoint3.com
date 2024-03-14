import '@radix-ui/themes/styles.css';
import "./globals.css";
import {Providers} from "@/app/providers";
import {Theme} from "@radix-ui/themes";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import {Oswald, Roboto} from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
    const jsonLd = [
        {
            "@context": "https://schema.org/",
            "@type": "Organization",
            name: "Waypoint3 Ltd",
            legalName: "Waypoint3 Ltd",
            url: "https://waypoint3.com",
            logo: {
                '@type': 'ImageObject',
                url: "https://waypoint3.com/img/waypoint3-black.svg"
            },
        }
    ];
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
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        </body>
        <GoogleTagManager gtmId={"GTM-TVZ85WPM"}/>
        <SpeedInsights/>
        </html>
    );
}
