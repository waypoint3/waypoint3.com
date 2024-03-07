import PageTitle from "@/app/components/PageTitle";
import {Container} from "@radix-ui/themes";

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