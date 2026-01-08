import { a as createLucideIcon } from "./router-BOVv61Kh.mjs";
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
  const containerRef = reactExports.useRef(null);
  const widgetIdRef = reactExports.useRef(null);
  const [isLoaded, setIsLoaded] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (window.turnstile) {
      setIsLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  reactExports.useEffect(() => {
    if (!isLoaded || !window.turnstile || !containerRef.current || widgetIdRef.current || !siteKey) {
      return;
    }
    const id = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: onVerify,
      "error-callback": onError,
      "expired-callback": onExpire,
      theme,
      size
    });
    widgetIdRef.current = id;
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [isLoaded, siteKey, onVerify, onError, onExpire, theme, size]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, className });
}
export {
  ChevronUp as C,
  Turnstile as T
};
