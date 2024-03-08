import '@radix-ui/themes/styles.css';
import "./globals.css";
import {Providers} from "@/app/providers";
import {Theme} from "@radix-ui/themes";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
export default function RootLayout({
       children,
   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
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
