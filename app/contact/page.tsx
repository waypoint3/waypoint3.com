import PageTitle from "@/app/components/PageTitle";
import {Container} from "@radix-ui/themes";
import ContactForm from "@/app/contact/components/ContactForm";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Get in touch | waypoint3 - Software development consultancy",
    description: "Get in touch with waypoint3, ask us about our software development consultancy services"
}
export default function Page() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: metadata.title,
        description: metadata.description,
    };
    return (
        <main>
            <PageTitle>
                <Container>
                    <h1>Get in touch</h1>
                </Container>
            </PageTitle>
            <Container className={"p-3"}>
                <ContactForm/>
            </Container>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    )
}