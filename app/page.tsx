import {Metadata} from "next";
import Image from "next/image";

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
    </main>
  );
}
