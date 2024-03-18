import PageTitle from "@/app/components/PageTitle";
import {Container} from "@radix-ui/themes";
import Link from "next/link";
import {Metadata} from "next";
import StructuredData from "@/app/components/StructuredData";
import Breadcrumbs, {BreadcrumbType} from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "Software Consultancy Services by Waypoint3 - Expert Guidance for Your Projects",
    description: "Discover Waypoint3's software consultancy services. Our expert consultants provide guidance and expertise to ensure the success of your software projects. Partner with us for tailored solutions that drive innovation and growth."
}

export default function ConsultancyPage() {
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
            text: "Consultancy",
            href: "/services/consultancy",
        }
    ];
    return (
        <main>
            <PageTitle>
                <Container>
                    <h1>Empower Your Business with our Comprehensive IT and Software Services</h1>
                </Container>
            </PageTitle>
            <Container className={"font-sans"}>
                <Breadcrumbs links={breadcrumbs}/>
                <p className={"my-3"}>Welcome to Waypoint3, your trusted partner for cutting-edge IT and software solutions. With our expertise and commitment to excellence, we help businesses navigate the complexities of the digital landscape, driving growth and innovation. Explore our range of services tailored to meet your unique needs.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Comprehensive IT Solutions</h2>
                <p className={"my-3"}>At Waypoint3, we understand that a robust IT infrastructure is essential for business success. That&apos;s why we offer a comprehensive suite of IT services designed to streamline operations, enhance security, and improve efficiency. From <strong>network setup and maintenance</strong> to <strong>cybersecurity</strong> and <strong>cloud solutions</strong>, we&apos;ve got you covered.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Bespoke Software Development</h2>
                <p className={"my-3"}>Looking for custom software solutions to address your specific business challenges? Our team of skilled developers at Waypoint3 specialises in creating tailored software applications that align perfectly with your requirements. Whether you need a <strong>web application</strong>, <strong>mobile app</strong>, or <strong>enterprise software</strong>, we have the expertise to bring your vision to life.</p>

                <h2 className={"mt-4 text-2xl font-display"}>IT Consultancy and Support</h2>
                <p className={"my-3"}>Navigating the rapidly evolving IT landscape can be daunting. That&apos;s where our consultancy services come in. At Waypoint3, we provide expert guidance and support to help you make informed decisions about your IT infrastructure. From <strong>strategic planning</strong> to implementation and ongoing support, we&apos;re here to ensure your IT investments deliver maximum value.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Digital Transformation Solutions</h2>
                <p className={"my-3"}>In today&apos;s digital age, staying ahead of the curve is crucial for business success. At Waypoint3, we help businesses embrace digital transformation through innovative solutions that drive efficiency and agility. Whether it&apos;s adopting new technologies, automating processes, or improving customer experiences, we&apos;re here to help you thrive in the digital era.</p>

                <h2 className={"mt-4 text-2xl font-display"}>Partner with Waypoint3 Today</h2>
                <p className={"my-3"}>Ready to unlock the full potential of your IT and software capabilities? Partner with Waypoint3 and experience the difference our expertise can make. Contact us today to learn more about our services and how we can help your business thrive in the digital age.</p>

                <div className={"text-center my-5"}>
                    <Link href={"/contact"} className={"bg-green-600 text-white px-3 py-2 rounded-xl font-semibold text-lg"}>Contact us today</Link>
                </div>
            </Container>
            <StructuredData json={jsonLd} />
        </main>
    )
}