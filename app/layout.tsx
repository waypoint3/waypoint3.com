import '@radix-ui/themes/styles.css';
import "./globals.css";
import {Providers} from "@/app/providers";
import {Text, Theme} from "@radix-ui/themes";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
export default function RootLayout({
       children,
   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={"bg-purple-500 from-purple-500 to-pink-600 bg-gradient-to-r"}>
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
        </html>
    );
}
