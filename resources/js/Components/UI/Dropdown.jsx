import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { IconCheck, IconChevronRight, IconCircle } from "@tabler/icons-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef(
    /**
     * 
     * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {inset?: boolean}} props
     * @param {React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>} ref
     */
    ({ className, inset, children, ...props }, ref) => (
        <DropdownMenuPrimitive.SubTrigger
            ref={ref}
            className={cn(
                "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
                inset && "pl-8",
                className
            )}
            {...props}
        >
            {children}
            <IconChevronRight className="ml-auto size-5" />
        </DropdownMenuPrimitive.SubTrigger>
    ))
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef(
    /**
     * 
     * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>} props 
     * @param {React.ElementRef<typeof DropdownMenuPrimitive.SubContent>} ref 
     */
    ({ className, ...props }, ref) => (
        <DropdownMenuPrimitive.SubContent
            ref={ref}
            className={cn(
                "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                className
            )}
            {...props}
        />
    ))
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef(
    /**
     * 
     * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>} props
     * @param {React.ElementRef<typeof DropdownMenuPrimitive.Content>} ref 
     */
    ({ className, sideOffset = 4, ...props }, ref) => (
        <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content
                ref={ref}
                sideOffset={sideOffset}
                className={cn(
                    "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                    className
                )}
                {...props}
            />
        </DropdownMenuPrimitive.Portal>
    ))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef(
    /**
     * 
     * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {inset?: boolean}} props
     * @param {React.ElementRef<typeof DropdownMenuPrimitive.Item>} ref
     */
    ({ className, inset, ...props }, ref) => (
        <DropdownMenuPrimitive.Item
            ref={ref}
            className={cn(
                "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                inset && "pl-8",
                className
            )}
            {...props}
        />
    ))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef(
    /**
     * 
     * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>} props
     * @param {React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>} ref 
     */
    ({ className, children, checked, ...props }, ref) => (
        <DropdownMenuPrimitive.CheckboxItem
            ref={ref}
            className={cn(
                "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                className
            )}
            checked={checked}
            {...props}
        >
            <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                <DropdownMenuPrimitive.ItemIndicator>
                    <IconCheck className="h-4 w-4" />
                </DropdownMenuPrimitive.ItemIndicator>
            </span>
            {children}
        </DropdownMenuPrimitive.CheckboxItem>
    ))
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef(
    /**
     * 
     * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>} props
     * @param {React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>} ref 
     */
    ({ className, children, ...props }, ref) => (
        <DropdownMenuPrimitive.RadioItem
            ref={ref}
            className={cn(
                "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                className
            )}
            {...props}
        >
            <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                <DropdownMenuPrimitive.ItemIndicator>
                    <IconCircle className="h-2 w-2 fill-current" />
                </DropdownMenuPrimitive.ItemIndicator>
            </span>
            {children}
        </DropdownMenuPrimitive.RadioItem>
    ))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef(
    /**
     * 
     * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {inset?: boolean}} props
     * @param {React.ElementRef<typeof DropdownMenuPrimitive.Label>} ref
     */
    ({ className, inset, ...props }, ref) => (
        <DropdownMenuPrimitive.Label
            ref={ref}
            className={cn(
                "px-2 py-1.5 text-sm font-semibold",
                inset && "pl-8",
                className
            )}
            {...props}
        />
    ))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef(
    /**
     * 
     * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>} props
     * @param {React.ElementRef<typeof DropdownMenuPrimitive.Separator>} ref 
     */
    ({ className, ...props }, ref) => (
        <DropdownMenuPrimitive.Separator
            ref={ref}
            className={cn("-mx-1 my-1 h-px bg-muted", className)}
            {...props}
        />
    ))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

/** @param {React.HTMLAttributes<HTMLSpanElement>} props */
const DropdownMenuShortcut = ({ className, ...props }) => {
    return (
        <span
            className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
            {...props}
        />
    )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuRadioGroup,
}