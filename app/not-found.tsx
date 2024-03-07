"use client";

import PageTitle from "@/app/components/PageTitle";
import {Container, Flex, Text} from "@radix-ui/themes";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <PageTitle>
                <Container>
                    <h1>Oops! Page not found 🤕</h1>
                </Container>
            </PageTitle>
            <Container>
                <div className={"p-5 md:w-1/2 mx-auto flex flex-col gap-5"}>
                    <Text>
                        It looks like you were trying to find a page that doesn&apos;t exist.
                    </Text>
                    <Text>
                        <strong>Possible Reasons:</strong>
                        <ul className={"list-disc list-inside"}>
                            <li>The address may have been typed incorrectly;</li>
                            <li>It may be a broken or outdated link.</li>
                        </ul>
                    </Text>
                    <Flex gap={"3"}>
                        <Link href={"/"}>Home</Link>
                        <Link href={"/help"}>Help</Link>
                    </Flex>
                </div>
            </Container>
        </>
    )
}