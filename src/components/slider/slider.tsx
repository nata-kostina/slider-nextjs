"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";

import Slide from "./slide";
import { useRef, useState } from "react";
import { IService } from "@/data/data.types";
import Pagination from "./pagination";
import { cl } from "@/tools/tools";

interface Props {
    items: IService[];
}

export default function Slider({ items }: Readonly<Props>) {
    const [loaded, setLoaded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperRef>(null);

    const handleBulletClick = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index);
        }
    };
    return (
        <div className="w-full max-w-[35.8rem] md:max-w-[41.2rem]">
            <div className={cl([], { hidden: !loaded, block: loaded })}>
                <Pagination
                    activeIndex={activeIndex}
                    handleBulletClick={handleBulletClick}
                    items={items}
                />
                <Swiper
                    ref={swiperRef}
                    slidesPerView={"auto"}
                    spaceBetween={16}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    onSwiper={() => setLoaded(true)}
                    style={{ overflow: "visible" }}
                    grabCursor={true}
                >
                    {items.map((service) => (
                        <SwiperSlide key={service.id}>
                            <Slide key={service.id} service={service} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
