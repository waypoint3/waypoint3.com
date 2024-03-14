import PageTitle from "@/app/components/PageTitle";
import {Container} from "@radix-ui/themes";
import {Metadata} from "next";
import Waypoint3 from "@/app/components/Waypoint3";
import {FaCloud, FaCode, FaProjectDiagram, FaServer} from "react-icons/fa";
import {MdConstruction, MdElderly, MdHandshake, MdOutlineSupport} from "react-icons/md";
import Link from "next/link";
import {FaqItem} from "@/lib/interfaces/Faqs";
import Faqs from "../components/Faqs";

export const metadata: Metadata = {
    title: "Our services | waypoint3 - Software development consultancy",
    description: "Find out how waypoint3 can help empower your business with our software development consultancy " +
        "services"
}

const services = [
    {
        icon: <FaCode className={"w-20 h-20"}/>,
        title: "Software Development",
        text: "Build your vision with our skilled software developers"
    },
    {
        icon: <MdConstruction className={"w-20 h-20"}/>,
        title: "Software Architecture",
        text: "Providing expertise in designing scalable, efficient, and secure software architectures to support business goals",
    },
    {
        icon: <MdHandshake className={"w-20 h-20"}/>,
        title: "Consultancy",
        text: "Advising clients on the selection of appropriate technologies, frameworks, and tools to achieve their objectives effectively"
    },
    {
        icon: <MdElderly className={"w-20 h-20"}/>,
        title: "Legacy System Modernisation",
        text: "Upgrading and modernising outdated software systems to improve functionality, enhance user experience, and align with current business needs",
    },
    {
        icon: <FaCloud className={"w-20 h-20"}/>,
        title: "Cloud Computing Services",
        text: "Assisting clients in leveraging cloud computing platforms to optimize infrastructure, improve scalability, and reduce operational costs",
    },
    {
        icon: <FaProjectDiagram className={"w-20 h-20"}/>,
        title: "Project Management",
        text: "Overseeing software development projects from inception to completion, ensuring timely delivery and adherence to quality standards"
    },
    {
        icon: <FaServer className={"w-20 h-20"}/>,
        title: "DevOps",
        text: "Implementing DevOps practices and tools to automate and streamline software development, testing, deployment, and operations processes",
    },
    {
        icon: <MdOutlineSupport className={"w-20 h-20"}/>,
        title: "Technical Support and Maintenance",
        text: "Offering ongoing technical support and maintenance services to ensure the continued performance and stability of software applications",
    }
];

const faqs: FaqItem[] = [
    {
        question: "What are cloud computing services?",
        answer: "Cloud computing services refer to the delivery of computing resources—such as servers, storage," +
            " databases, networking, software, and analytics—over the internet (\"the cloud\"). Rather than owning" +
            " and maintaining physical infrastructure or servers, users can access these resources on-demand from" +
            " cloud service providers, paying only for what they use."
    },
    {
        question: "What is DevOps?",
        answer: "DevOps is a software development methodology and cultural movement that emphasises collaboration," +
            " communication, integration, and automation between software development (Dev) and IT operations (Ops)" +
            " teams. "
    },
    {
        question: "What is a software architect?",
        answer: "A software architect is a senior-level role within a software development team responsible for" +
            " designing and overseeing the architecture of software systems. The software architect plays a crucial" +
            " role in defining the structure, components, modules, interfaces, and other architectural aspects of a" +
            " software solution to ensure it meets the desired functional and non-functional requirements while" +
            " aligning with the organisation's strategic objectives."
    }
];

const introText = "Welcome to Waypoint3, your premier destination for top-tier software consultancy services." +
    " At Waypoint3, we specialize in empowering businesses to navigate the complexities of the digital landscape with" +
    " confidence and finesse. Our dedicated team of experts combines cutting-edge technology with strategic insights" +
    " to deliver tailored solutions that propel your organization towards success. Whether you're seeking custom" +
    " software development, IT consulting, or digital transformation guidance, Waypoint3 is your trusted partner" +
    " every step of the way. Discover how our innovative approaches can elevate your business to new heights.";

export default function Page() {
    const jsonLd = [{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: metadata.title,
        description: metadata.description,
        text: introText
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
    }];
    return (
        <main>
            <PageTitle>
                <Container>
                    <h1>Our Services</h1>
                    <p className={"text-2xl font-normal"}>How <Waypoint3/> can help empower your business</p>
                </Container>
            </PageTitle>
            <Container>
                <p className={"text-sm mt-4 leading-6"}>
                    {introText}
                </p>
                <div className={"grid md:grid-cols-4 gap-10 my-10 px-3 md:px-0"}>
                    {services.map(service => (
                        <div key={service.title} className={"text-center flex flex-col gap-1 items-center"}>
                            {service.icon}
                            <h2 className={"font-display text-2xl"}>{service.title}</h2>
                            <p className={"text-sm"}>{service.text}</p>
                        </div>
                    ))}
                </div>
                <div className={"text-center my-5"}>
                    <Link href={"/contact"} className={"bg-green-600 text-white px-3 py-2 rounded-xl font-semibold text-lg"}>Contact us today</Link>
                </div>
                <div className="mt-10 mb-4">
                    <Faqs faqs={faqs}/>
                </div>
            </Container>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    )
}