"use client";

import {Container, Flex, Text} from "@radix-ui/themes";
import moment from "moment";
import Link from "next/link";
import LogoWhite from "@/app/components/LogoWhite";
import {FaBuilding, FaGithub, FaLinkedin, FaPhoneAlt} from "react-icons/fa";

const morePages = [
    {href: "/privacy", text: "Privacy policy"},
    {href: "/terms", text: "Terms and conditions"},
]

export default function Footer() {
    return (
        <Container>
            <div className={"flex p-5 gap-5 md:gap-10 text-white text-sm flex-col md:flex-row md:items-start"}>
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
                <div className={"flex flex-col gap-2 items-end"}>
                    <div className={"flex items-center gap-4"}>
                        <Link href={"https://www.linkedin.com/company/waypoint3"} target={"_blank"} aria-label={"Visit the Waypoint3 LinkedIn page"}>
                            <FaLinkedin className={"w-8 h-8"}/>
                        </Link>
                        <Link href={"https://github.com/waypoint3"} target={"_blank"} aria-label={"Visit the Waypoint3 GitHub page"}>
                            <FaGithub className={"w-8 h-8"}/>
                        </Link>
                    </div>
                    <div>
                        © Waypoint3 Ltd {moment().format('Y')}. All Rights Reserved.
                    </div>
                    <div>
                        Reg No. 14023873 (England)
                    </div>
                </div>
            </div>
        </Container>
    )
}