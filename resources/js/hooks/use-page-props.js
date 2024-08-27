import { usePage } from "@inertiajs/react";

export function usePageProps() {
    return usePage().props;
}