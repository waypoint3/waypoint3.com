"use client";

import Link from "next/link";
import {Fragment} from "react";
import StructuredData from "@/app/components/StructuredData";

export interface BreadcrumbType {
    href: string
    text: string
    ariaLabel?: string
}
export interface BreadcrumbsType {
    links: BreadcrumbType[]
    containerClassName?: string
    separator?: string
    separatorClassName?: string
    ulClassName?: string
    liClassName?: string
    linkClassName?: string
    activeClassName?: string
}

export default function Breadcrumbs({
        links,
        containerClassName = 'font-sans mt-4 mb-2',
        separator = '/',
        separatorClassName = 'font-bold text-sm text-green-600',
        ulClassName = 'flex gap-2 items-center justify-center',
        liClassName = '',
        linkClassName = 'underline',
        activeClassName = ''
    }: BreadcrumbsType) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: links.map((link, index) => {
            if (index === links.length - 1) {
                return {
                    '@type': 'ListItem',
                    position: String(index + 1).toString(),
                    name: link.text
                }
            } else {
                return {
                    '@type': 'ListItem',
                    position: String(index + 1).toString(),
                    name: link.text,
                    item: process.env.SITE_URL + link.href
                }
            }
        })
    };
    return (
        <div className={containerClassName ?? ''}>
            <ul className={ulClassName ?? ''}>
                {links.map((link, index) => (
                    <Fragment key={link.href}>
                        { !!index && (
                            <li className={separatorClassName}>
                                {separator}
                            </li>
                        )}
                        <li className={[liClassName ?? '', index === links.length - 1 ? activeClassName : ''].join(' ')}>
                            {index === links.length - 1 ?
                                <Fragment>
                                    {link.text}
                                </Fragment>
                                :
                                <Link href={link.href} aria-label={link.ariaLabel ?? ''} className={linkClassName}>
                                    {link.text}
                                </Link>
                            }
                        </li>
                    </Fragment>
                ))}
                <li></li>
            </ul>
            <StructuredData json={jsonLd}/>
        </div>
    )
}