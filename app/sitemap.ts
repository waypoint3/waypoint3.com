import {MetadataRoute} from "next";

type SitemapPage = {
    url: string
    changeFrequency: "yearly" | "monthly" | "daily"
    priority: number
}

const services: string[] = [
    "cloud-computing-services",
    "consultancy",
    "dev-ops",
    "legacy-system-modernisation",
    "project-management",
    "software-architecture",
    "software-development",
    "technical-support-maintenance",
]

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
    services.forEach((service) => {
        pages.push({
            url: `/services/${service}`,
            changeFrequency: "monthly",
            priority: "0.8",
        } as SitemapPage);
    });
    return pages.map((page) => {
        return {
            url: `https://waypoint3.com${page.url}`,
            changeFrequency: page.changeFrequency,
            priority: page.priority,
            lastModified: new Date(),
        }
    });
}