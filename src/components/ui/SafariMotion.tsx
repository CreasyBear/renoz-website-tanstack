import { type MotionProps, motion } from "framer-motion";
import { forwardRef } from "react";
import { isSafari } from "@/lib/utils";

interface SafariMotionProps extends MotionProps {
	children: React.ReactNode;
	safariOptimizations?: boolean;
}

/**
 * Safari-optimized motion component that handles Safari-specific animation issues
 * - Forces hardware acceleration on Safari
 * - Uses simpler easing for better performance
 * - Applies Safari-specific transforms
 */
export const SafariMotion = forwardRef<HTMLDivElement, SafariMotionProps>(
	({ children, safariOptimizations = true, ...props }, ref) => {
		const safariProps: MotionProps =
			safariOptimizations && isSafari()
				? {
						// Safari-specific optimizations
						style: {
							willChange: "transform, opacity",
							transform: "translateZ(0)", // Force hardware acceleration
							backfaceVisibility: "hidden" as const,
							perspective: 1000,
							...props.style,
						},
						// Simpler easing for Safari performance
						transition: {
							ease: "easeOut",
							duration: props.transition?.duration || 0.3,
							...props.transition,
						},
						...props,
					}
				: props;

		return (
			<motion.div ref={ref} {...safariProps}>
				{children}
			</motion.div>
		);
	},
);

SafariMotion.displayName = "SafariMotion";

/**
 * Safari-optimized viewport trigger for animations
 */
export const SafariViewportTrigger = forwardRef<
	HTMLDivElement,
	SafariMotionProps & {
		once?: boolean;
		margin?: string;
		amount?: number | "some" | "all";
	}
>(({ children, once = true, margin = "-100px", amount, ...props }, ref) => {
	return (
		<SafariMotion
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{
				once,
				margin,
				amount,
			}}
			transition={{
				duration: 0.5,
				ease: isSafari() ? "easeOut" : "easeOut",
			}}
			{...props}
		>
			{children}
		</SafariMotion>
	);
});

SafariViewportTrigger.displayName = "SafariViewportTrigger";
