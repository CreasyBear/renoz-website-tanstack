import { o as jsxRuntimeExports } from "./server.mjs";
import { m as motion, v as twMerge, w as clsx } from "./router-DCgCj0LS.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Card({
  children,
  variant = "default",
  className = "",
  hover = false,
  ...props
}) {
  const variantClasses = {
    default: "bg-[var(--white)] border border-gray-100 shadow-soft",
    dark: "bg-[var(--black)] text-[var(--text-on-dark)] border border-gray-800 shadow-2xl",
    cream: "bg-[var(--cream)] border border-[#EBE5DE] shadow-sm",
    glass: "glass",
    green: "bg-[var(--renoz-green)]/5 border border-[var(--renoz-green)]/20 shadow-soft",
    neutral: "bg-gray-50 border border-gray-200 shadow-soft"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: cn(
        "rounded-[32px] p-8 transition-all duration-500 ease-out",
        variantClasses[variant],
        hover && "hover:shadow-lg hover:-translate-y-1 cursor-pointer hover:border-renoz-green/20",
        className
      ),
      initial: hover ? { opacity: 0, y: 30 } : void 0,
      whileInView: hover ? { opacity: 1, y: 0 } : void 0,
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      ...props,
      children
    }
  );
}
export {
  Card as C
};
