import {recursiveStripHtml} from "@/lib/utils/string";

export default function StructuredData({json}: {json: any}) {
    return (
        <script
            data-testid={"jsonld"}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(recursiveStripHtml(json)) }}
        />
    )
}
