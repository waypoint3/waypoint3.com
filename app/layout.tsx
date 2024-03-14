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
    const jsonLd =
        {
            "@context": "https://schema.org/",
            "@type": "Organization",
            name: "Waypoint3",
            legalName: "Waypoint3 Ltd",
            url: "https://waypoint3.com",
            logo: "https://waypoint3.com/img/waypoint3-black.svg",
            email: "contact@waypoint3.com",
            description: "Software development consultancy firm",
            sameAs: [
                "https://github.com/waypoint3",
                "https://www.linkedin.com/company/waypoint3",
            ]
        }
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
        <SpeedInsights/>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        </body>
        <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID ?? ''}/>
        </html>
    );
}
