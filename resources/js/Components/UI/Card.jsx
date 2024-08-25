import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * @typedef {import("react").HTMLAttributes<HTMLDivElement>} CardProps
 * @extends {React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>}
 */
const Card = React.forwardRef(
    /**
     * @function Card
     * @param {CardProps} props
     * @param {React.Ref<HTMLDivElement>} ref
     * @returns {React.JSX.Element}
     */
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "rounded-lg border bg-card text-card-foreground shadow-sm",
                className
            )}
            {...props}
        />
    )

);
Card.displayName = "Card";

/**
 * @typedef {import("react").HTMLAttributes<HTMLDivElement>} CardHeaderProps
 * @extends {React.ForwardRefExoticComponent<CardHeaderProps & React.RefAttributes<HTMLDivElement>>}
 */
const CardHeader = React.forwardRef(
    /**
     * @function CardHeader
     * @param {CardHeaderProps} props
     * @param {React.Ref<HTMLDivElement>} ref
     * @returns {React.JSX.Element}
     */
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "flex flex-col space-y-1.5 p-6",
                className
            )}
            {...props}
        />
    )
);
CardHeader.displayName = "CardHeader";

/**
 * @typedef {import("react").HTMLAttributes<HTMLHeadingElement>} CardTitleProps
 * @extends {React.ForwardRefExoticComponent<CardTitleProps & React.RefAttributes<HTMLHeadingElement>>}
 */
const CardTitle = React.forwardRef(
    /**
     * @function CardTitle
     * @param {CardTitleProps} props
     * @param {React.Ref<HTMLHeadingElement>} ref
     * @returns {React.JSX.Element}
     */
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn(
                "text-2xl font-semibold leading-none tracking-tight",
                className
            )}
            {...props}
        />
    )
);
CardTitle.displayName = "CardTitle";

/**
 * @typedef {import("react").HTMLAttributes<HTMLParagraphElement>} CardDescriptionProps
 * @extends {React.ForwardRefExoticComponent<CardDescriptionProps & React.RefAttributes<HTMLParagraphElement>>}
 */
const CardDescription = React.forwardRef(
    /**
     * @function CardDescription
     * @param {CardDescriptionProps} props
     * @param {React.Ref<HTMLParagraphElement>} ref
     * @returns {React.JSX.Element}
     */
    ({ className, ...props }, ref) => (
        <p
            ref={ref}
            className={cn(
                "text-sm text-muted-foreground",
                className
            )}
            {...props}
        />
    )
);
CardDescription.displayName = "CardDescription";

/**
 * @typedef {import("react").HTMLAttributes<HTMLDivElement>} CardContentProps
 * @extends {React.ForwardRefExoticComponent<CardContentProps & React.RefAttributes<HTMLDivElement>>}
 */
const CardContent = React.forwardRef(
    /**
     * @function CardContent
     * @param {CardContentProps} props
     * @param {React.Ref<HTMLDivElement>} ref
     * @returns {React.JSX.Element}
     */
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("p-6 pt-0", className)}
            {...props}
        />
    )
);
CardContent.displayName = "CardContent";

/**
 * @typedef {import("react").HTMLAttributes<HTMLDivElement>} CardFooterProps
 * @extends {React.ForwardRefExoticComponent<CardFooterProps & React.RefAttributes<HTMLDivElement>>}
 */
const CardFooter = React.forwardRef(
    /**
     * @function CardFooter
     * @param {CardFooterProps} props
     * @param {React.Ref<HTMLDivElement>} ref
     * @returns {React.JSX.Element}
     */
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex items-center p-6 pt-0", className)}
            {...props}
        />
    )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }