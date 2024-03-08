import PageTitle from "@/app/components/PageTitle";
import {Container} from "@radix-ui/themes";
import {Metadata} from "next";
import Waypoint3 from "@/app/components/Waypoint3";
import {FaChartBar, FaCloud, FaCode, FaServer} from "react-icons/fa";
import {FaPeopleGroup} from "react-icons/fa6";
import {MdConstruction, MdContactSupport, MdElderly, MdHandshake, MdHelp, MdOutlineSupport} from "react-icons/md";
import Link from "next/link";

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
        icon: <FaChartBar className={"w-20 h-20"}/>,
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
]

export default function Page() {
    return (
        <main>
            <PageTitle>
                <Container>
                    <h1>Our Services</h1>
                    <p className={"text-2xl font-normal"}>How <Waypoint3/> can help empower your business</p>
                </Container>
            </PageTitle>
            <Container>
                <div className={"grid md:grid-cols-4 gap-10 my-10 px-3 md:px-0"}>
                    {services.map(service => (
                        <div key={service.title} className={"text-center flex flex-col gap-1 items-center"}>
                            {service.icon}
                            <h2 className={"font-display text-xl"}>{service.title}</h2>
                            <p className={"text-sm"}>{service.text}</p>
                        </div>
                    ))}
                </div>
                <div className={"text-center my-5"}>
                    <Link href={"/contact"} className={"bg-green-500 text-white px-3 py-2 rounded-xl font-semibold text-lg"}>Contact us today</Link>
                </div>
            </Container>
        </main>
    )
}