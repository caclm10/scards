import { useForm } from "@inertiajs/react"
import { toast } from "sonner"

import { Button, ButtonLoader } from "@/Components/UI/Button"
import { FormErrorMessage } from "@/Components/UI/Form"
import { Label } from "@/Components/UI/Label"
import { Input } from "@/Components/UI/Input"
import { Textarea } from "@/Components/UI/Textarea"

/**
 * @typedef {object} Inputs
 * @property {string} title
 * @property {string} content
 */

/**
 * 
 * @function EditCardForm
 * @param {object} props
 * @param {Omit<import("@/models/card").Card, "images">} props.data
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.onIsEditingModeChange
 * @return {React.JSX.Element}
 */
function EditCardForm({ data, onIsEditingModeChange }) {
    /** @type {ReturnType<typeof useForm<Inputs>>} */
    const form = useForm({
        title: data.title,
        content: data.content || ""
    })

    /** @param {React.ChangeEvent<HTMLInputElement>} event */
    function handleChangeTitle(event) {
        form.setData("title", event.target.value)
    }

    /** @param {React.ChangeEvent<HTMLTextAreaElement>} event */
    function handleChangeContent(event) {
        form.setData("content", event.target.value)
    }

    function handleClickCancel() {
        onIsEditingModeChange(false)
    }

    /** @param {React.FormEvent<HTMLFormElement>} */
    function handleSubmit(event) {
        event.preventDefault()

        form.patch(`/cards/${data.id}`, {
            onSuccess: () => {
                toast.success("Card updated", {
                    description: "Your card has been updated successfully.",
                    position: "bottom-left"
                })
                onIsEditingModeChange(false)
            }
        })
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                    id="title"
                    placeholder="Title"
                    value={form.data.title}
                    isInvalid={!!form.errors.title}
                    onChange={handleChangeTitle}
                />
                <FormErrorMessage message={form.errors.title} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                    id="content"
                    placeholder="Content"
                    value={form.data.content}
                    isInvalid={!!form.errors.content}
                    onChange={handleChangeContent}
                />
                <FormErrorMessage message={form.errors.content} />
            </div>

            <div className="flex items-center justify-end gap-x-3">
                <Button type="button" variant="outline" onClick={handleClickCancel}>Cancel</Button>
                <Button type="submit" isLoading={form.processing}>
                    <ButtonLoader />
                    Update
                </Button>
            </div>
        </form>
    )
}

export { EditCardForm }