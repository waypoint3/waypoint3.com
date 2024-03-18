import PageTitle from "@/app/components/PageTitle";
import {Container} from "@radix-ui/themes";
import {Metadata} from "next";
import StructuredData from "@/app/components/StructuredData";
import Breadcrumbs, {BreadcrumbType} from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "DevOps Services by Waypoint3 - Streamline Your Development Operations",
    description: "Discover Waypoint3's expert DevOps services. Enhance collaboration, automate processes, and accelerate software delivery with our tailored DevOps solutions. Partner with us to revolutionise your development operations."
}

export default function DevOpsPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: metadata.title,
        description: metadata.description,
        image: {
            '@type': 'ImageObject',
            url: "https://waypoint3.com/img/waypoint3-black.svg"
        }
    };
    const breadcrumbs: BreadcrumbType[] = [
        {
            text: "Home",
            href: "/",
        },
        {
            text: "Our Services",
            href: "/services",
        },
        {
            text: "DevOps",
            href: "/services/dev-ops",
        }
    ];
    return (
        <main>
            <PageTitle>
                <Container>
                    <h1>Transform Your Development and Operations with our DevOps Services</h1>
                </Container>
            </PageTitle>
            <Container className={"font-sans"}>
                <Breadcrumbs links={breadcrumbs}/>
                <p className={"my-3"}>Welcome to Waypoint3, your premier destination for DevOps services designed to streamline your software development and operations processes. With our expert team and proven methodologies, we empower businesses to achieve greater efficiency, collaboration, and innovation.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Why Choose Waypoint3 for DevOps Services?</h2>

                <ul className={"list-disc list-inside my-3"}>
                    <li><strong>Expertise:</strong> Our team at Waypoint3 comprises seasoned DevOps professionals with extensive experience in implementing DevOps practices and tools, ensuring successful outcomes for your projects.</li>
                    <li><strong>Customised Solutions:</strong> We understand that every business has unique requirements. That&apos;s why we offer customised DevOps solutions tailored to fit your specific needs and objectives, ensuring maximum efficiency and effectiveness.</li>
                    <li><strong>Continuous Integration and Delivery:</strong> With our DevOps services, we help you implement continuous integration and delivery pipelines, enabling faster and more reliable software releases, reducing time-to-market, and improving overall quality.</li>
                    <li><strong>Infrastructure as Code:</strong> We embrace Infrastructure as Code (IaC) principles to automate the provisioning and management of infrastructure, resulting in greater consistency, scalability, and efficiency.</li>
                    <li><strong>Monitoring and Performance Optimization:</strong> Our DevOps services include comprehensive monitoring and performance optimization strategies, ensuring that your applications and infrastructure perform optimally at all times.</li>
                </ul>

                <h2 className={"mt-4 text-2xl font-display"}>Partner with Waypoint3 Today</h2>

                <p className={"my-3"}>Ready to revolutionise your development and operations with DevOps? Partner with Waypoint3 for comprehensive DevOps solutions tailored to your business needs. Contact us today to learn more about our services and how we can help your business thrive.</p>
            </Container>
            <StructuredData json={jsonLd} />
        </main>
    )
}