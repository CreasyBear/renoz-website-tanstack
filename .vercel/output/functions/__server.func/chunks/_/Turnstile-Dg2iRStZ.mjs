import { a as createLucideIcon } from "./router-BXmMmHIL.mjs";
import { a as reactExports, o as jsxRuntimeExports } from "./server.mjs";
const __iconNode = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode);
const Turnstile = reactExports.forwardRef(({
  siteKey,
  onVerify,
  onError,
  onExpire,
  onReset,
  theme = "auto",
  size = "normal",
  className = ""
}, ref) => {
  const containerRef = reactExports.useRef(null);
  const widgetIdRef = reactExports.useRef(null);
  const [isLoaded, setIsLoaded] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const handleVerify = reactExports.useCallback((token) => {
    setIsLoading(false);
    onVerify(token);
  }, [onVerify]);
  const handleError = reactExports.useCallback(() => {
    setIsLoading(false);
    onError?.();
  }, [onError]);
  const handleExpire = reactExports.useCallback(() => {
    setIsLoading(false);
    onExpire?.();
  }, [onExpire]);
  const handleTimeout = reactExports.useCallback(() => {
    setIsLoading(false);
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
      setIsLoading(true);
    }
  }, []);
  reactExports.useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.reset(widgetIdRef.current);
          setIsLoading(true);
          onReset?.();
        } catch (error) {
          console.error("Failed to reset Turnstile widget:", error);
        }
      }
    }
  }), [onReset]);
  reactExports.useEffect(() => {
    if (window.turnstile) {
      setIsLoaded(true);
      return;
    }
    const existingScript = document.querySelector(
      'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
    );
    if (existingScript) {
      const checkLoaded = () => {
        if (window.turnstile) {
          setIsLoaded(true);
        } else {
          setTimeout(checkLoaded, 100);
        }
      };
      checkLoaded();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => setIsLoaded(true);
    script.onerror = () => {
      console.error("Failed to load Turnstile script");
      setIsLoading(false);
    };
    document.head.appendChild(script);
  }, []);
  reactExports.useEffect(() => {
    if (!isLoaded || !window.turnstile || !containerRef.current || widgetIdRef.current || !siteKey) {
      return;
    }
    try {
      const id = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: handleVerify,
        "error-callback": handleError,
        "expired-callback": handleExpire,
        "timeout-callback": handleTimeout,
        theme,
        size
      });
      widgetIdRef.current = id;
    } catch (error) {
      console.error("Failed to render Turnstile widget:", error);
      setIsLoading(false);
    }
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (error) {
          console.error("Failed to remove Turnstile widget:", error);
        }
        widgetIdRef.current = null;
      }
    };
  }, [isLoaded, siteKey, handleVerify, handleError, handleExpire, handleTimeout, theme, size]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef }),
    isLoading && !widgetIdRef.current && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-sm text-gray-500 mt-2", children: "Loading verification..." })
  ] });
});
Turnstile.displayName = "Turnstile";
export {
  ChevronUp as C,
  Turnstile as T
};
