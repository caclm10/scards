import { useForm } from "@inertiajs/react";
import { IconPlus } from "@tabler/icons-react";

import { Button, ButtonIcon, ButtonLoader } from "@/Components/UI/Button";

function NewCardButton() {
    const form = useForm();

    /** @param {React.FormEvent<HTMLFormElement>} event */
    function handleSubmit(event) {
        event.preventDefault();

        form.post("/cards");
    }

    return (
        <form onSubmit={handleSubmit}>
            <Button isLoading={form.processing}>
                <ButtonLoader />
                {!form.processing && <ButtonIcon icon={IconPlus} />}
                New Card
            </Button>
        </form>
    );
}

export { NewCardButton };