import * as React from "react"
import TextareaAutosize from "react-textarea-autosize"

import { cn } from "@/lib/utils"

/**
 * @typedef {object} BaseTextareaProps
 * @property {boolean} [isInvalid]
 * 
 * @typedef {BaseTextareaProps & import("react-textarea-autosize").TextareaAutosizeProps} TextareaProps
 */

const Textarea = React.forwardRef(
    /**
     * 
     * @function Textarea
     * @param {TextareaProps} props
     * @param {React.ForwardedRef<HTMLTextAreaElement>} ref
     * @returns {React.JSX.Element}
     */
    function Textarea({ isInvalid = false, className, ...props }, ref) {
        return (
            <TextareaAutosize
                className={cn(
                    "flex min-h-[80px] w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    isInvalid
                        ? "border-destructive focus-visible:ring-destructive"
                        : "focus-visible:ring-ring",
                    className,
                )}
                ref={ref}
                {...props}
            />
        )
    },
)

export { Textarea }