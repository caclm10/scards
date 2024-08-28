import { useState } from "react";
import { router } from "@inertiajs/react";
import { IconTrash } from "@tabler/icons-react";

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
} from "@/Components/UI/AlertDialog";
import { Button, ButtonIcon, ButtonLoader } from "@/Components/UI/Button";
import { toast } from "sonner";

/** 
 * @typedef {object} CardDeleteButtonProps
 * @property {import("@/models/card").Card["id"]} id
 * @property {import("@/models/card").Card["title"]} title
 */

/** @param {CardDeleteButtonProps} props */
function CardDeleteButton({ id, title }) {
    const [isProcessing, setIsProcessing] = useState(false);

    function handleClickContinue() {
        router.delete(`/cards/${id}`, {
            onStart: () => setIsProcessing(true),
            onFinish: () => setIsProcessing(false),
            onSuccess: () => {
                toast.success("Card deleted successfully", {
                    description: `The card has been deleted and can no longer be viewed or edited.`
                })
            }
        });
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="destructive-ghost"
                    size="icon-sm"
                    isLoading={isProcessing}
                >
                    <ButtonLoader />
                    {!isProcessing && <ButtonIcon icon={IconTrash} />}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure to delete `{title}` card?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete the card and remove its associated data.
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
    );
}

export { CardDeleteButton };