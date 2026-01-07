import { a as createLucideIcon } from "./router-CNMZyROD.mjs";
import { a as reactExports, o as jsxRuntimeExports } from "./server.mjs";
const __iconNode = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode);
function Turnstile({
  siteKey,
  onVerify,
  onError,
  onExpire,
  theme = "auto",
  size = "normal",
  className = ""
}) {
  reactExports.useRef(null);
  reactExports.useRef(null);
  const [isLoaded, setIsLoaded] = reactExports.useState(false);
  reactExports.useEffect(() => {
    {
      const timer = setTimeout(() => {
        onVerify("mock-token");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [onVerify]);
  reactExports.useEffect(() => {
    return;
  }, [isLoaded, siteKey, onVerify, onError, onExpire, theme, size]);
  {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `p-4 bg-yellow-100 text-yellow-800 text-sm rounded border border-yellow-200 ${className}`,
        children: "⚠️ Turnstile Disabled (Dev Mode)"
      }
    );
  }
}
export {
  ChevronUp as C,
  Turnstile as T
};
