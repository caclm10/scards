import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * @typedef {import("react").InputHTMLAttributes<HTMLInputElement> & {isInvalid?: boolean}} InputProps
 */

const Input = React.forwardRef(
    /**
     * 
     * @param {InputProps} props
     * @param {React.ForwardedRef<HTMLInputElement>} ref
     */
    ({ className, type = "text", isInvalid = false, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    isInvalid ? "border-destructive focus-visible:ring-destructive" : "border-input focus-visible:ring-ring",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

/**
 * @typedef {import("@tabler/icons-react").IconProps} IconProps
 * 
 * @typedef {{icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<import("@tabler/icons-react").Icon>>}} InputIconProps
 */

const InputIcon = React.forwardRef(
    /**
     *
     * @param {InputIconProps} props
     * @param {React.ForwardedRef<import("@tabler/icons-react").Icon>} ref
     */
    function InputIcon(
        { icon, stroke = 1.5, className, ...props },
        ref,
    ) {
        const Element = icon

        return (
            <Element
                ref={ref}
                stroke={stroke}
                className={cn(
                    "absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-400",
                    className,
                )}
                {...props}
            />
        )
    }
)

export { Input, InputIcon }
