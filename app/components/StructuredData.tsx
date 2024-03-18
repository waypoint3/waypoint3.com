import { stripHtml } from "string-strip-html";

export default function StructuredData({json}: {json: any}) {
    const recursiveStrip = (obj: any) => {
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                if (Array.isArray(obj[key])) {
                    for (let i=0; i<obj[key].length; i++) {
                        recursiveStrip(obj[key][i]);
                    }
                } else {
                    recursiveStrip(obj[key]);
                }
            } else {
                obj[key] = stripHtml(obj[key]).result;
            }
        }
        return obj;
    }
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(recursiveStrip(json)) }}
        />
    )
}
