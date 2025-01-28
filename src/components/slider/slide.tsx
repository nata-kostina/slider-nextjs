import { IService } from "@/data/data.types";
import Text from "@/ui/text";
import Image from "next/image";

interface Props {
    service: IService;
}

export default function Slide({
    service: { image, title, text }
}: Readonly<Props>) {
    return (
        <div
            className={
                // eslint-disable-next-line max-len
                "mr-[1.6rem] grid aspect-[1.7] w-full max-w-[35.8rem] grid-cols-[auto_1fr] content-between items-center gap-x-[2.4rem] rounded-[0.8rem] bg-gray p-[1.6rem] md:aspect-auto md:h-[25.6rem] md:w-[41.2rem] md:max-w-[41.2rem] md:grid-cols-[1fr] md:p-[2.4rem]"
            }
        >
            <Image
                src={image}
                width={60}
                height={60}
                alt="Услуга"
                loading="eager"
                className="block h-[6rem] w-[6rem] md:h-[8rem] md:w-[8rem]"
            />
            <Text variant="h3" dangerouslySetInnerHTML={{ __html: title }} />
            <Text
                variant="body"
                dangerouslySetInnerHTML={{ __html: text }}
                className="col-span-2 w-[83%] md:hidden"
            />
        </div>
    );
}
