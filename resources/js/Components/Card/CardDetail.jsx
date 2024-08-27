import { IconPencil } from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { usePageProps } from "@/hooks/use-page-props";
import { Button, ButtonIcon } from "@/Components/UI/Button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/UI/Sheet";
import { CardDeleteButton } from "./CardDeleteButton";
import { CardDetailImages } from "./CardDetailImages";

/**
 * @typedef {object} CardDetailProps
 * @property {import("@/models/card").Card} item
 */

/** @param {CardDetailProps} props */
function CardDetail({ item }) {
    /** @type {import("@/models/page").PageProps<{new_card_id?: number}>} */
    const { new_card_id } = usePageProps();

    return (
        <Sheet defaultOpen={new_card_id === item.id}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                    Show
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <div className="mb-2 flex items-center gap-x-3">
                        <Button type="button" size="icon-sm" variant="outline">
                            <ButtonIcon icon={IconPencil} />
                        </Button>

                        <CardDeleteButton id={item.id} title={item.title} />
                    </div>

                    <CardDetailImages data={item.images} cardId={item.id} />

                    <SheetTitle>{item.title}</SheetTitle>
                    <SheetDescription
                        className={cn({ "text-xs italic": !item.content })}
                    >
                        {item.content || "No Content"}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}

export { CardDetail };