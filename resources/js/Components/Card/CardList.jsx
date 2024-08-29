import { CardListItem } from "./CardListItem"

/**
 * @typedef {object} CardListProps
 * @property {import("@/models/card").Card[]} data
 */

/** @param {CardListProps} props */
function CardList({ data }) {
    return (
        <section className="grid md:grid-cols-2 xl:grid-cols-3">
            {data.map((item) => (
                <CardListItem key={item.id} item={item} />
            ))}
        </section>
    )
}

export { CardList }