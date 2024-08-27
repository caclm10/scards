import { AppLayout } from "@/Layouts/AppLayout";
import { CardList } from "@/Components/Card/CardList";
import { NewCardButton } from "@/Components/Card/NewCardButton";


/**
 * 
 * @param {Object} props
 * @param {import("@/models/card").Card[]} props.cards
 */
function CardsPage({ cards }) {
    return (
        <>
            <div className="flex justify-end">
                <NewCardButton />
            </div>

            <div className="h-6"></div>

            <CardList data={cards} />
        </>
    );
}

/** @param {React.ReactNode} page */
CardsPage.layout = (page) => {
    return <AppLayout title="Cards" children={page} />;
};

export default CardsPage;