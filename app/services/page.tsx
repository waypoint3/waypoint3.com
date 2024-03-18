import PageTitle from "@/app/components/PageTitle";
import {Container} from "@radix-ui/themes";
import {Metadata} from "next";
import Waypoint3 from "@/app/components/Waypoint3";
import {FaCloud, FaCode, FaProjectDiagram, FaServer} from "react-icons/fa";
import {MdConstruction, MdElderly, MdHandshake, MdOutlineSupport} from "react-icons/md";
import Link from "next/link";
import {FaqItem} from "@/lib/interfaces/Faqs";
import Faqs from "../components/Faqs";
import styles from "./page.module.css";
import StructuredData from "@/app/components/StructuredData";
import Breadcrumbs, {BreadcrumbType} from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "Our services | waypoint3 - Software development consultancy in Leeds",
    description: "Find out how waypoint3 can help empower your business with our software development consultancy " +
        "services"
}

export const services = [
    {
        icon: <FaCode className={"w-20 h-20"}/>,
        title: "Software Development",
        href: "software-development",
        text: "Build your vision with our skilled software developers"
    },
    {
        icon: <MdConstruction className={"w-20 h-20"}/>,
        title: "Software Architecture",
        href: "software-architecture",
        text: "Providing expertise in designing scalable, efficient, and secure software architectures to support business goals",
    },
    {
        icon: <MdHandshake className={"w-20 h-20"}/>,
        title: "Consultancy",
        href: "consultancy",
        text: "Advising clients on the selection of appropriate technologies, frameworks, and tools to achieve their objectives effectively"
    },
    {
        icon: <MdElderly className={"w-20 h-20"}/>,
        title: "Legacy System Modernisation",
        href: "legacy-system-modernisation",
        text: "Upgrading and modernising outdated software systems to improve functionality, enhance user experience, and align with current business needs",
    },
    {
        icon: <FaCloud className={"w-20 h-20"}/>,
        title: "Cloud Computing Services",
        href: "cloud-computing-services",
        text: "Assisting clients in leveraging cloud computing platforms to optimize infrastructure, improve scalability, and reduce operational costs",
    },
    {
        icon: <FaProjectDiagram className={"w-20 h-20"}/>,
        title: "Project Management",
        href: "project-management",
        text: "Overseeing software development projects from inception to completion, ensuring timely delivery and adherence to quality standards"
    },
    {
        icon: <FaServer className={"w-20 h-20"}/>,
        title: "DevOps",
        href: "dev-ops",
        text: "Implementing DevOps practices and tools to automate and streamline software development, testing, deployment, and operations processes",
    },
    {
        icon: <MdOutlineSupport className={"w-20 h-20"}/>,
        title: "Technical Support and Maintenance",
        href: "technical-support-maintenance",
        text: "Offering ongoing technical support and maintenance services to ensure the continued performance and stability of software applications",
    }
];

const faqs: FaqItem[] = [
    {
        question: "What are cloud computing services?",
        answer: "<a href='/services/cloud-computing-services'>Cloud computing services</a> refer to the delivery of computing resources—such as servers, storage," +
            " databases, networking, software, and analytics—over the internet (\"the cloud\"). Rather than owning" +
            " and maintaining physical infrastructure or servers, users can access these resources on-demand from" +
            " cloud service providers, paying only for what they use."
    },
    {
        question: "What is DevOps?",
        answer: "<a href='/services/dev-ops'>DevOps</a> is a software development methodology and cultural movement that emphasises collaboration," +
            " communication, integration, and automation between software development (Dev) and IT operations (Ops)" +
            " teams. "
    },
    {
        question: "What is a software architect?",
        answer: "A <a href='/services/software-architecture'>software architect</a> is a senior-level role within a software development team responsible for" +
            " designing and overseeing the architecture of software systems. The software architect plays a crucial" +
            " role in defining the structure, components, modules, interfaces, and other architectural aspects of a" +
            " software solution to ensure it meets the desired functional and non-functional requirements while" +
            " aligning with the organisation's strategic objectives."
    }
];

const introText = "Welcome to Waypoint3, a distinguished software consultancy firm dedicated to guiding" +
    " businesses through the intricacies of digital transformation. At Waypoint3, we pride ourselves on offering a" +
    " comprehensive suite of services tailored to meet the diverse needs of our clients. Our team of seasoned experts" +
    " specializes in <a href=\"/services/software-development\">custom software development</a>, <a href='/services/consulting'>IT consulting</a>, <a href='/services/project-management'>project management</a>, and digital strategy. With a" +
    " relentless focus on innovation and excellence, we strive to empower organizations to harness the full potential" +
    " of technology to drive growth and achieve their business objectives.\n" +
    "\n" +
    "In today's fast-paced digital landscape, businesses face unprecedented challenges and opportunities. At" +
    " Waypoint3, we understand the importance of staying ahead of the curve and leveraging emerging technologies to" +
    " gain a competitive edge. Whether you're a startup looking to build a disruptive product or an enterprise" +
    " seeking to optimize your operations, our team has the expertise and experience to deliver solutions that align" +
    " with your vision and objectives.\n" +
    "\n" +
    "Our approach is rooted in collaboration and partnership. We believe in working closely with our clients to gain" +
    " a deep understanding of their unique challenges and goals. This allows us to develop tailored strategies and" +
    " solutions that address their specific needs and deliver measurable results. From initial consultation to final" +
    " implementation and beyond, we are committed to providing <a href='/services/technical-support-maintenance'>unparalleled support</a> and guidance every step of the way."

export default function Page() {
    const jsonLd = [{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: metadata.title,
        description: metadata.description,
        text: introText,
        image: {
            '@type': 'ImageObject',
            url: "https://waypoint3.com/img/waypoint3-black.svg"
        }
    }, {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => {
            return {
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.answer
                }
            }
        })
    }, {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'IT consulting',
        'provider': {
            '@type': 'Corporation',
            name: 'Waypoint3 Ltd',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'IT Consultancy Services',
            itemListElement: services.map(service => {
                return {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: service.title
                    }
                }
            })
        }
    }];
    const breadcrumbs: BreadcrumbType[] = [
        {
            text: "Home",
            href: "/",
        },
        {
            text: "Our Services",
            href: "/services",
        },
    ];
    return (
        <main>
            <PageTitle>
                <Container>
                    <h1>Our Services</h1>
                    <p className={"text-2xl font-normal"}>How <Waypoint3/> can help empower your business</p>
                </Container>
            </PageTitle>
            <Container>
                <Breadcrumbs links={breadcrumbs}/>
                <div className={"grid md:grid-cols-4 gap-10 my-10 px-3 md:px-0"}>
                    {services.map(service => (
                        <Link key={service.title} href={`/services/${service.href}`} aria-label={`Go to the ${service.title} services page`} className={"hover:bg-slate-200"}>
                            <div className={"text-center flex flex-col gap-1 p-1 items-center"}>
                                {service.icon}
                                <h2 className={"font-display text-2xl"}>{service.title}</h2>
                                <p className={"text-sm"}>{service.text}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className={"text-center my-5"}>
                    <Link href={"/contact"} className={"bg-green-600 text-white px-3 py-2 rounded-xl font-semibold text-lg"}>Contact us today</Link>
                </div>
                <p className={`text-sm mt-10 leading-6 text-center ${styles.introText}`} dangerouslySetInnerHTML={{__html: introText.replace("\n", "<br /><br />")}}></p>

                <div className={`mt-10 mb-4 ${styles.faqs}`}>
                    <Faqs faqs={faqs}/>
                </div>
            </Container>
            <StructuredData json={jsonLd}/>
        </main>
    )
}