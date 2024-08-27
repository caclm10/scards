import { IconPhoto } from "@tabler/icons-react"

import { CardDeleteButton } from "./CardDeleteButton"
import { CardDetail } from "./CardDetail"

/**
 * @typedef {object} CardListItemProps
 * @property {import("@/models/card").Card} item
 */

/** @param {CardListItemProps} props */
function CardListItem({ item }) {
    return (
        <div className="group flex items-start rounded-lg border bg-card p-4 text-card-foreground transition-colors hover:border-primary">
            <div className="mr-4 aspect-square size-[120px] flex-shrink-0 overflow-hidden rounded-md">
                {item.images.length > 0 && (
                    <img
                        src="https://t4.ftcdn.net/jpg/07/23/14/93/360_F_723149335_tA0Fo8zefrHzYlSgXRMYHmBQk7CuWrRd.jpg"
                        alt="Card Image"
                        className="size-full object-cover"
                    />
                )}

                {item.images.length === 0 && (
                    <div className="flex size-full items-center justify-center bg-muted text-muted-foreground">
                        <div className="flex flex-col items-center gap-y-1.5">
                            <IconPhoto stroke={1.5} className="size-5" />
                            <span className="text-xs italic">No Images</span>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex h-full flex-1 flex-col justify-between">
                <div>
                    <h3 className="line-clamp-2 text-lg font-semibold">
                        {item.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                        {item.content}
                    </p>
                </div>
                <div className="mt-2 flex items-center justify-end gap-x-3">
                    <CardDeleteButton id={item.id} title={item.title} />

                    <CardDetail item={item} />
                </div>
            </div>
        </div>
    )
}

export { CardListItem }