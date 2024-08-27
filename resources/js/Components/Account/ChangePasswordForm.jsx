import { useForm } from "@inertiajs/react";
import { toast } from "sonner";

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
 * @property {string} current_password
 * @property {string} new_password
 */

function ChangePasswordForm() {
    /** @type {ReturnType<typeof useForm<Inputs>>} */
    const form = useForm({
        current_password: "",
        new_password: "",
    });

    /** @param {React.ChangeEvent<HTMLInputElement>} event */
    function handleChangeCurrentPassword(event) {
        form.setData("current_password", event.target.value);
    }

    /** @param {React.ChangeEvent<HTMLInputElement>} event */
    function handleChangeNewPassword(event) {
        form.setData("new_password", event.target.value);
    }

    /** @param {React.FormEvent<HTMLFormElement>} event */
    const submit = (event) => {
        event.preventDefault();

        form.patch("/account/password", {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Password updated", {
                    description: "Your password has been updated successfully.",
                });

                document.activeElement.blur();
            },
            onFinish: () => form.reset(),
        });
    };

    return (
        <Card className="max-w-lg">
            <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your password.</CardDescription>
            </CardHeader>
            <form onSubmit={submit}>
                <CardContent>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="currentPassword">
                                Current Password
                            </Label>
                            <Input
                                type="password"
                                id="currentPassword"
                                placeholder="Current Password"
                                value={form.data.current_password}
                                isInvalid={!!form.errors.current_password}
                                onChange={handleChangeCurrentPassword}
                            />
                            <FormErrorMessage
                                message={form.errors.current_password}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">New Password</Label>
                            <Input
                                type="password"
                                id="password"
                                placeholder="New Password"
                                value={form.data.new_password}
                                isInvalid={!!form.errors.new_password}
                                onChange={handleChangeNewPassword}
                            />
                            <FormErrorMessage
                                message={form.errors.new_password}
                            />
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

export { ChangePasswordForm };