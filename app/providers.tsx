"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import {AppCacheProvider} from "@mui/material-nextjs/v13-pagesRouter";
import {ThemeProvider} from "@mui/material/styles";
import theme from "@/app/theme";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AppCacheProvider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppCacheProvider>
    );
}