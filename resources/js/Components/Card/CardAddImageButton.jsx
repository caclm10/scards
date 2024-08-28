import { IconPlus } from "@tabler/icons-react"

import { Button, ButtonIcon } from "@/Components/UI/Button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/UI/Dialog"
import { FilePond } from "react-filepond"
import { usePageProps } from "@/hooks/use-page-props"
import { useCardImages } from "@/hooks/use-card"

/**
 * 
 * @function CardAddImageButton
 * @param {object} props
 * @param {import("@/models/card").Card["id"]} props.id
 * @returns {React.JSX.Element}
 */
function CardAddImageButton({ id }) {
    /** @type {import("@/models/page").PageProps<{}>} */
    const { csrf_token } = usePageProps()

    const { mutate } = useCardImages(id)

    /** @param {import("filepond").FilePondErrorDescription | null} error */
    function handleProcessFile(error) {
        if (!error) {
            mutate()
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="size-12"
                >
                    <ButtonIcon
                        icon={IconPlus}
                        className="text-muted-foreground"
                    />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add Card Image</DialogTitle>
                    <DialogDescription>
                        Upload an image to associate with this card.
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-4 max-h-[525px] overflow-auto">
                    <FilePond
                        allowMultiple
                        allowRevert={false}
                        server={{
                            process: `/cards/${id}/images`,
                            revert: null,
                            headers: {
                                "X-CSRF-TOKEN": csrf_token
                            }
                        }}
                        onprocessfile={handleProcessFile}
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export { CardAddImageButton }