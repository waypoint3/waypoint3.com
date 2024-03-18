import PageTitle from "@/app/components/PageTitle";
import {Container} from "@radix-ui/themes";
import Link from "next/link";
import {Metadata} from "next";
import StructuredData from "@/app/components/StructuredData";
import Breadcrumbs, {BreadcrumbType} from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "Legacy System Modernisation Services by Waypoint3 - Upgrade Your Technology",
    description: "Explore Waypoint3's legacy system modernisation services. Transform outdated systems into efficient, scalable solutions with our expert guidance. Partner with us to upgrade your technology and stay ahead of the competition."
}

export default function LegacySystemModernisationPage() {
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
            text: "Legacy System Modernisation",
            href: "/services/legacy-system-modernisation",
        }
    ];
    return (
        <main>
            <PageTitle>
                <Container>
                    <h1>Upgrade Your Business with our Legacy System Modernisation Services</h1>
                </Container>
            </PageTitle>
            <Container className={"font-sans"}>
                <Breadcrumbs links={breadcrumbs}/>
                <p className={"my-3"}>Welcome to Waypoint3, your trusted partner for modernising legacy systems and revitalising your business operations. With our expert legacy system modernisation services, we empower businesses to unlock the full potential of their outdated technology infrastructure.</p>
                <h2 className={"mt-4 text-2xl font-display"}>The Waypoint3 Advantage</h2>
                <ul className={"list-disc list-inside my-3"}>
                    <li><strong>Expertise:</strong> With years of experience in the industry, our team at Waypoint3 possesses the knowledge and skills to modernise legacy systems across various platforms and technologies.</li>
                    <li><strong>Tailored Solutions:</strong> We understand that each business has unique requirements. That&apos;s why our modernisation solutions are customised to fit your specific needs and objectives.</li>
                    <li><strong>Seamless Integration:</strong> Our modernisation process ensures seamless integration of new technologies with your existing systems, minimising disruptions to your business operations.</li>
                    <li><strong>Improved Efficiency:</strong> By modernising your legacy systems, we help streamline processes, enhance productivity, and drive efficiency, ultimately leading to cost savings and increased competitiveness.</li>
                    <li><strong>Future-Proofing:</strong> Our modernisation solutions are designed to future-proof your technology infrastructure, ensuring scalability and adaptability to meet the evolving demands of your business.</li>
                </ul>
                <h2 className={"mt-4 text-2xl font-display"}>Partner with Waypoint3 Today</h2>
                <p className={"my-3"}>Ready to revitalise your legacy systems and propel your business into the future? Partner with Waypoint3 and experience the transformation firsthand. Contact us today to learn more about our legacy system modernisation services and how we can help your business thrive.</p>
                <div className={"text-center my-5"}>
                    <Link href={"/contact"} className={"bg-green-600 text-white px-3 py-2 rounded-xl font-semibold text-lg"}>Contact us today</Link>
                </div>
            </Container>
            <StructuredData json={jsonLd} />
        </main>
    )
}