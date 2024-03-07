"use client";

import {Container, Flex, Text} from "@radix-ui/themes";
import moment from "moment";
import Logo from "@/app/components/Logo";
import Link from "next/link";

const morePages = [
    {href: "/privacy", text: "Privacy policy"},
    {href: "/terms", text: "Terms and conditions"},
]

export default function Footer() {
    return (
        <Container>
            <div className={"flex p-5 gap-10 text-white text-sm flex-col md:flex-row md:items-center"}>
                <div>
                    <Logo topClassName={"text-xl"} bottomClassName={"text-sm"} />
                </div>
                <div className={"flex-1"}>
                    <ul>
                        {morePages.map(link => (
                            <li key={link.href}><Link href={link.href} className={"hover:text-pink-200"}>{link.text}</Link></li>
                        ))}
                    </ul>
                </div>
                <div>
                    © Waypoint3 Ltd {moment().format('Y')}. All Rights Reserved.
                </div>
            </div>
        </Container>
    )
}