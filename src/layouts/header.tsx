import Container from "@/layouts/container";
import Logo from "@/components/logo";
import Nav from "@/components/nav";
import { nav } from "@/data/data";
import Separator from "@/ui/separator";

export default function Header() {
    return (
        <header className="relative z-[1] flex h-[6rem] flex-col justify-between">
            <Separator />
            <Container>
                <div className="grid h-[2.8rem] grid-cols-[auto_auto] justify-between md:grid-cols-[25%_1fr]">
                    <Logo />
                    <Nav nav={nav} />
                </div>
            </Container>
            <Separator />
        </header>
    );
}
