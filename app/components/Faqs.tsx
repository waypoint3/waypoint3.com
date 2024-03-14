"use client";

import { FaqItem } from "@/lib/interfaces/Faqs";

function Faq({faq}: {faq: FaqItem}) {
    return (
        <div>
            lol
        </div>
    )
}

export default function Faqs({faqs}: {faqs: FaqItem[]}) {
    return (
        <div>
            {faqs.map(faq => (
                <Faq faq={faq}/>
            ))}
        </div>
    )
}