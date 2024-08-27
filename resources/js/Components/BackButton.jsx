import { Link } from "@inertiajs/react";
import { IconChevronLeft } from "@tabler/icons-react";

import { Button, ButtonIcon } from "@/Components/UI/Button";


/** @param {import("@/Components/UI/Button").ButtonProps & {href?: string}} props */
function BackButton({ href = "/cards", className, ...props }) {
    return (
        <Button variant="outline" className={className} asChild {...props}>
            <Link href={href}>
                <ButtonIcon icon={IconChevronLeft} />
                <span>Back</span>
            </Link>
        </Button>
    );
}

export { BackButton }