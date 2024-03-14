import {Metadata} from "next";
import Image from "next/image";
import {IoMdStopwatch} from "react-icons/io";
import {BsRocketTakeoff} from "react-icons/bs";
import {Container} from "@radix-ui/themes";
import {FaChartLine} from "react-icons/fa";
import PageTitle from "@/app/components/PageTitle";
import Waypoint3 from "@/app/components/Waypoint3";
import {FaqItem} from "@/lib/interfaces/Faqs";
import Faqs from "./components/Faqs";

export const metadata: Metadata = {
    title: "waypoint3 - Software development consultancy in Leeds",
    description: "Empower your business with Waypoint3. Premier software consultancy for tailored solutions in" +
        " development, IT consulting, and digital transformation."
}

const faqs: FaqItem[] = [
    {
        question: "What is a software consultancy company?",
        answer: "A software consultancy company, also known as a software consulting firm or simply a consultancy, is" +
            " a type of business that provides expert advice, guidance, and services related to software development," +
            " implementation, optimization, and management."
    },
    {
        question: "Who are Waypoint3?",
        answer: "Waypoint3 are highly skilled in software development, cloud computing services, legacy modernisation" +
            " and DevOps practices."
    },
    {
        question: "Where are Waypoint3 based?",
        answer: "Waypoint3 are based in Leeds, West Yorkshire, United Kingdom."
    },
]

const introText = "Welcome to Waypoint3, where innovation meets expertise in the realm of software" +
    " consultancy. As a premier firm in the industry, Waypoint3 is dedicated to providing unparalleled solutions" +
    " that drive businesses towards success in today's rapidly evolving digital landscape. With a team of seasoned" +
    " professionals at the helm, we bring a wealth of experience and cutting-edge technology to every project we" +
    " undertake. \n\nAt Waypoint3, we understand that every business is unique, which is why we offer tailored" +
    " services to meet the specific needs and challenges of each client. Whether you're a startup looking to develop" +
    " a groundbreaking app or an established enterprise seeking to optimize your IT infrastructure, our diverse range" +
    " of services ensures that we have the expertise to address your requirements comprehensively."

export default function Home() {
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
        <div className={"bg-cover md:h-80 h-64 bg-center relative overflow-hidden bg-black flex items-center justify-center"}>
            <h1 className={"relative z-10 text-center text-white font-display text-5xl md:text-6xl"}>Charting the Course to Digital <span className={"text-green-600"}>Success</span></h1>
            <Image src={"/img/compass-5137269_1280.jpg"} priority={true} loading={"eager"} alt={"Image of a compass"} width={1280} height={853} className={"absolute w-full z-0 opacity-50 object-fill"} />
        </div>
        <Container>
        <div className={"flex md:justify-around md:py-10 text-center flex-col gap-10 px-3 mt-10 md:flex-row md:mt-0"}>
            <div className={"flex flex-col items-center gap-5"}>
                <BsRocketTakeoff className={"w-24 h-24"}/>
                <h2 className={"text-2xl font-semibold"}>Innovative</h2>
                <p>Pioneering cutting-edge solutions, driving innovation in software development</p>
            </div>
            <div className={"flex flex-col items-center gap-5"}>
                <FaChartLine className={"w-24 h-24"}/>
                <h2 className={"text-2xl font-semibold"}>Scalable</h2>
                <p>Solutions designed to grow with your business, ensuring scalability and future-proofing</p>
            </div>
            <div className={"flex flex-col items-center gap-5"}>
                <IoMdStopwatch className={"w-24 h-24"}/>
                <h2 className={"text-2xl font-semibold"}>Efficient</h2>
                <p>Optimising processes to deliver efficient, streamlined software development solutions</p>
            </div>
        </div>
        </Container>
        <PageTitle className={"my-5"}>
            <Container>
                <h3 className={"font-normal font-sans"}>
                    Empowering Your Journey to Success: <Waypoint3/>, Your Trusted Partner in Innovative, Adaptive, and Collaborative Software Solutions
                </h3>
            </Container>
        </PageTitle>
        <Container>
            <p className={"text-sm leading-6 text-center"} dangerouslySetInnerHTML={{__html: introText.replace("\n", "<br /><br />")}}></p>
            <div className="my-5">
                <Faqs faqs={faqs}/>
            </div>
        </Container>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    </main>
  );
}
