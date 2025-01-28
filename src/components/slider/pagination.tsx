import { IService } from "@/data/data.types";
import { cl } from "@/tools/tools";
import Button from "@/ui/button";

interface Props {
    activeIndex: number;
    handleBulletClick: (idx: number) => void;
    items: IService[];
}

export default function Pagination({ items, activeIndex, handleBulletClick }: Readonly<Props>) {
    return (
        <div id="pagination-container" className="mb-[2.4rem] flex gap-[0.8rem] md:hidden">
            {items.map((s, idx) => {
                return (
                    <Button
                        type="button"
                        key={s.id}
                        className={cl(
                            ["relative h-[8px] cursor-pointer overflow-hidden rounded-full bg-medium-gray transition-[width] ease-in-out"],
                            {
                                "w-[4rem] delay-[200ms] duration-200":
                                    idx === activeIndex,
                                "w-[0.8rem] delay-[0s] duration-200":
                                    idx !== activeIndex
                            }
                        )}
                        onClick={() => handleBulletClick(idx)}
>
                        <div
                            className={cl(
                                ["absolute h-full rounded-r-full bg-black transition-[width] ease-in-out"],
                                {
                                    "w-[50%] delay-[350ms] duration-150":
                                        idx === activeIndex,
                                    "w-[0%] delay-[0s] duration-100":
                                        idx !== activeIndex
                                }
                            )} />
                    </Button>
                );
            })}
        </div>
    );
}
