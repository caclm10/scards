import { CardDeleteButton } from "./CardDeleteButton"
import { CardDetail } from "./CardDetail"
import { CardListItemImage } from "./CardListItemImage"

/**
 * @typedef {object} CardListItemProps
 * @property {import("@/models/card").Card} item
 */

/** @param {CardListItemProps} props */
function CardListItem({ item }) {
    return (
        <div className="group flex items-start rounded-lg border bg-card p-4 text-card-foreground transition-colors hover:border-primary">
            <CardListItemImage id={item.id} title={item.title} defaultImages={item.images} />

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