import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Thumbs } from "swiper/modules"
import { IconPhoto, IconPlus } from "@tabler/icons-react"

import { Button, ButtonIcon } from "@/Components/UI/Button"
import { CardImageDeleteButton } from "./CardImageDeleteButton"

/**
 * @typedef {Object} CardDetailImagesProps
 * @property {import("@/models/card").CardImage[]} data
 * @property {number} cardId
 */

/** @param {CardDetailImagesProps} props */
function CardDetailImages({ data, cardId }) {
    /** @type {ReturnType<typeof useState<import("swiper/types").Swiper | null>>} */
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    const [currentImage, setCurrentImage] = useState(0)

    /** @param {import("swiper/types").Swiper} swiper */
    function handleActiveIndexChange(swiper) {
        setCurrentImage(swiper.activeIndex)
    }

    return (
        <>
            <div className="mb-4">
                {data.length === 0 && (
                    <div className="mb-2 flex aspect-video w-full items-center justify-center bg-muted text-muted-foreground">
                        <div className="flex flex-col items-center gap-y-1.5">
                            <IconPhoto stroke={1.5} className="size-6" />
                            <span className="text-xs italic">No Images</span>
                        </div>
                    </div>
                )}
                {data.length > 0 && (
                    <>
                        <div className="mb-2 flex items-center justify-end">
                            <CardImageDeleteButton
                                id={cardId}
                                imageId={data[currentImage].id}
                            />
                        </div>
                        <Swiper
                            className="mb-2"
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Thumbs]}
                            onActiveIndexChange={handleActiveIndexChange}
                        >
                            {data.map((image) => (
                                <SwiperSlide key={image.id}>
                                    <img
                                        src={image.url}
                                        alt="Card Image"
                                        className="aspect-video w-full rounded-md object-cover"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </>
                )}

                <div className="flex items-center gap-x-2">
                    <div>
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-12"
                        >
                            <ButtonIcon
                                icon={IconPlus}
                                className="text-muted-foreground"
                            />
                        </Button>
                    </div>

                    <Swiper
                        slidesPerView="auto"
                        freeMode
                        watchSlidesProgress
                        spaceBetween={8}
                        modules={[FreeMode, Thumbs]}
                        className="swiper-thumbs mx-0"
                        onSwiper={(swiper) => setThumbsSwiper(swiper)}
                    >
                        {data.map((image) => (
                            <SwiperSlide
                                key={image.id}
                                className="aspect-square size-12 overflow-hidden rounded-md"
                            >
                                <img
                                    src={image.url}
                                    alt="Card Image"
                                    className="size-full object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export { CardDetailImages }