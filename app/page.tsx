import PageTitle from "@/app/components/PageTitle";
import {Container} from "@radix-ui/themes";
import {Metadata} from "next";

const metadata: Metadata = {
    title: "Waypoint3 - Software development consultancy",
    description: "Software development consultancy services to empower your business"
}
export default function Home() {
  return (
    <main>
      <PageTitle>
        <Container>
            <h1>Revolutionise Your Tech</h1>
            <h2 className={"text-2xl"}>Premier Software Development Consultancy</h2>
        </Container>
      </PageTitle>
    </main>
  );
}
