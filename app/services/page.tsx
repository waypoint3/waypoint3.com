import PageTitle from "@/app/components/PageTitle";
import {Container} from "@radix-ui/themes";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Our services | waypoint3 - Software development consultancy",
    description: "Find out how waypoint3 can help empower your business with our software development consultancy " +
        "services"
}

export default function Page() {
    return (
        <main>
            <PageTitle>
                <Container>
                    <h1>What can we do for you?</h1>
                </Container>
            </PageTitle>
        </main>
    )
}