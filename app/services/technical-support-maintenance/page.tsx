import PageTitle from "@/app/components/PageTitle";
import {Container} from "@radix-ui/themes";
import {Metadata} from "next";
import StructuredData from "@/app/components/StructuredData";
import Breadcrumbs, {BreadcrumbType} from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "Technical Support and Maintenance Services by Waypoint3 - Reliable IT Solutions",
    description: "Explore Waypoint3's technical support and maintenance services. Our expert team ensures the smooth operation and longevity of your technology infrastructure. Partner with us for reliable IT support and maintenance solutions."
}

export default function TechnicalSupportMaintenancePage() {
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
            text: "Technical Support and Maintenance",
            href: "/services/technical-support-maintenance",
        }
    ];
    return (
        <main>
            <PageTitle>
                <Container>
                    <h1>Reliable Technical Support and Maintenance Services</h1>
                </Container>
            </PageTitle>
            <Container className={"font-sans"}>
                <Breadcrumbs links={breadcrumbs}/>
                <p className={"my-3"}>Welcome to Waypoint3, your trusted partner for comprehensive technical support and maintenance services. With our expert team and proactive approach, we ensure the smooth operation and longevity of your technology infrastructure, allowing you to focus on your core business activities.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Why Choose Waypoint3 for Technical Support and Maintenance?</h2>

                <ul className={"list-disc list-inside my-3"}>
                    <li><strong>Expert Team:</strong> Our team at Waypoint3 consists of skilled professionals with extensive experience in providing technical support and maintenance services across a wide range of technologies and platforms.</li>
                    <li><strong>Proactive Monitoring:</strong> We employ advanced monitoring tools and techniques to detect and address issues before they escalate, ensuring maximum uptime and reliability for your systems.</li>
                    <li><strong>Rapid Response:</strong> In the event of an issue, our responsive support team is available round-the-clock to provide timely assistance and resolve issues swiftly, minimising disruption to your business operations.</li>
                    <li><strong>Customised Solutions:</strong> We understand that every business has unique needs. That&apos;s why we offer tailored support and maintenance solutions designed to fit your specific requirements and budget.</li>
                    <li><strong>Continuous Improvement:</strong> Our commitment to continuous improvement means that we are always looking for ways to enhance the performance and reliability of your systems, ensuring that they remain aligned with your business goals.</li>
                    <li><strong>Comprehensive Services:</strong> From software updates and patch management to troubleshooting and performance tuning, our technical support and maintenance services cover all aspects of your technology infrastructure.</li>
                </ul>

                <h2 className={"mt-4 text-2xl font-display"}>Partner with Waypoint3 Today</h2>

                <p className={"my-3"}>Ready to experience peace of mind with reliable technical support and maintenance services? Partner with Waypoint3 and let us take care of your technology infrastructure while you focus on growing your business. Contact us today to learn more about our services and how we can help.</p>
            </Container>
            <StructuredData json={jsonLd} />
        </main>
    )
}