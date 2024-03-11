import {MetadataRoute} from "next";

type SitemapPage = {
    url: string
    changeFrequency: "yearly" | "monthly" | "daily"
    priority: number
}

export default function sitemap(): MetadataRoute.Sitemap {
    const pages: SitemapPage[] = [
        {
            url: "/",
            changeFrequency: "monthly",
            priority: 1
        },
        {
            url: "/services",
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: "/contact",
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: "/terms",
            changeFrequency: "monthly",
            priority: 0.5
        },
        {
            url: "/privacy",
            changeFrequency: "monthly",
            priority: 0.5
        }
    ];
    return pages.map((page) => {
        return {
            url: `https://waypoint3.com${page.url}`,
            changeFrequency: page.changeFrequency,
            priority: page.priority,
            lastModified: new Date(),
        }
    });
}