import { c as createLucideIcon } from "./router-DLD09M9t.mjs";
import { jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
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
  useRef(null);
  useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    {
      const timer = setTimeout(() => {
        onVerify("mock-token");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [onVerify]);
  useEffect(() => {
    return;
  }, [isLoaded, siteKey, onVerify, onError, onExpire, theme, size]);
  {
    return /* @__PURE__ */ jsx(
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
