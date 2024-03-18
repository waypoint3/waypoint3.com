"use client";

import { FaqItem } from "@/lib/interfaces/Faqs";

function Faq({faq}: {faq: FaqItem}) {
    return (
        <div className={"text-sm font-sans"}>
            <h3 className={"font-semibold mb-1"}>{faq.question}</h3>
            <p className={"leading-5"} dangerouslySetInnerHTML={{__html: faq.answer}}></p>
        </div>
    )
}

export default function Faqs({faqs}: {faqs: FaqItem[]}) {
    return (
        <div className={"text-center"}>
            <h2 className={"font-sans text-xl mb-3"}>Frequently Asked Questions</h2>
            <div className={"flex gap-4 flex-col"}>
                {faqs.map(faq => (
                    <Faq key={faq.question} faq={faq}/>
                ))}
            </div>
        </div>
    )
}