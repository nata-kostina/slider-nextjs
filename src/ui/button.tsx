import { cl } from "@/tools/tools";
import Image from "next/image";

type Variant = "primary" | "default";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string;
    alt?: string;
    variant?: Variant;
}

const styles: Record<Variant, string> = {
    primary: "bg-black text-white hover:text-primary transition-colors duration-100 rounded-[0.4rem] py-[0.4rem] px-[0.8rem]",
    default: ""
};

export default function Button({
    icon,
    alt,
    className,
    children,
    variant,
    ...props
}: Readonly<Props>) {
    const twClasses = styles[variant ?? "default"];
    return (
        <button
            className={cl([`flex shrink-0 items-center focus:outline-none ${twClasses}`, className ?? ""])}
            {...props}
        >
            {children}
            {icon && (
                <Image
                    src={icon}
                    width={30}
                    height={28}
                    alt={alt ?? ""}
                    className="ml-[1.6rem]"
                />
            )}
        </button>
    );
}
