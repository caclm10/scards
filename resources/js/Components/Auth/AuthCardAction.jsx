import { Link } from "@inertiajs/react";

import { Button, ButtonLoader } from "@/Components/UI/Button";
import { CardFooter } from "@/Components/UI/Card";

/**
 * @typedef {Object} AuthCardActionProps
 * @property {string} submitLabel
 * @property {string} switchHref
 * @property {string} switchLabel
 * @property {boolean} [isLoading=false]
 */

/** @param {AuthCardActionProps} */
function AuthCardAction({
    submitLabel,
    switchHref,
    switchLabel,
    isLoading = false,
}) {
    return (
        <CardFooter className="flex-col">
            <Button type="submit" className="w-full" isLoading={isLoading}>
                <ButtonLoader />
                {submitLabel}
            </Button>
            <div className="text-center">
                <Link href={switchHref} className="anchor text-sm">
                    {switchLabel}
                </Link>
            </div>
        </CardFooter>
    );
}

export { AuthCardAction };
