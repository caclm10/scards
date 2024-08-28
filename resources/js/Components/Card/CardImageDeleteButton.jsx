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
import { toast } from "sonner"
import { isAxiosError } from "axios"
import axios from "axios"
import { useCardImages } from "@/hooks/use-card"

/**
 * @typedef {Object} CardImageDeleteButtonProps
 * @property {import("@/models/card").Card["id"]} id
 * @property {import("@/models/card").CardImage["id"]} imageId
 * @property {() => void} onDeleted
 */

/** @param {CardImageDeleteButtonProps} props */
function CardImageDeleteButton({ id, imageId, onDeleted }) {
    const { mutate } = useCardImages(id)
    const [isProcessing, setIsProcessing] = useState(false)

    async function handleClickContinue() {
        setIsProcessing(true)

        try {
            await axios.delete(`/cards/${id}/images/${imageId}`)

            await mutate()

            onDeleted()
        } catch (error) {
            toast.error("Uh oh, something went wrong", {
                description: isAxiosError(error) ? error.response.data.message || "Unknown error occurred." : "Unknown error occurred."
            })
        } finally {
            setIsProcessing(false)
        }
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