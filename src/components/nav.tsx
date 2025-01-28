"use client";
import { INavItem } from "@/data/data.types";
import { cl, fixWindow } from "@/tools/tools";
import Button from "@/ui/button";
import AppLink from "@/ui/link";
import Text from "@/ui/text";
import Cross from "@/vectors/Cross";
import { useEffect, useState } from "react";
import LoginButton from "./login-button";

interface Props {
    nav: INavItem[];
}

export default function Nav({ nav }: Readonly<Props>) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleMenuClick = () => {
        setIsNavOpen(true);
    };
    const handleCrossClick = () => {
        setIsNavOpen(false);
    };

    useEffect(() => {
        fixWindow(isNavOpen);
    }, [isNavOpen]);

    return (
        <>
            {/* Mobile Nav */}
            <div className="flex w-full md:hidden md:gap-[2.4rem]">
                <Button
                    variant="primary"
                    type="button"
                    onClick={handleMenuClick}
                >
                    <Text variant="small">Меню</Text>
                </Button>
                <div
                    className={cl(
                        [
                            "transition-slide fixed left-0 top-0 w-full rounded-b-[0.8rem] bg-white shadow-lg"
                        ],
                        {
                            "opacity-1 pointer-events-auto translate-y-0":
                                isNavOpen,
                            "pointer-events-none translate-y-[-100%] opacity-0":
                                !isNavOpen
                        }
                    )}
                >
                    <div className="flex flex-col gap-[1.6rem] px-[0.8rem] pb-[3.2rem] pt-[0.4rem]">
                        <Button
                            type="button"
                            className="group h-[4rem] w-[4rem] items-center justify-center self-end"
                            onClick={handleCrossClick}
                        >
                            <Cross />
                        </Button>
                        <nav className="flex flex-col items-center gap-[1.6rem]">
                            {nav.map((el) => (
                                <AppLink
                                    key={el.text}
                                    hrefTo={el.link}
                                    variant="primary"
                                >
                                    <Text
                                        variant="small"
                                        dangerouslySetInnerHTML={{
                                            __html: el.text
                                        }}
                                    />
                                </AppLink>
                            ))}
                            <LoginButton />
                        </nav>
                    </div>
                </div>
            </div>
            {/* Desktop Nav */}
            <div className="hidden md:block">
                <nav className="flex justify-between">
                    <div className="flex md:gap-[2.4rem]">
                        {nav.map((el) => (
                            <AppLink
                                key={el.text}
                                hrefTo={el.link}
                                variant="primary"
                            >
                                <Text
                                    variant="small"
                                    dangerouslySetInnerHTML={{
                                        __html: el.text
                                    }}
                                />
                            </AppLink>
                        ))}
                    </div>
                    <div>
                        <LoginButton />
                    </div>
                </nav>
            </div>
        </>
    );
}
