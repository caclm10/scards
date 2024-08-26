import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { IconLoader2 } from "@tabler/icons-react";

import { cn } from "@/lib/utils"

/**
 * @typedef {object} ButtonContextValue
 * @property {ButtonVariants["size"]} [size]
 * @property {boolean} isLoading
 */

/** @type {ReturnType<typeof React.createContext<ButtonContextValue>>} */
const ButtonContext = React.createContext({
    isLoading: false,
});

const useButton = () => React.useContext(ButtonContext);

/** @param {ButtonContextValue & {children: React.ReactNode}} ButtonProviderProps */
function ButtonProvider({
    size,
    isLoading = false,
    children,
}) {
    return (
        <ButtonContext.Provider value={{ size, isLoading }}>
            {children}
        </ButtonContext.Provider>
    );
}

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                "destructive-ghost": "text-destructive hover:bg-destructive-muted",
                "destructive-outline": "text-destructive border border-destructive hover:bg-destructive-muted",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
                "icon-sm": "size-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

/** 
 * @typedef {import("class-variance-authority").VariantProps<typeof buttonVariants>} ButtonVariants 
 * 
 * @typedef {React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants & {asChild?: boolean, isLoading?: boolean}} ButtonProps
 */

const Button = React.forwardRef(
    /**
     * @param {ButtonProps} props
     * @param {React.ForwardedRef<HTMLButtonElement>} ref
     */
    (
        {
            className,
            variant,
            size,
            asChild = false,
            isLoading = false,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : "button"
        return (
            <ButtonProvider size={size} isLoading={isLoading}>
                <Comp
                    className={cn(buttonVariants({ variant, size, className }))}
                    ref={ref}
                    {...props}
                />
            </ButtonProvider>
        )
    }
)
Button.displayName = "Button"

const buttonIconVariants = cva("mr-2",
    {
        variants: {
            size: {
                default: "size-[18px]",
                sm: "size-4",
                lg: "size-[18px]",
                icon: "size-[18px] mr-0",
                "icon-sm": "size-4 mr-0",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
);

/**
 * @typedef {import("@tabler/icons-react").IconProps} IconProps
 * 
 * @typedef {IconProps & {icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<import("@tabler/icons-react").Icon>}} ButtonIconProps
 */

const ButtonIcon = React.forwardRef(
    /**
     * @param {ButtonIconProps} props
     * @param {React.ForwardedRef<import("@tabler/icons-react").Icon>} ref 
     */
    ({ icon, stroke = 1.5, className, ...props }, ref) => {
        const { size } = useButton();

        const Element = icon;

        return (
            <Element
                ref={ref}
                stroke={stroke}
                className={buttonIconVariants({ size, className })}
                {...props}
            />
        );
    },
);
ButtonIcon.displayName = "ButtonIcon";

const ButtonLoader = React.forwardRef(
    /**
     * @param {Omit<ButtonIconProps, "icon">} props
     * @param {React.ForwardedRef<import("@tabler/icons-react").Icon>} ref 
     */
    ({ stroke = 1.5, className, ...props }, ref) => {
        const { isLoading } = useButton();

        if (!isLoading) return null;

        return (
            <ButtonIcon
                ref={ref}
                icon={IconLoader2}
                className={`animate-spin ${className}`}
                {...props}
            />
        );
    },
);
ButtonLoader.displayName = "ButtonLoader";

export { Button, ButtonIcon, ButtonLoader, buttonVariants, buttonIconVariants }
