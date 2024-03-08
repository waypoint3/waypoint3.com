import {Metadata} from "next";
import Image from "next/image";
import {IoMdStopwatch} from "react-icons/io";
import {BsRocketTakeoff} from "react-icons/bs";
import {Container} from "@radix-ui/themes";
import {FaChartLine} from "react-icons/fa";

export const metadata: Metadata = {
    title: "waypoint3 - Software development consultancy",
    description: "Software development consultancy services to empower your business"
}

export default function Home() {
  return (
    <main>
        <div className={"bg-cover md:h-80 h-64 bg-center relative overflow-hidden bg-black flex items-center justify-center"}>
            <h1 className={"relative z-10 text-center text-white font-display text-5xl md:text-6xl"}>Charting the Course to Digital <span className={"text-green-600"}>Success</span></h1>
            <Image src={"/img/compass-5137269_1280.jpg"} alt={""} width={1280} height={853} className={"absolute w-full z-0 opacity-50 object-fill"} />
        </div>
        <Container>
        <div className={"flex md:justify-around md:py-10 text-center flex-col gap-10 px-3 mt-10 md:flex-row md:mt-0"}>
            <div className={"flex flex-col items-center gap-5"}>
                <BsRocketTakeoff className={"w-32 h-32"}/>
                <h2 className={"text-3xl font-semibold"}>Innovative</h2>
                <p>Pioneering cutting-edge solutions, driving innovation in software development</p>
            </div>
            <div className={"flex flex-col items-center gap-5"}>
                <FaChartLine className={"w-32 h-32"}/>
                <h2 className={"text-3xl font-semibold"}>Scalable</h2>
                <p>Solutions designed to grow with your business, ensuring scalability and future-proofing</p>
            </div>
            <div className={"flex flex-col items-center gap-5"}>
                <IoMdStopwatch className={"w-32 h-32"}/>
                <h2 className={"text-3xl font-semibold"}>Efficiency</h2>
                <p>Optimising processes to deliver efficient, streamlined software development solutions</p>
            </div>
        </div>
        </Container>
    </main>
  );
}
