import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges tailwind classes using tailwind-merge and clsx.
 *
 * @param {import("clsx").ClassValue[]} inputs - The classes to merge.
 * @returns {string} The merged classes.
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs))
}
