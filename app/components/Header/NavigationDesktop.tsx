"use client";

import Link from "next/link";
import {navigationItems} from "@/app/components/Header";
import {usePathname} from "next/navigation";

export default function NavigationDesktop() {
    const pathName = usePathname();
    const isActive = (path: string) => path === pathName;
    return (
        <nav className={"ml-5 hidden md:block"}>
            <ul className={"flex"}>
                {navigationItems.map(item => (
                    <li key={item.href}>
                        <Link href={item.href} className={`
                                    py-5 px-3 block font-display uppercase font-semibold transition-colors 
                                    text-sm hover:bg-purple-500
                                    hover:text-white
                                    relative
                                    ${isActive(item.href) ? 'bg-purple-500 hover:bg-pink-500 text-white' : ''}
                                    `}>
                            {item.title}
                            {isActive(item.href) ? <span className={"absolute bg-purple-500 rotate-45 -bottom-2 left-1/2 -ml-1 h-4 w-4"}></span> : ''}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}