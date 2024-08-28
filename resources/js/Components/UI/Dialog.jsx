import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { IconX } from "@tabler/icons-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

/**
 * @typedef {React.ElementRef<typeof DialogPrimitive.Overlay>} DialogOverlayRef
 * @typedef {React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>} DialogOverlayProps
 * 
 * @type {ReturnType<typeof React.forwardRef<DialogOverlayRef, DialogOverlayProps>>}
 */
const DialogOverlay = React.forwardRef(
    function DialogOverlay({ className, ...props }, ref) {
        return (
            <DialogPrimitive.Overlay
                ref={ref}
                className={cn(
                    "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                    className
                )}
                {...props}
            />
        )
    }
)

/**
 * @typedef {React.ElementRef<typeof DialogPrimitive.Content>} DialogContentRef
 * @typedef {React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>} DialogContentProps
 * 
 * @type {ReturnType<typeof React.forwardRef<DialogContentRef, DialogContentProps>>}
 */
const DialogContent = React.forwardRef(
    function DialogContent({ className, children, ...props }, ref) {
        return (
            <DialogPortal>
                <DialogOverlay />
                <DialogPrimitive.Content
                    ref={ref}
                    className={cn(
                        "fixed left-[50%] top-[50%] z-50 grid w-[90%] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 rounded-md shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                        className
                    )}
                    {...props}
                >
                    {children}
                    <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                        <IconX className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </DialogPrimitive.Close>
                </DialogPrimitive.Content>
            </DialogPortal>
        )
    }
)

/**
 * 
 * @function DialogHeader
 * @param {React.HTMLAttributes<HTMLDivElement>} props
 * @return {React.JSX.Element}
 */
function DialogHeader({ className, ...props }) {
    return (
        <div
            className={cn(
                "flex flex-col space-y-1.5 text-center sm:text-left",
                className
            )}
            {...props}
        />
    )
}

/**
 * 
 * @function DialogFooter
 * @param {React.HTMLAttributes<HTMLDivElement>} props
 * @return {React.JSX.Element}
 */
function DialogFooter({ className, ...props }) {
    return (
        <div
            className={cn(
                "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
                className
            )}
            {...props}
        />
    )
}

/**
 * @typedef {React.ElementRef<typeof DialogPrimitive.Title>} DialogTitleRef
 * @typedef {React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>} DialogTitleProps
 * 
 * @type {ReturnType<typeof React.forwardRef<DialogTitleRef, DialogTitleProps>>}
 */
const DialogTitle = React.forwardRef(
    function DialogTitle({ className, ...props }, ref) {
        return (
            <DialogPrimitive.Title
                ref={ref}
                className={cn(
                    "text-lg font-semibold leading-none tracking-tight",
                    className
                )}
                {...props}
            />
        )
    }
)

/**
 * @typedef {React.ElementRef<typeof DialogPrimitive.Description>} DialogDescriptionRef
 * @typedef {React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>} DialogDescriptionProps
 * 
 * @type {ReturnType<typeof React.forwardRef<DialogDescriptionRef, DialogDescriptionProps>>}
 */
const DialogDescription = React.forwardRef(
    function DialogDescription({ className, ...props }, ref) {
        return (
            <DialogPrimitive.Description
                ref={ref}
                className={cn("text-sm text-muted-foreground", className)}
                {...props}
            />
        )
    }
)

export {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
}