"use client";

import Link from "next/link";
import {NavigationItem, navigationItems} from "@/app/components/Header";
import {usePathname} from "next/navigation";
import {bool} from "prop-types";

interface NavigationMobileProps {
    open?: boolean
    onClick: (item: NavigationItem) => void
}

export default function NavigationMobile({open = false, onClick}: NavigationMobileProps) {
    const pathName = usePathname();
    const isActive = (path: string) => path === pathName;
    return (
        <div className={`bg-gray-700 shadow-lg pb-5 z-20 absolute w-full ${open ? 'block' : 'hidden'}`}>
            <ul>
                {navigationItems.map(item => (
                    <li key={item.href}>
                        <Link href={item.href} onClick={() => onClick(item)} className={`
                            px-3 py-1 block font-display uppercase transition-colors 
                            text-white 
                            relative
                            `}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}