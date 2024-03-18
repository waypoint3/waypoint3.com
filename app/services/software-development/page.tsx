import PageTitle from "@/app/components/PageTitle";
import {Container} from "@radix-ui/themes";
import Link from "next/link";
import {Metadata} from "next";
import StructuredData from "@/app/components/StructuredData";
import Breadcrumbs, {BreadcrumbType} from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "Software Development Services by Waypoint3 - Tailored Solutions for Your Business",
    description: "Discover Waypoint3's custom software development services. Our expert team creates bespoke software solutions to meet your business needs. Partner with us to build innovative, scalable software that drives your business forward."
}

export default function SoftwareDevelopmentPage() {
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
            text: "Software Development",
            href: "/services/software-development",
        }
    ];
    return (
        <main>
            <PageTitle>
                <Container>
                    <h1>Propel Your Business Forward with Tailored Software Solutions</h1>
                </Container>
            </PageTitle>
            <Container className={"font-sans"}>
                <Breadcrumbs links={breadcrumbs}/>
                <p className={"my-3"}>Are you searching for bespoke software solutions tailored precisely to your business requirements? Look no further than Waypoint3&apos;s custom software development services. Our team specialises in crafting innovative software solutions designed to drive your business forward.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Tailored Solutions for Your Unique Requirements</h2>
                <p className={"my-3"}>At Waypoint3, we understand that every business is unique, with its own set of challenges and objectives. That&apos;s why we don&apos;t believe in off-the-shelf solutions. Our custom software development services are meticulously designed to address your specific needs, ensuring seamless integration with your existing systems and processes.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Expertise Across Industries</h2>
                <p className={"my-3"}>With years of experience behind us, Waypoint3 boasts a team of seasoned professionals proficient in a wide range of industries. Whether you operate in finance, healthcare, e-commerce, or any other sector, we have the expertise to deliver bespoke solutions that deliver tangible results.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Cutting-Edge Technologies</h2>
                <p className={"my-3"}>Stay ahead of the curve with Waypoint3&apos;s commitment to leveraging the latest technologies. From AI and machine learning to IoT, we harness the power of cutting-edge tools to build robust, scalable software solutions that empower your business for the future.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Seamless Integration & Support</h2>
                <p className={"my-3"}>Our services extend beyond deployment. At Waypoint3, we provide comprehensive support throughout the entire lifecycle of your software solution. From seamless integration with your existing infrastructure to ongoing maintenance and updates, we&apos;re with you every step of the way.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Client-Centric Approach</h2>
                <p className={"my-3"}>At the core of our custom software development services lies a client-centric approach. We prioritise clear communication, transparency, and collaboration to ensure that your vision is brought to life exactly as you envisage. Your satisfaction is our primary objective.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Partner with Waypoint3 Today</h2>
                <p className={"my-3"}>Ready to propel your business forward with bespoke software solutions tailored to your needs? Partner with Waypoint3 and unlock the full potential of technology to drive growth, efficiency, and innovation. Get in touch with us today to learn more about our services and how we can help you succeed.</p>
                <div className={"text-center my-5"}>
                    <Link href={"/contact"} className={"bg-green-600 text-white px-3 py-2 rounded-xl font-semibold text-lg"}>Contact us today</Link>
                </div>
            </Container>
            <StructuredData json={jsonLd} />
        </main>
    )
}