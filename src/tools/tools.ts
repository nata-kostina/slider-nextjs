export const cl = (arr: string[], cond_obj?: Record<string, boolean>): string => {
    let result = arr.join(" ");
    if (cond_obj) {
        Object.keys(cond_obj).forEach((k) => {
            if (cond_obj[k]) {
                result += ` ${k}`;
            }
        });
    }
    return result.replace(/\s+/g, " ").trim();
};

let fixWindowTimeout: NodeJS.Timeout | number = 0;

export function fixWindow(type: boolean) {
    const htmlElement = document.documentElement;
    if (type) {
        fixWindowTimeout = setTimeout(() => {
            htmlElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            document.body.style.touchAction = "none";
            document.body.style.pointerEvents = "none";
        }, 20);
    } else {
        htmlElement.style.height = "";
        document.body.style.height = "";
        htmlElement.style.overflow = "";
        document.body.style.overflow = "";
        document.body.style.touchAction = "";
        document.body.style.pointerEvents = "";
        clearTimeout(fixWindowTimeout);
    }
}
