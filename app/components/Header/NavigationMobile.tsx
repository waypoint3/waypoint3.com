"use client";

import Link from "next/link";
import {navigationItems} from "@/app/components/Header";
import {usePathname} from "next/navigation";
import {bool} from "prop-types";

interface NavigationMobileProps {
    open?: boolean
}

export default function NavigationMobile({open = false}: NavigationMobileProps) {
    const pathName = usePathname();
    const isActive = (path: string) => path === pathName;
    return (
        <div className={`from-purple-500 to-pink-600 bg-gradient-to-r pb-3 absolute w-full ${open ? 'block' : 'hidden'}`}>
            <ul>
                {navigationItems.map(item => (
                    <li key={item.href}>
                        <Link href={item.href} className={`
                                    px-3 py-1 block font-display uppercase transition-colors 
                                    text-white hover:bg-pink-200 text-xl
                                    hover:text-pink-800
                                    relative
                                    ${isActive(item.href) ? 'from-purple-500 to-pink-600 bg-gradient-to-r' : ''}
                                    `}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}