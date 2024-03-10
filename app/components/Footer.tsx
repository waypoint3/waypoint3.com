"use client";

import {Container, Flex, Text} from "@radix-ui/themes";
import moment from "moment";
import Link from "next/link";
import LogoWhite from "@/app/components/LogoWhite";

const morePages = [
    {href: "/privacy", text: "Privacy policy"},
    {href: "/terms", text: "Terms and conditions"},
]

export default function Footer() {
    return (
        <Container>
            <div className={"flex p-5 gap-5 md:gap-10 text-white text-sm flex-col md:flex-row md:items-center"}>
                <div>
                    <LogoWhite className={"w-24"}/>
                </div>
                <div className={"flex-1"}>
                    <ul className={"flex gap-4 md:gap-5"}>
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