import PageTitle from "@/app/components/PageTitle";
import {Container} from "@radix-ui/themes";
import Link from "next/link";
import {Metadata} from "next";
import StructuredData from "@/app/components/StructuredData";
import Breadcrumbs, {BreadcrumbType} from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "IT Consulting Services by Waypoint3 - Expert IT Solutions",
    description: "Explore Waypoint3's expert IT consulting services. From infrastructure design to cybersecurity, our team delivers tailored solutions to optimise your technology strategy. Partner with us for reliable IT expertise."
}

export default function CloudComputingServicesPage() {
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
            text: "Cloud Computing Services",
            href: "/services/cloud-computing-services",
        }
    ];
    return (
        <main>
            <PageTitle>
                <Container>
                    <h1>Unlock the Power of Cloud Computing</h1>
                </Container>
            </PageTitle>
            <Container className={"font-sans"}>
                <Breadcrumbs links={breadcrumbs}/>
                <p className={"my-3"}>Welcome to Waypoint3, your premier destination for cutting-edge cloud computing services. Harness the full potential of cloud technology to drive innovation, efficiency, and growth for your business. With Waypoint3 as your trusted partner, you can navigate the complexities of cloud computing with confidence.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Why Choose Waypoint3 for Cloud Computing Services?</h2>

                <ul className={"list-disc list-inside my-3"}>
                    <li><strong>Expertise:</strong> Our team at Waypoint3 boasts years of experience and expertise in cloud computing technologies, ensuring that you receive top-notch solutions tailored to your business needs.</li>
                    <li><strong>Customised Solutions:</strong> We understand that every business is unique. That&apos;s why we offer customised cloud computing solutions designed to meet your specific requirements and objectives.</li>
                    <li><strong>Scalability and Flexibility:</strong> With cloud computing, scalability and flexibility are at your fingertips. Our solutions enable you to scale resources up or down based on demand, providing unmatched flexibility to support your business growth.</li>
                    <li><strong>Security and Compliance:</strong> Security is paramount in the cloud. At Waypoint3, we implement robust security measures and ensure compliance with industry regulations, giving you peace of mind that your data is safe and secure.</li>
                    <li><strong>Cost Efficiency:</strong> Cloud computing offers cost-effective solutions by eliminating the need for expensive hardware and infrastructure. With Waypoint3&apos;s cloud services, you can reduce IT costs while maximising performance and productivity.</li>
                </ul>

                <h2 className={"mt-4 text-2xl font-display"}>Partner with Waypoint3 Today</h2>

                <p className={"my-3"}>Ready to take your business to new heights with cloud computing? Partner with Waypoint3 and experience the transformative power of the cloud. Contact us today to learn more about our cloud computing services and how we can help your business thrive.</p>
                <div className={"text-center my-5"}>
                    <Link href={"/contact"} className={"bg-green-600 text-white px-3 py-2 rounded-xl font-semibold text-lg"}>Contact us today</Link>
                </div>
            </Container>
            <StructuredData json={jsonLd} />
        </main>
    )
}