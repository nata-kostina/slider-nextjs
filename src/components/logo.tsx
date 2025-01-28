import AppLink from "@/ui/link";
import Text from "@/ui/text";
import Image from "next/image";

export default function Logo() {
    return (
        <AppLink hrefTo="/">
            <span className="flex w-fit items-center">
                <Image
                    src="images/logo-big.svg"
                    width={28}
                    height={28}
                    alt="Logo"
                    loading="eager"
                />
                <Text variant="h1" className="ml-[1.6rem] hidden md:block">
                    STEMPS
                </Text>
            </span>
        </AppLink>
    );
}
