import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/** @param {import("clsx").ClassValue[]} inputs */
export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

/** @param {string} name */
export function getInitials(name) {
    const first = name.match(/(^\S\S?|\b\S)?/g);
    if (!first) return "";

    const second = first.join("").match(/(^\S|\S$)?/g);
    if (!second) return first.join("").toUpperCase();

    return second.join("").toUpperCase()
}