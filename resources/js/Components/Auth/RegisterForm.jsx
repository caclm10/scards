import { useForm } from "@inertiajs/react"
import { IconAt, IconPassword, IconUser } from "@tabler/icons-react";

import { CardContent } from "@/Components/UI/Card";
import { Label } from "@/Components/UI/Label";
import { Input, InputIcon } from "@/Components/UI/Input";
import { FormErrorMessage } from "@/Components/UI/Form";
import { AuthCardAction } from "./AuthCardAction";
import { Checkbox } from "../UI/Checkbox";

/**
 * @typedef {Object} Inputs
 * @property {string} name
 * @property {string} email
 * @property {string} password
 * @property {import("@radix-ui/react-checkbox").CheckedState} remember
 */

function RegisterForm() {
    /** @type {ReturnType<typeof useForm<Inputs>>} */
    const form = useForm({
        name: "",
        email: "",
        password: "",
        remember: false,
    });

    /** @param {React.ChangeEvent<HTMLInputElement>} event */
    function handleChangeName(event) {
        form.setData("name", event.target.value);
    }

    /** @param {React.ChangeEvent<HTMLInputElement>} event */
    function handleChangeEmail(event) {
        form.setData("email", event.target.value);
    }

    /** @param {React.ChangeEvent<HTMLInputElement>} event */
    function handleChangePassword(event) {
        form.setData("password", event.target.value);
    }

    /** @param {import("@radix-ui/react-checkbox").CheckedState} checked */
    function handleChangeRemember(checked) {
        form.setData("remember", checked);
    }

    /** @param {React.FormEvent<HTMLFormElement>} event */
    function handleSubmit(event) {
        event.preventDefault();

        form.post("/register");
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <div className="relative">
                        <InputIcon icon={IconUser} />
                        <Input
                            id="name"
                            placeholder="Name"
                            className="pl-10"
                            value={form.data.name}
                            isInvalid={!!form.errors.name}
                            onChange={handleChangeName}
                        />
                    </div>
                    <FormErrorMessage message={form.errors.name} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <div className="relative">
                        <InputIcon icon={IconAt} />
                        <Input
                            id="email"
                            placeholder="Email address"
                            className="pl-10"
                            value={form.data.email}
                            isInvalid={!!form.errors.email}
                            onChange={handleChangeEmail}
                        />
                    </div>
                    <FormErrorMessage message={form.errors.email} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                        <InputIcon icon={IconPassword} />
                        <Input
                            id="password"
                            placeholder="Password"
                            type="password"
                            className="pl-10"
                            value={form.data.password}
                            isInvalid={!!form.errors.password}
                            onChange={handleChangePassword}
                        />
                    </div>
                    <FormErrorMessage message={form.errors.password} />
                </div>
                <div className="flex items-center gap-x-2">
                    <Checkbox
                        id="remember"
                        checked={form.data.remember}
                        onCheckedChange={handleChangeRemember}
                    />
                    <Label htmlFor="remember">Remembe me?</Label>
                </div>
            </CardContent>

            <AuthCardAction
                submitLabel="Sign up"
                switchHref="/login"
                switchLabel="Sign in"
                isLoading={form.processing}
            />
        </form>
    )
}

export { RegisterForm }
