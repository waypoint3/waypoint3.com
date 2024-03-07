import PageTitle from "@/app/components/PageTitle";
import {Container} from "@radix-ui/themes";
import ContactForm from "@/app/contact/components/ContactForm";

export default function Page() {
    return (
        <main>
            <PageTitle>
                <Container>
                    <h1>Get in touch</h1>
                </Container>
            </PageTitle>
            <Container>
                <ContactForm/>
            </Container>
        </main>
    )
}