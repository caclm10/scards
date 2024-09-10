import { useEffect, useState } from "react"
import { Controller, FreeMode, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { DialogContent } from "@radix-ui/react-dialog";

import { Dialog, DialogDescription, DialogOverlay, DialogPortal, DialogTitle } from "./UI/Dialog";
import { VisuallyHidden } from "./UI/VisuallyHidden";


/**
 * @function SimpleLightbox
 * @param {object} props
 * @param {{id: number, url: string}} props.images
 * @param {import("swiper/types").Swiper} props.control
 * @param {boolean} props.isOpen
 * @param {React.Dispatch<React.SetStateAction<import("swiper/types").Swiper>>} props.onSwiper
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.onOpenChange
 * @return {React.JSX.Element}
 */
function SimpleLightbox({ images, control, isOpen, onSwiper, onOpenChange }) {
    /** @type {ReturnType<typeof useState<import("swiper/types").Swiper>>} */
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    if (!images || images.length === 0) return;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogPortal>
                <DialogOverlay />
                <DialogContent>
                    <VisuallyHidden>
                        <DialogTitle>Lightbox</DialogTitle>
                        <DialogDescription>Simple Lightbox</DialogDescription>
                    </VisuallyHidden>
                    <div className="fixed inset-0 z-50 bg-black/80 flex flex-col">
                        <div className="flex justify-end pr-5 pt-8 lg:pt-5">
                            <button type="button" className="text-white" onClick={() => onOpenChange(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="grow relative flex items-center justify-center">
                            <Swiper
                                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                modules={[FreeMode, Thumbs, Controller]}
                                controller={{ control }}
                                wrapperClass="items-center"
                                onSwiper={onSwiper}
                            >
                                {images.map(image => (
                                    <SwiperSlide key={image.id}>
                                        <img
                                            src={image.url}
                                            alt="beautiful"
                                            className="size-full object-contain max-w-[95%] max-h-[calc(100dvh-5rem-6rem)] mx-auto"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="container">
                            <div className="flex items-center justify-center h-24">
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
                                                alt="lightbox thumb"
                                                className="size-full object-cover"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>

                </DialogContent>
            </DialogPortal>
        </Dialog>
    )
}

export { SimpleLightbox }
