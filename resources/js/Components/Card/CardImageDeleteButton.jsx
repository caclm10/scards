import { useState } from "react"
import { router } from "@inertiajs/react"
import { IconTrash } from "@tabler/icons-react"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/UI/AlertDialog"
import { Button, ButtonIcon, ButtonLoader } from "@/Components/UI/Button"

/**
 * @typedef {Object} CardImageDeleteButtonProps
 * @property {import("@/models/card").Card["id"]} id
 * @property {import("@/models/card").CardImage["id"]} imageId
 */

/** @param {CardImageDeleteButtonProps} props */
function CardImageDeleteButton({ id, imageId }) {
    const [isProcessing, setIsProcessing] = useState(false)

    function handleClickContinue() {
        router.delete(`/cards/${id}/images/${imageId}`, {
            onStart: () => setIsProcessing(true),
            onFinish: () => setIsProcessing(false),
        })
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="destructive-outline"
                    size="sm"
                    isLoading={isProcessing}
                >
                    <ButtonLoader />
                    {!isProcessing && <ButtonIcon icon={IconTrash} />}
                    Delete image
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure to delete this card image?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete the image.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        variant="destructive"
                        onClick={handleClickContinue}
                    >
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export { CardImageDeleteButton }