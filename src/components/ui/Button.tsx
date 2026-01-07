import { Slot } from "@radix-ui/react-slot";
import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
				outline:
					"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost:
					"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
				link: "text-primary underline-offset-4 hover:underline",
				primary:
					"bg-[var(--renoz-green)] text-white hover:bg-[var(--renoz-green-dark)] shadow-md hover:shadow-lg border border-transparent",
			},
			size: {
				default: "h-11 px-4 py-2 has-[>svg]:px-3 min-h-[44px]", // iOS touch target: 44px minimum
				sm: "h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 min-h-[44px]", // Still meets iOS requirements
				lg: "h-12 rounded-md px-6 has-[>svg]:px-4 min-h-[44px]",
				icon: "size-11 min-h-[44px] min-w-[44px]", // Ensure square touch targets
				"icon-sm": "size-8",
				"icon-lg": "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	to?: string;
	params?: Record<string, unknown>;
	search?: Record<string, unknown>;
	hash?: string;
	state?: Record<string, unknown>;
	preload?: "intent" | "render" | "viewport";
	preloadDelay?: number;
	replace?: boolean;
	activeProps?: Record<string, unknown>;
	inactiveProps?: Record<string, unknown>;
	resetScroll?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, to, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";

		if (to && !asChild) {
			return (
				<Link
					to={to}
					className={cn(buttonVariants({ variant, size, className }))}
					{...(props as Record<string, unknown>)}
				/>
			);
		}

		return (
			<Comp
				data-slot="button"
				data-variant={variant}
				data-size={size}
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
