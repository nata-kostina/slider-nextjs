import { ElementType, HTMLAttributes } from "react";

type Variant = "h1" | "h2" | "h3" | "body" | "small";

interface Props extends HTMLAttributes<HTMLElement> {
    variant: Variant;
    children?: React.ReactNode;
    as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    body: "p",
    small: "span"
};

const sizes: Record<Variant, string> = {
    h1: "text-[1.6rem] leading-[1.5]",
    h2: "text-[2.6rem] leading-[2.8rem] md:text-[4rem] md:leading-[4.4rem]",
    h3: "text-[2.4rem] leading-[2.8rem] md:text-[3.2rem] md:leading-[3.6rem]",
    body: "text-[1.4rem] leading-[2rem]",
    small: "text-[1.6rem] leading-[2rem] md:text-[1.6rem] md:leading-[2.4rem]"
};

export default function Text({
    variant,
    as,
    children,
    className,
    ...props
}: Readonly<Props>) {
    const sizeClasses = sizes[variant];
    const classes = className ? `${sizeClasses} ${className}` : sizeClasses;
    const Tag = as || tags[variant];

    return (
        <Tag className={classes} {...props}>
            {children}
        </Tag>
    );
}
