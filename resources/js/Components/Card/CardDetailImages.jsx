import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Thumbs } from "swiper/modules"
import { IconPhoto } from "@tabler/icons-react"

import { CardImageDeleteButton } from "./CardImageDeleteButton"
import { CardAddImageButton } from "./CardAddImageButton"
import { useCardImages } from "@/hooks/use-card"

/**
 * @typedef {Object} CardDetailImagesProps
 * @property {number} cardId
 */

/** @param {CardDetailImagesProps} props */
function CardDetailImages({ cardId }) {
    const { images } = useCardImages(cardId)

    /** @type {ReturnType<typeof useState<import("swiper/types").Swiper | null>>} */
    const [swiper, setSwiper] = useState(null)

    /** @type {ReturnType<typeof useState<import("swiper/types").Swiper | null>>} */
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    const [currentImage, setCurrentImage] = useState(0)

    /** @param {import("swiper/types").Swiper} swiper */
    function handleActiveIndexChange(swiper) {
        setCurrentImage(swiper.activeIndex)
    }

    function handleDeleted() {
        if (images && images.length > 1) {
            swiper.slideTo(0, 0)
            swiper.slideTo(currentImage === images.length - 1 ? currentImage - 1 : currentImage)
        } else {
            swiper.slideTo(0)
            setThumbsSwiper(null)
        }
    }

    return (
        <>
            <div className="mb-4">
                {images && images.length === 0 && (
                    <div className="mb-2 flex aspect-video w-full items-center justify-center bg-muted text-muted-foreground">
                        <div className="flex flex-col items-center gap-y-1.5">
                            <IconPhoto stroke={1.5} className="size-6" />
                            <span className="text-xs italic">No Images</span>
                        </div>
                    </div>
                )}

                {images && images.length > 0 && (
                    <>
                        <div className="mb-3 flex items-center justify-end">
                            {images[currentImage] && (
                                <CardImageDeleteButton
                                    id={cardId}
                                    imageId={images[currentImage].id}
                                    onDeleted={handleDeleted}
                                />
                            )}
                        </div>
                        <Swiper
                            className="mb-2"
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Thumbs]}
                            onSwiper={setSwiper}
                            onActiveIndexChange={handleActiveIndexChange}
                        >
                            {images.map((image) => (
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
                        <CardAddImageButton id={cardId} />
                    </div>

                    {images && images.length > 0 && (
                        <Swiper
                            slidesPerView="auto"
                            freeMode
                            watchSlidesProgress
                            spaceBetween={8}
                            modules={[FreeMode, Thumbs]}
                            className="swiper-thumbs mx-0"
                            onSwiper={setThumbsSwiper}
                        >
                            {images.map((image) => (
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
                    )}
                </div>
            </div>
        </>
    )
}

export { CardDetailImages }