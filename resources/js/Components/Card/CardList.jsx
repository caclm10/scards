import { CardListItem } from "./CardListItem"

/**
 * @typedef {object} CardListProps
 * @property {import("@/models/card").Card[]} data
 */

/** @param {CardListProps} props */
function CardList({ data }) {
    return (
        <section className="grid gap-6 px-4 py-8 md:grid-cols-2 lg:px-6 xl:grid-cols-3">
            {data.map((item) => (
                <CardListItem key={item.id} item={item} />
            ))}
        </section>
    )
}

export { CardList }