import { cl } from "@/tools/tools";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type Variant = "primary" | "default";

const styles: Record<Variant, string> = {
    primary: "hover:text-primary transition-colors duration-100",
    default: ""
};

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    hrefTo: string | Url;
    variant?: Variant;
}

export default function AppLink({
    hrefTo,
    variant,
    className,
    children,
    ...props
}: Readonly<Props>) {
    const twClasses = styles[variant ?? "default"];

    return (
        <Link
            href={hrefTo}
            className={cl([`block w-fit focus:outline-none ${twClasses}`, className ?? ""])}
            {...props}
        >
            {children}
        </Link>
    );
}
