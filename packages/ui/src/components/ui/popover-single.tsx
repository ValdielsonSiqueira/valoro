import * as React from "react";
import { cn } from "@/lib/utils";

interface PopoverContextValue {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const PopoverContext = React.createContext<PopoverContextValue | undefined>(
    undefined
);

const PopoverSingle = ({
    children,
    open: controlledOpen,
    onOpenChange: setControlledOpen,
}: {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}) => {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
    const open = controlledOpen ?? uncontrolledOpen;
    const onOpenChange = setControlledOpen ?? setUncontrolledOpen;

    // Handle click outside
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                open &&
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                onOpenChange(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open, onOpenChange]);

    return (
        <PopoverContext.Provider value={{ open, onOpenChange }}>
            <div ref={containerRef} className="relative inline-block w-full">
                {children}
            </div>
        </PopoverContext.Provider>
    );
};

const PopoverTriggerSingle = React.forwardRef<HTMLElement, any>(
    ({ children, asChild, ...props }) => {
        const context = React.useContext(PopoverContext);
        if (!context) throw new Error("PopoverTriggerSingle must be used within PopoverSingle");

        return React.cloneElement(children, {
            onClick: (e: React.MouseEvent) => {
                children.props.onClick?.(e);
                context.onOpenChange(!context.open);
            },
            "data-state": context.open ? "open" : "closed",
            ...props,
        });
    }
);
PopoverTriggerSingle.displayName = "PopoverTriggerSingle";

const PopoverContentSingle = React.forwardRef<HTMLDivElement, any>(
    ({ className, align, side, sideOffset = 4, ...props }, ref) => {
        const { open } = React.useContext(PopoverContext)!;

        if (!open) return null;

        return (
            <div
                ref={ref}
                className={cn(
                    "absolute z-[50] mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95",
                    className
                )}
                style={{
                    top: "100%",
                    left: 0,
                    ...props.style,
                }}
                {...props}
            />
        );
    }
);
PopoverContentSingle.displayName = "PopoverContentSingle";

export { PopoverSingle, PopoverTriggerSingle, PopoverContentSingle };
