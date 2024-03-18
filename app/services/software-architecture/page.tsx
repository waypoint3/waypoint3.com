import PageTitle from "@/app/components/PageTitle";
import {Container} from "@radix-ui/themes";
import Link from "next/link";
import {Metadata} from "next";
import StructuredData from "@/app/components/StructuredData";
import Breadcrumbs, {BreadcrumbType} from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "Software Architecture Services by Waypoint3 - Tailored Solutions for Your Business",
    description: "Explore Waypoint3's software architecture services. Our expert team designs custom software architectures to meet your business needs. Partner with us to build robust, scalable solutions that drive innovation and growth."
}

export default function SoftwareArchitecturePage() {
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
            text: "Software Architecture",
            href: "/services/software-architecture",
        }
    ];
    return (
        <main>
            <PageTitle>
                <Container>
                    <h1>Unlock the Potential of Your Digital Infrastructure with our Software Architecture Services</h1>
                </Container>
            </PageTitle>
            <Container className={"font-sans"}>
                <Breadcrumbs links={breadcrumbs}/>
                <p className={"my-3"}>Welcome to Waypoint3, your trusted partner for cutting-edge software architecture solutions. Our bespoke services are tailored to optimise your digital infrastructure, enhancing performance, scalability, and efficiency. Discover how Waypoint3 can elevate your business to new heights with our software architecture expertise.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Tailored Solutions for Your Business</h2>
                <p className={"my-3"}>At Waypoint3, we understand that every business is unique. That&apos;s why we offer custom software architecture services designed to align perfectly with your specific needs and objectives. Our team works closely with you to develop architecture solutions that not only meet your current requirements but also adapt seamlessly to future growth and changes.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Expertise and Innovation</h2>
                <p className={"my-3"}>With years of experience and a passion for innovation, our team at Waypoint3 brings a wealth of expertise to the table. Whether you&apos;re looking to modernise legacy systems, implement cloud-native architectures, or design scalable microservices solutions, we have the knowledge and skills to deliver results that exceed your expectations.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Cutting-Edge Technologies</h2>
                <p className={"my-3"}>Stay ahead of the curve with Waypoint3&apos;s commitment to leveraging the latest technologies in software architecture. From containerisation and orchestration to serverless computing and event-driven architectures, we harness cutting-edge tools to build robust, scalable, and future-proof solutions for your business.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Seamless Integration and Support</h2>
                <p className={"my-3"}>Our services extend beyond just designing software architectures. We provide end-to-end support to ensure seamless integration, deployment, and ongoing maintenance of your systems. With Waypoint3 by your side, you can rest assured that your digital infrastructure is in safe hands, allowing you to focus on what matters most – growing your business.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Client-Centric Approach</h2>
                <p className={"my-3"}>At Waypoint3, we pride ourselves on our client-centric approach to software architecture. Your satisfaction is our top priority, and we work tirelessly to ensure that our solutions not only meet but exceed your expectations. With transparent communication and a collaborative mindset, we strive to build long-lasting partnerships with our clients.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Partner with Waypoint3 Today</h2>
                <p className={"my-3"}>Ready to take your digital infrastructure to the next level? Partner with Waypoint3 and unlock the full potential of your technology stack. Contact us today to learn more about our software architecture services and how we can help your business thrive in the digital age.</p>

                <div className={"text-center my-5"}>
                    <Link href={"/contact"} className={"bg-green-600 text-white px-3 py-2 rounded-xl font-semibold text-lg"}>Contact us today</Link>
                </div>
            </Container>
            <StructuredData json={jsonLd} />
        </main>
    )
}