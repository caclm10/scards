import { IconLoader2, IconPhoto } from "@tabler/icons-react"

import { useCardImages } from "@/hooks/use-card"

/**
 * 
 * @function CardListItemImage
 * @param {object} props
 * @param {import("@/models/card").Card["id"]} props.id
 * @param {import("@/models/card").Card["title"]} props.title
 * @returns {React.JSX.Element}
 */
function CardListItemImage({ id, title }) {
    const { images, isLoadingImages } = useCardImages(id)

    return (
        <div className="mr-4 aspect-square size-[120px] flex-shrink-0 overflow-hidden rounded-md">
            {images && images.length > 0 && (
                <img
                    src={images[0].url}
                    alt={`${title} ${id} ${images[0].id}`}
                    className="size-full object-cover"
                />
            )}

            {(!images || images.length === 0) && (
                <div className="flex size-full items-center justify-center bg-muted text-muted-foreground">
                    <div className="flex flex-col items-center gap-y-1.5">
                        {isLoadingImages ? <IconLoader2 stroke={1.5} className="size-5 animate-spin" /> : <IconPhoto stroke={1.5} className="size-5" />}
                        <span className="text-xs italic">{isLoadingImages ? 'Loading...' : 'No images'}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export { CardListItemImage }