import Separator from "@/ui/separator";
import Text from "@/ui/text";
import Container from "./container";

export default function Section({
    id,
    title,
    children
}: Readonly<{
    id: string;
    title: string;
    children: React.ReactNode;
}>) {
    return (
        <section>
            <Container>
                <div className="flex flex-col">
                    <div className="grid grid-cols-1 md:auto-rows-min md:grid-cols-[25%,1fr]">
                        <div className="row-[1] py-[0.8rem] md:py-[1.2rem]">
                            <Text
                                variant="h2"
                                as="span"
                                className="text-primary"
                            >
                                {id}
                            </Text>
                        </div>
                        <div className="row-[3] pt-[0.8rem] md:row-[1] md:py-[1.2rem]">
                            <Text
                                variant="h2"
                                dangerouslySetInnerHTML={{ __html: title }}
                                className="text-primary"
                            />
                        </div>
                        <div className="row-[2] md:col-span-2">
                            <Separator />
                        </div>
                    </div>
                    <div className="pt-[4rem] md:pt-[4rem]">{children}</div>
                </div>
            </Container>
        </section>
    );
}
