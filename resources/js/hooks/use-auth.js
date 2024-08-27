import { usePage } from "@inertiajs/react";

function useAuth() {
    /** @type {ReturnType<typeof usePage<import("@/models/page").PageProps<{}>>>} */
    const { props } = usePage();

    return { user: props.auth.user };
}

export { useAuth }