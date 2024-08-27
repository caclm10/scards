import { useForm } from "@inertiajs/react";
import { toast } from "sonner";

import { useAuth } from "@/hooks/use-auth";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/UI/Card";
import { Button, ButtonLoader } from "@/Components/UI/Button";
import { FormErrorMessage } from "@/Components/UI/Form";
import { Input } from "@/Components/UI/Input";
import { Label } from "@/Components/UI/Label";

/**
 * @typedef {object} Inputs
 * @property {string} name
 * @property {string} email
 */

function ProfileForm() {
    const { user } = useAuth();

    /** @type {ReturnType<typeof useForm<Inputs>>} */
    const form = useForm({
        name: user.name,
        email: user.email
    });

    /** @param {React.ChangeEvent<HTMLInputElement>} event */
    function handleChangeName(event) {
        form.setData("name", event.target.value);
    }

    /** @param {React.ChangeEvent<HTMLInputElement>} event */
    function handleChangeEmail(event) {
        form.setData("email", event.target.value);
    }

    /** @param {React.FormEvent<HTMLFormElement>} event */
    const submit = (event) => {
        event.preventDefault();

        form.patch("/account/profile", {
            onSuccess: () => {
                toast.success("Profile updated", {
                    description: "Your profile has been updated successfully.",
                });
            },
        });
    };

    return (
        <Card className="max-w-lg">
            <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                    Update your profile information.
                </CardDescription>
            </CardHeader>
            <form onSubmit={submit}>
                <CardContent>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                type="text"
                                id="name"
                                placeholder="Name"
                                value={form.data.name}
                                isInvalid={!!form.errors.name}
                                onChange={handleChangeName}
                            />
                            <FormErrorMessage message={form.errors.name} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                placeholder="Email address"
                                value={form.data.email}
                                isInvalid={!!form.errors.email}
                                onChange={handleChangeEmail}
                            />
                            <FormErrorMessage message={form.errors.email} />
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="flex justify-end">
                    <Button type="submit" isLoading={form.processing}>
                        <ButtonLoader />
                        Update
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}

export { ProfileForm };