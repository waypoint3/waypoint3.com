"use client";

import Logo from "@/app/components/Logo";
import {Container, Flex} from "@radix-ui/themes";
import Link from "next/link";
import NavigationDesktop from "@/app/components/Header/NavigationDesktop";
import NavigationMobile from "@/app/components/Header/NavigationMobile";
import {useState} from "react";

export const navigationItems = [
    {href: "/services", title: "Our Services"},
    {href: "/contact", title: "Get In Touch"},
];

export default function Header() {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className={`${isOpen ? 'from-purple-500 to-pink-600 bg-gradient-to-r' : 'bg-white'}`}>
            <Container>
                <div className={"p-3 md:px-3 md:py-0 relative flex justify-between md:justify-start"}>
                    <Link href={"/"} className={"py-1"}>
                        {isOpen ?
                            <Logo containerClassName={"text-white"}/>
                            :
                            <Logo/>
                        }

                    </Link>
                    <div onClick={() => setOpen(!isOpen)} className={`md:hidden p-2 ${isOpen ? 'text-white' : 'text-pink-600'}`}>
                        {isOpen ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        }
                    </div>
                    <NavigationDesktop/>
                </div>
                <NavigationMobile open={isOpen}/>
            </Container>
        </div>
    )
}
