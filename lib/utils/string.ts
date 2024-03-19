export const stripHtml = (str: any) => {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/ig, '');
}

export const recursiveStripHtml = (obj: any) => {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            if (Array.isArray(obj[key])) {
                for (let i=0; i<obj[key].length; i++) {
                    recursiveStripHtml(obj[key][i]);
                }
            } else {
                recursiveStripHtml(obj[key]);
            }
        } else {
            obj[key] = stripHtml(obj[key]);
        }
    }
    return obj;
}