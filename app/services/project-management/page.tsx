import PageTitle from "@/app/components/PageTitle";
import {Container} from "@radix-ui/themes";
import {Metadata} from "next";
import StructuredData from "@/app/components/StructuredData";
import Breadcrumbs, {BreadcrumbType} from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "Software Project Management Services by Waypoint3 - Expert Project Management",
    description: "Discover Waypoint3's software project management services. From inception to delivery, our expert team ensures successful project execution. Partner with us for tailored project management solutions to achieve your business objectives."
}

export default function ProjectManagementPage() {
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
            text: "Project Management",
            href: "/services/project-management",
        }
    ];
    return (
        <main>
            <PageTitle>
                <Container>
                    <h1>Efficient Software Project Management Solutions</h1>
                </Container>
            </PageTitle>
            <Container className={"font-sans"}>
                <Breadcrumbs links={breadcrumbs}/>
                <p className={"my-3"}>Welcome to Waypoint3, your trusted partner for efficient and effective software project management services. Our expert team is dedicated to ensuring the success of your software projects, from inception to delivery. With Waypoint3 at the helm, you can rest assured that your projects are in capable hands.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Why Choose Waypoint3 for Software Project Management?</h2>

                <ul className={"list-disc list-inside my-3"}>
                    <li><strong>Expertise:</strong> With years of experience in software project management, our team at Waypoint3 brings unparalleled expertise to the table, ensuring that your projects are delivered on time and within budget.</li>
                    <li><strong>Customised Solutions:</strong> We understand that every project is unique. That&apos;s why we offer customised project management solutions tailored to meet your specific requirements and objectives.</li>
                    <li><strong>Transparent Communication:</strong> Communication is key to successful project management. At Waypoint3, we maintain open and transparent communication channels, keeping you informed every step of the way.</li>
                    <li><strong>Risk Management:</strong> Mitigating risks is essential for project success. Our team identifies potential risks early on and develops strategies to address them, ensuring smooth project execution and delivery.</li>
                    <li><strong>Quality Assurance:</strong> Quality is our top priority. We implement robust quality assurance processes to ensure that deliverables meet the highest standards of excellence, resulting in customer satisfaction and project success.</li>
                </ul>

                <h2 className={"mt-4 text-2xl font-display"}>Partner with Waypoint3 Today</h2>

                <p className={"my-3"}>Ready to streamline your software projects and achieve success? Partner with Waypoint3 for comprehensive software project management solutions. Contact us today to learn more about our services and how we can help your projects thrive.</p>
            </Container>
            <StructuredData json={jsonLd} />
        </main>
    )
}