import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

/**
 * @typedef {import("react").ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & import("class-variance-authority").VariantProps<typeof labelVariants>} LabelProps
 */


const Label = React.forwardRef(
    /**
     * @param {LabelProps} props
     * @param {React.ElementRef<typeof LabelPrimitive.Root>} ref
     * @returns {React.JSX.Element}
     */
    (
        { className, ...props },
        ref
    ) => (
        <LabelPrimitive.Root
            ref={ref}
            className={cn(
                labelVariants(),
                className
            )}
            {...props}
        />
    )
);
Label.displayName = LabelPrimitive.Root.displayName;


export { Label };

