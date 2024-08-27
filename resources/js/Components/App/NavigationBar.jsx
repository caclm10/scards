import { Link, usePage } from "@inertiajs/react";
import { cva } from "class-variance-authority";

const navigationLinkVariants = cva(
    "flex items-center gap-2 rounded-sm px-3 py-2",
    {
        variants: {
            isActive: {
                false: "text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                true: "bg-muted text-foreground",
            },
        },
        defaultVariants: {
            isActive: false,
        },
    }
);

function NavigationBar() {
    const { url } = usePage();

    return (
        <div className="flex items-center gap-x-3">
            <Link
                href="/cards"
                className={navigationLinkVariants({
                    isActive: url.startsWith("/cards"),
                })}
            >
                Cards
            </Link>
        </div>
    );
}

export { NavigationBar };