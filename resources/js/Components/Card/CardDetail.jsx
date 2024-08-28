import { useState } from "react";
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
import { EditCardForm } from "./EditCardForm";
import { VisuallyHidden } from "../UI/VisuallyHidden";
import { useMediaQuery } from "@/hooks/use-media-query";

/**
 * @typedef {object} CardDetailProps
 * @property {import("@/models/card").Card} item
 */

/** @param {CardDetailProps} props */
function CardDetail({ item }) {
    /** @type {import("@/models/page").PageProps<{new_card_id?: number}>} */
    const { new_card_id } = usePageProps();

    const isDesktop = useMediaQuery("(min-width: 768px)")

    const [isEditingMode, setIsEditingMode] = useState(false)

    function handleClickEdit() {
        setIsEditingMode(value => !value)
    }

    return (
        <Sheet defaultOpen={new_card_id === item.id}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                    Show
                </Button>
            </SheetTrigger>
            <SheetContent side={isDesktop ? "right" : "bottom"} className="overflow-auto">
                <div className="mb-2 flex items-center gap-x-3">
                    <Button type="button" size="icon-sm" variant="outline" onClick={handleClickEdit}>
                        <ButtonIcon icon={IconPencil} />
                    </Button>

                    <CardDeleteButton id={item.id} title={item.title} />
                </div>

                <CardDetailImages cardId={item.id} />

                <SheetHeader>
                    {!isEditingMode && (
                        <SheetTitle>{item.title}</SheetTitle>
                    )}

                    <SheetDescription>
                        <VisuallyHidden>
                            {item.content || "No Content"}
                        </VisuallyHidden>
                    </SheetDescription>
                </SheetHeader>

                {!isEditingMode && (
                    <p className={cn("whitespace-pre-line text-sm mt-2", { "text-xs italic": !item.content })}>
                        {item.content || "No Content"}
                    </p>
                )}

                {isEditingMode && (
                    <>
                        <div className="h-4"></div>

                        <EditCardForm
                            data={{
                                id: item.id,
                                title: item.title,
                                content: item.content
                            }}
                            onIsEditingModeChange={setIsEditingMode}
                        />
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
}

export { CardDetail };