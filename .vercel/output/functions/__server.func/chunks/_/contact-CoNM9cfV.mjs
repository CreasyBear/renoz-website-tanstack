import { a as reactExports, o as jsxRuntimeExports, D as useStore } from "./server.mjs";
import { p as Route$a, u as useScroll, b as useTransform, m as motion, g as cn, a as createLucideIcon, B as Button, A as ArrowRight, P as Phone, q as Mail, s as MapPin, C as ChevronDown, k as AnimatePresence, S as Shield, L as Link } from "./router-BOVv61Kh.mjs";
import { C as Card } from "./Card-C-tcQt__.mjs";
import { T as Turnstile, C as ChevronUp } from "./Turnstile-9hDm__E_.mjs";
import { V as VerticalTimeline } from "./VerticalTimeline-DQLximhw.mjs";
import { H as HardHat } from "./hard-hat-BN5pcb60.mjs";
import { B as Building } from "./building-LGWcoi3j.mjs";
import { o as objectType, s as stringType } from "./types-RbEUnDjD.mjs";
import "node:async_hooks";
import "node:stream";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream/web";
import "./check-BLqSWSUI.mjs";
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleQuestionMark = createLucideIcon("circle-question-mark", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const __storeToDerived = /* @__PURE__ */ new WeakMap();
const __derivedToStore = /* @__PURE__ */ new WeakMap();
const __depsThatHaveWrittenThisTick = {
  current: []
};
let __isFlushing = false;
let __batchDepth = 0;
const __pendingUpdates = /* @__PURE__ */ new Set();
const __initialBatchValues = /* @__PURE__ */ new Map();
function __flush_internals(relatedVals) {
  const sorted = Array.from(relatedVals).sort((a, b) => {
    if (a instanceof Derived && a.options.deps.includes(b)) return 1;
    if (b instanceof Derived && b.options.deps.includes(a)) return -1;
    return 0;
  });
  for (const derived of sorted) {
    if (__depsThatHaveWrittenThisTick.current.includes(derived)) {
      continue;
    }
    __depsThatHaveWrittenThisTick.current.push(derived);
    derived.recompute();
    const stores = __derivedToStore.get(derived);
    if (stores) {
      for (const store of stores) {
        const relatedLinkedDerivedVals = __storeToDerived.get(store);
        if (!relatedLinkedDerivedVals) continue;
        __flush_internals(relatedLinkedDerivedVals);
      }
    }
  }
}
function __notifyListeners(store) {
  const value = {
    prevVal: store.prevState,
    currentVal: store.state
  };
  for (const listener of store.listeners) {
    listener(value);
  }
}
function __notifyDerivedListeners(derived) {
  const value = {
    prevVal: derived.prevState,
    currentVal: derived.state
  };
  for (const listener of derived.listeners) {
    listener(value);
  }
}
function __flush(store) {
  if (__batchDepth > 0 && !__initialBatchValues.has(store)) {
    __initialBatchValues.set(store, store.prevState);
  }
  __pendingUpdates.add(store);
  if (__batchDepth > 0) return;
  if (__isFlushing) return;
  try {
    __isFlushing = true;
    while (__pendingUpdates.size > 0) {
      const stores = Array.from(__pendingUpdates);
      __pendingUpdates.clear();
      for (const store2 of stores) {
        const prevState = __initialBatchValues.get(store2) ?? store2.prevState;
        store2.prevState = prevState;
        __notifyListeners(store2);
      }
      for (const store2 of stores) {
        const derivedVals = __storeToDerived.get(store2);
        if (!derivedVals) continue;
        __depsThatHaveWrittenThisTick.current.push(store2);
        __flush_internals(derivedVals);
      }
      for (const store2 of stores) {
        const derivedVals = __storeToDerived.get(store2);
        if (!derivedVals) continue;
        for (const derived of derivedVals) {
          __notifyDerivedListeners(derived);
        }
      }
    }
  } finally {
    __isFlushing = false;
    __depsThatHaveWrittenThisTick.current = [];
    __initialBatchValues.clear();
  }
}
function batch(fn) {
  __batchDepth++;
  try {
    fn();
  } finally {
    __batchDepth--;
    if (__batchDepth === 0) {
      const pendingUpdateToFlush = __pendingUpdates.values().next().value;
      if (pendingUpdateToFlush) {
        __flush(pendingUpdateToFlush);
      }
    }
  }
}
function isUpdaterFunction(updater) {
  return typeof updater === "function";
}
class Store {
  constructor(initialState, options) {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = (listener) => {
      var _a, _b;
      this.listeners.add(listener);
      const unsub = (_b = (_a = this.options) == null ? void 0 : _a.onSubscribe) == null ? void 0 : _b.call(_a, listener, this);
      return () => {
        this.listeners.delete(listener);
        unsub == null ? void 0 : unsub();
      };
    };
    this.prevState = initialState;
    this.state = initialState;
    this.options = options;
  }
  setState(updater) {
    var _a, _b, _c;
    this.prevState = this.state;
    if ((_a = this.options) == null ? void 0 : _a.updateFn) {
      this.state = this.options.updateFn(this.prevState)(updater);
    } else {
      if (isUpdaterFunction(updater)) {
        this.state = updater(this.prevState);
      } else {
        this.state = updater;
      }
    }
    (_c = (_b = this.options) == null ? void 0 : _b.onUpdate) == null ? void 0 : _c.call(_b);
    __flush(this);
  }
}
class Derived {
  constructor(options) {
    this.listeners = /* @__PURE__ */ new Set();
    this._subscriptions = [];
    this.lastSeenDepValues = [];
    this.getDepVals = () => {
      const l = this.options.deps.length;
      const prevDepVals = new Array(l);
      const currDepVals = new Array(l);
      for (let i = 0; i < l; i++) {
        const dep = this.options.deps[i];
        prevDepVals[i] = dep.prevState;
        currDepVals[i] = dep.state;
      }
      this.lastSeenDepValues = currDepVals;
      return {
        prevDepVals,
        currDepVals,
        prevVal: this.prevState ?? void 0
      };
    };
    this.recompute = () => {
      var _a, _b;
      this.prevState = this.state;
      const depVals = this.getDepVals();
      this.state = this.options.fn(depVals);
      (_b = (_a = this.options).onUpdate) == null ? void 0 : _b.call(_a);
    };
    this.checkIfRecalculationNeededDeeply = () => {
      for (const dep of this.options.deps) {
        if (dep instanceof Derived) {
          dep.checkIfRecalculationNeededDeeply();
        }
      }
      let shouldRecompute = false;
      const lastSeenDepValues = this.lastSeenDepValues;
      const { currDepVals } = this.getDepVals();
      for (let i = 0; i < currDepVals.length; i++) {
        if (currDepVals[i] !== lastSeenDepValues[i]) {
          shouldRecompute = true;
          break;
        }
      }
      if (shouldRecompute) {
        this.recompute();
      }
    };
    this.mount = () => {
      this.registerOnGraph();
      this.checkIfRecalculationNeededDeeply();
      return () => {
        this.unregisterFromGraph();
        for (const cleanup of this._subscriptions) {
          cleanup();
        }
      };
    };
    this.subscribe = (listener) => {
      var _a, _b;
      this.listeners.add(listener);
      const unsub = (_b = (_a = this.options).onSubscribe) == null ? void 0 : _b.call(_a, listener, this);
      return () => {
        this.listeners.delete(listener);
        unsub == null ? void 0 : unsub();
      };
    };
    this.options = options;
    this.state = options.fn({
      prevDepVals: void 0,
      prevVal: void 0,
      currDepVals: this.getDepVals().currDepVals
    });
  }
  registerOnGraph(deps = this.options.deps) {
    for (const dep of deps) {
      if (dep instanceof Derived) {
        dep.registerOnGraph();
        this.registerOnGraph(dep.options.deps);
      } else if (dep instanceof Store) {
        let relatedLinkedDerivedVals = __storeToDerived.get(dep);
        if (!relatedLinkedDerivedVals) {
          relatedLinkedDerivedVals = /* @__PURE__ */ new Set();
          __storeToDerived.set(dep, relatedLinkedDerivedVals);
        }
        relatedLinkedDerivedVals.add(this);
        let relatedStores = __derivedToStore.get(this);
        if (!relatedStores) {
          relatedStores = /* @__PURE__ */ new Set();
          __derivedToStore.set(this, relatedStores);
        }
        relatedStores.add(dep);
      }
    }
  }
  unregisterFromGraph(deps = this.options.deps) {
    for (const dep of deps) {
      if (dep instanceof Derived) {
        this.unregisterFromGraph(dep.options.deps);
      } else if (dep instanceof Store) {
        const relatedLinkedDerivedVals = __storeToDerived.get(dep);
        if (relatedLinkedDerivedVals) {
          relatedLinkedDerivedVals.delete(this);
        }
        const relatedStores = __derivedToStore.get(this);
        if (relatedStores) {
          relatedStores.delete(dep);
        }
      }
    }
  }
}
var LiteThrottler = class {
  constructor(fn, options) {
    this.fn = fn;
    this.options = options;
    this.lastExecutionTime = 0;
    this.isPending = false;
    this.maybeExecute = (...args) => {
      const timeSinceLastExecution = Date.now() - this.lastExecutionTime;
      if (this.options.leading && timeSinceLastExecution >= this.options.wait) this.execute(...args);
      else {
        this.lastArgs = args;
        if (!this.timeoutId && this.options.trailing) {
          const timeoutDuration = this.options.wait - timeSinceLastExecution;
          this.isPending = true;
          this.timeoutId = setTimeout(() => {
            if (this.lastArgs !== void 0) this.execute(...this.lastArgs);
          }, timeoutDuration);
        }
      }
    };
    this.execute = (...args) => {
      this.fn(...args);
      this.options.onExecute?.(args, this);
      this.lastExecutionTime = Date.now();
      this.clearTimeout();
      this.lastArgs = void 0;
      this.isPending = false;
    };
    this.flush = () => {
      if (this.isPending && this.lastArgs) this.execute(...this.lastArgs);
    };
    this.cancel = () => {
      this.clearTimeout();
      this.lastArgs = void 0;
      this.isPending = false;
    };
    this.clearTimeout = () => {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = void 0;
      }
    };
    if (this.options.leading === void 0 && this.options.trailing === void 0) {
      this.options.leading = true;
      this.options.trailing = true;
    }
  }
};
function liteThrottle(fn, options) {
  return new LiteThrottler(fn, options).maybeExecute;
}
class EventClient {
  #enabled = true;
  #pluginId;
  #eventTarget;
  #debug;
  #queuedEvents;
  #connected;
  #connectIntervalId;
  #connectEveryMs;
  #retryCount = 0;
  #maxRetries = 5;
  #connecting = false;
  #failedToConnect = false;
  #internalEventTarget = null;
  #onConnected = () => {
    this.debugLog("Connected to event bus");
    this.#connected = true;
    this.#connecting = false;
    this.debugLog("Emitting queued events", this.#queuedEvents);
    this.#queuedEvents.forEach((event) => this.emitEventToBus(event));
    this.#queuedEvents = [];
    this.stopConnectLoop();
    this.#eventTarget().removeEventListener(
      "tanstack-connect-success",
      this.#onConnected
    );
  };
  // fired off right away and then at intervals
  #retryConnection = () => {
    if (this.#retryCount < this.#maxRetries) {
      this.#retryCount++;
      this.dispatchCustomEvent("tanstack-connect", {});
      return;
    }
    this.#eventTarget().removeEventListener(
      "tanstack-connect",
      this.#retryConnection
    );
    this.#failedToConnect = true;
    this.debugLog("Max retries reached, giving up on connection");
    this.stopConnectLoop();
  };
  // This is run to register connection handlers on first emit attempt
  #connectFunction = () => {
    if (this.#connecting) return;
    this.#connecting = true;
    this.#eventTarget().addEventListener(
      "tanstack-connect-success",
      this.#onConnected
    );
    this.#retryConnection();
  };
  constructor({
    pluginId,
    debug = false,
    enabled = true,
    reconnectEveryMs = 300
  }) {
    this.#pluginId = pluginId;
    this.#enabled = enabled;
    this.#eventTarget = this.getGlobalTarget;
    this.#debug = debug;
    this.debugLog(" Initializing event subscription for plugin", this.#pluginId);
    this.#queuedEvents = [];
    this.#connected = false;
    this.#failedToConnect = false;
    this.#connectIntervalId = null;
    this.#connectEveryMs = reconnectEveryMs;
  }
  startConnectLoop() {
    if (this.#connectIntervalId !== null || this.#connected) return;
    this.debugLog(`Starting connect loop (every ${this.#connectEveryMs}ms)`);
    this.#connectIntervalId = setInterval(
      this.#retryConnection,
      this.#connectEveryMs
    );
  }
  stopConnectLoop() {
    this.#connecting = false;
    if (this.#connectIntervalId === null) {
      return;
    }
    clearInterval(this.#connectIntervalId);
    this.#connectIntervalId = null;
    this.#queuedEvents = [];
    this.debugLog("Stopped connect loop");
  }
  debugLog(...args) {
    if (this.#debug) {
      console.log(`🌴 [tanstack-devtools:${this.#pluginId}-plugin]`, ...args);
    }
  }
  getGlobalTarget() {
    if (typeof globalThis !== "undefined" && globalThis.__TANSTACK_EVENT_TARGET__) {
      this.debugLog("Using global event target");
      return globalThis.__TANSTACK_EVENT_TARGET__;
    }
    if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined") {
      this.debugLog("Using window as event target");
      return window;
    }
    const eventTarget = typeof EventTarget !== "undefined" ? new EventTarget() : void 0;
    if (typeof eventTarget === "undefined" || typeof eventTarget.addEventListener === "undefined") {
      this.debugLog(
        "No event mechanism available, running in non-web environment"
      );
      return {
        addEventListener: () => {
        },
        removeEventListener: () => {
        },
        dispatchEvent: () => false
      };
    }
    this.debugLog("Using new EventTarget as fallback");
    return eventTarget;
  }
  getPluginId() {
    return this.#pluginId;
  }
  dispatchCustomEventShim(eventName, detail) {
    try {
      const event = new Event(eventName, {
        detail
      });
      this.#eventTarget().dispatchEvent(event);
    } catch (e) {
      this.debugLog("Failed to dispatch shim event");
    }
  }
  dispatchCustomEvent(eventName, detail) {
    try {
      this.#eventTarget().dispatchEvent(new CustomEvent(eventName, { detail }));
    } catch (e) {
      this.dispatchCustomEventShim(eventName, detail);
    }
  }
  emitEventToBus(event) {
    this.debugLog("Emitting event to client bus", event);
    this.dispatchCustomEvent("tanstack-dispatch-event", event);
  }
  createEventPayload(eventSuffix, payload) {
    return {
      type: `${this.#pluginId}:${eventSuffix}`,
      payload,
      pluginId: this.#pluginId
    };
  }
  emit(eventSuffix, payload) {
    if (!this.#enabled) {
      this.debugLog(
        "Event bus client is disabled, not emitting event",
        eventSuffix,
        payload
      );
      return;
    }
    if (this.#internalEventTarget) {
      this.debugLog(
        "Emitting event to internal event target",
        eventSuffix,
        payload
      );
      this.#internalEventTarget.dispatchEvent(
        new CustomEvent(`${this.#pluginId}:${eventSuffix}`, {
          detail: this.createEventPayload(eventSuffix, payload)
        })
      );
    }
    if (this.#failedToConnect) {
      this.debugLog("Previously failed to connect, not emitting to bus");
      return;
    }
    if (!this.#connected) {
      this.debugLog("Bus not available, will be pushed as soon as connected");
      this.#queuedEvents.push(this.createEventPayload(eventSuffix, payload));
      if (typeof CustomEvent !== "undefined" && !this.#connecting) {
        this.#connectFunction();
        this.startConnectLoop();
      }
      return;
    }
    return this.emitEventToBus(this.createEventPayload(eventSuffix, payload));
  }
  on(eventSuffix, cb, options) {
    const withEventTarget = options?.withEventTarget ?? false;
    const eventName = `${this.#pluginId}:${eventSuffix}`;
    if (withEventTarget) {
      if (!this.#internalEventTarget) {
        this.#internalEventTarget = new EventTarget();
      }
      this.#internalEventTarget.addEventListener(eventName, (e) => {
        cb(e.detail);
      });
    }
    if (!this.#enabled) {
      this.debugLog(
        "Event bus client is disabled, not registering event",
        eventName
      );
      return () => {
      };
    }
    const handler = (e) => {
      this.debugLog("Received event from bus", e.detail);
      cb(e.detail);
    };
    this.#eventTarget().addEventListener(eventName, handler);
    this.debugLog("Registered event to bus", eventName);
    return () => {
      if (withEventTarget) {
        this.#internalEventTarget?.removeEventListener(eventName, handler);
      }
      this.#eventTarget().removeEventListener(eventName, handler);
    };
  }
  onAll(cb) {
    if (!this.#enabled) {
      this.debugLog("Event bus client is disabled, not registering event");
      return () => {
      };
    }
    const handler = (e) => {
      const event = e.detail;
      cb(event);
    };
    this.#eventTarget().addEventListener("tanstack-devtools-global", handler);
    return () => this.#eventTarget().removeEventListener(
      "tanstack-devtools-global",
      handler
    );
  }
  onAllPluginEvents(cb) {
    if (!this.#enabled) {
      this.debugLog("Event bus client is disabled, not registering event");
      return () => {
      };
    }
    const handler = (e) => {
      const event = e.detail;
      if (this.#pluginId && event.pluginId !== this.#pluginId) {
        return;
      }
      cb(event);
    };
    this.#eventTarget().addEventListener("tanstack-devtools-global", handler);
    return () => this.#eventTarget().removeEventListener(
      "tanstack-devtools-global",
      handler
    );
  }
}
class FormEventClient extends EventClient {
  constructor() {
    super({
      pluginId: "form-devtools",
      reconnectEveryMs: 1e3
    });
  }
}
const formEventClient = new FormEventClient();
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function getBy(obj, path) {
  const pathObj = makePathArray(path);
  return pathObj.reduce((current, pathPart) => {
    if (current === null) return null;
    if (typeof current !== "undefined") {
      return current[pathPart];
    }
    return void 0;
  }, obj);
}
function setBy(obj, _path, updater) {
  const path = makePathArray(_path);
  function doSet(parent) {
    if (!path.length) {
      return functionalUpdate(updater, parent);
    }
    const key = path.shift();
    if (typeof key === "string" || typeof key === "number" && !Array.isArray(parent)) {
      if (typeof parent === "object") {
        if (parent === null) {
          parent = {};
        }
        return {
          ...parent,
          [key]: doSet(parent[key])
        };
      }
      return {
        [key]: doSet()
      };
    }
    if (Array.isArray(parent) && typeof key === "number") {
      const prefix = parent.slice(0, key);
      return [
        ...prefix.length ? prefix : new Array(key),
        doSet(parent[key]),
        ...parent.slice(key + 1)
      ];
    }
    return [...new Array(key), doSet()];
  }
  return doSet(obj);
}
function deleteBy(obj, _path) {
  const path = makePathArray(_path);
  function doDelete(parent) {
    if (!parent) return;
    if (path.length === 1) {
      const finalPath = path[0];
      if (Array.isArray(parent) && typeof finalPath === "number") {
        return parent.filter((_, i) => i !== finalPath);
      }
      const { [finalPath]: remove, ...rest } = parent;
      return rest;
    }
    const key = path.shift();
    if (typeof key === "string" || typeof key === "number" && !Array.isArray(parent)) {
      if (typeof parent === "object") {
        return {
          ...parent,
          [key]: doDelete(parent[key])
        };
      }
    }
    if (typeof key === "number") {
      if (Array.isArray(parent)) {
        if (key >= parent.length) {
          return parent;
        }
        const prefix = parent.slice(0, key);
        return [
          ...prefix.length ? prefix : new Array(key),
          doDelete(parent[key]),
          ...parent.slice(key + 1)
        ];
      }
    }
    throw new Error("It seems we have created an infinite loop in deleteBy. ");
  }
  return doDelete(obj);
}
const reLineOfOnlyDigits = /^(\d+)$/gm;
const reDigitsBetweenDots = /\.(\d+)(?=\.)/gm;
const reStartWithDigitThenDot = /^(\d+)\./gm;
const reDotWithDigitsToEnd = /\.(\d+$)/gm;
const reMultipleDots = /\.{2,}/gm;
const intPrefix = "__int__";
const intReplace = `${intPrefix}$1`;
function makePathArray(str) {
  if (Array.isArray(str)) {
    return [...str];
  }
  if (typeof str !== "string") {
    throw new Error("Path must be a string.");
  }
  return str.replace(/(^\[)|]/gm, "").replace(/\[/g, ".").replace(reLineOfOnlyDigits, intReplace).replace(reDigitsBetweenDots, `.${intReplace}.`).replace(reStartWithDigitThenDot, `${intReplace}.`).replace(reDotWithDigitsToEnd, `.${intReplace}`).replace(reMultipleDots, ".").split(".").map((d) => {
    if (d.startsWith(intPrefix)) {
      const numStr = d.substring(intPrefix.length);
      const num = parseInt(numStr, 10);
      if (String(num) === numStr) {
        return num;
      }
      return numStr;
    }
    return d;
  });
}
function isNonEmptyArray(obj) {
  return !(Array.isArray(obj) && obj.length === 0);
}
function getSyncValidatorArray(cause, options) {
  const runValidation = (props) => {
    return props.validators.filter(Boolean).map((validator) => {
      return {
        cause: validator.cause,
        validate: validator.fn
      };
    });
  };
  return options.validationLogic({
    form: options.form,
    validators: options.validators,
    event: { type: cause, async: false },
    runValidation
  });
}
function getAsyncValidatorArray(cause, options) {
  const { asyncDebounceMs } = options;
  const {
    onBlurAsyncDebounceMs,
    onChangeAsyncDebounceMs,
    onDynamicAsyncDebounceMs
  } = options.validators || {};
  const defaultDebounceMs = asyncDebounceMs ?? 0;
  const runValidation = (props) => {
    return props.validators.filter(Boolean).map((validator) => {
      const validatorCause = validator?.cause || cause;
      let debounceMs = defaultDebounceMs;
      switch (validatorCause) {
        case "change":
          debounceMs = onChangeAsyncDebounceMs ?? defaultDebounceMs;
          break;
        case "blur":
          debounceMs = onBlurAsyncDebounceMs ?? defaultDebounceMs;
          break;
        case "dynamic":
          debounceMs = onDynamicAsyncDebounceMs ?? defaultDebounceMs;
          break;
        case "submit":
          debounceMs = 0;
          break;
      }
      if (cause === "submit") {
        debounceMs = 0;
      }
      return {
        cause: validatorCause,
        validate: validator.fn,
        debounceMs
      };
    });
  };
  return options.validationLogic({
    form: options.form,
    validators: options.validators,
    event: { type: cause, async: true },
    runValidation
  });
}
const isGlobalFormValidationError = (error) => {
  return !!error && typeof error === "object" && "fields" in error;
};
function evaluate(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  if (objA instanceof Date && objB instanceof Date) {
    return objA.getTime() === objB.getTime();
  }
  if (objA instanceof Map && objB instanceof Map) {
    if (objA.size !== objB.size) return false;
    for (const [k, v] of objA) {
      if (!objB.has(k) || !Object.is(v, objB.get(k))) return false;
    }
    return true;
  }
  if (objA instanceof Set && objB instanceof Set) {
    if (objA.size !== objB.size) return false;
    for (const v of objA) {
      if (!objB.has(v)) return false;
    }
    return true;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (const key of keysA) {
    if (!keysB.includes(key) || !evaluate(objA[key], objB[key])) {
      return false;
    }
  }
  return true;
}
const determineFormLevelErrorSourceAndValue = ({
  newFormValidatorError,
  isPreviousErrorFromFormValidator,
  previousErrorValue
}) => {
  if (newFormValidatorError) {
    return { newErrorValue: newFormValidatorError, newSource: "form" };
  }
  if (isPreviousErrorFromFormValidator) {
    return { newErrorValue: void 0, newSource: void 0 };
  }
  if (previousErrorValue) {
    return { newErrorValue: previousErrorValue, newSource: "field" };
  }
  return { newErrorValue: void 0, newSource: void 0 };
};
const determineFieldLevelErrorSourceAndValue = ({
  formLevelError,
  fieldLevelError
}) => {
  if (fieldLevelError) {
    return { newErrorValue: fieldLevelError, newSource: "field" };
  }
  if (formLevelError) {
    return { newErrorValue: formLevelError, newSource: "form" };
  }
  return { newErrorValue: void 0, newSource: void 0 };
};
function mergeOpts(originalOpts, overrides) {
  if (originalOpts === void 0 || originalOpts === null) {
    return overrides;
  }
  return { ...originalOpts, ...overrides };
}
let IDX = 256;
const HEX = [];
let BUFFER;
while (IDX--) {
  HEX[IDX] = (IDX + 256).toString(16).substring(1);
}
function uuid() {
  let i = 0;
  let num;
  let out = "";
  if (!BUFFER || IDX + 16 > 256) {
    BUFFER = new Array(256);
    i = 256;
    while (i--) {
      BUFFER[i] = 256 * Math.random() | 0;
    }
    i = 0;
    IDX = 0;
  }
  for (; i < 16; i++) {
    num = BUFFER[IDX + i];
    if (i === 6) out += HEX[num & 15 | 64];
    else if (i === 8) out += HEX[num & 63 | 128];
    else out += HEX[num];
    if (i & 1 && i > 1 && i < 11) out += "-";
  }
  IDX++;
  return out;
}
const throttleFormState = liteThrottle(
  (form) => formEventClient.emit("form-state", {
    id: form.formId,
    state: form.store.state
  }),
  {
    wait: 300
  }
);
const defaultValidationLogic = (props) => {
  if (!props.validators) {
    return props.runValidation({
      validators: [],
      form: props.form
    });
  }
  const isAsync = props.event.async;
  const onMountValidator = isAsync ? void 0 : { fn: props.validators.onMount, cause: "mount" };
  const onChangeValidator = {
    fn: isAsync ? props.validators.onChangeAsync : props.validators.onChange,
    cause: "change"
  };
  const onBlurValidator = {
    fn: isAsync ? props.validators.onBlurAsync : props.validators.onBlur,
    cause: "blur"
  };
  const onSubmitValidator = {
    fn: isAsync ? props.validators.onSubmitAsync : props.validators.onSubmit,
    cause: "submit"
  };
  const onServerValidator = isAsync ? void 0 : { fn: () => void 0, cause: "server" };
  switch (props.event.type) {
    case "mount": {
      return props.runValidation({
        validators: [onMountValidator],
        form: props.form
      });
    }
    case "submit": {
      return props.runValidation({
        validators: [
          onChangeValidator,
          onBlurValidator,
          onSubmitValidator,
          onServerValidator
        ],
        form: props.form
      });
    }
    case "server": {
      return props.runValidation({
        validators: [],
        form: props.form
      });
    }
    case "blur": {
      return props.runValidation({
        validators: [onBlurValidator, onServerValidator],
        form: props.form
      });
    }
    case "change": {
      return props.runValidation({
        validators: [onChangeValidator, onServerValidator],
        form: props.form
      });
    }
    default: {
      throw new Error(`Unknown validation event type: ${props.event.type}`);
    }
  }
};
function prefixSchemaToErrors$1(issues, formValue) {
  const schema = /* @__PURE__ */ new Map();
  for (const issue of issues) {
    const issuePath = issue.path ?? [];
    let currentFormValue = formValue;
    let path = "";
    for (let i = 0; i < issuePath.length; i++) {
      const pathSegment = issuePath[i];
      if (pathSegment === void 0) continue;
      const segment = typeof pathSegment === "object" ? pathSegment.key : pathSegment;
      const segmentAsNumber = Number(segment);
      if (Array.isArray(currentFormValue) && !Number.isNaN(segmentAsNumber)) {
        path += `[${segmentAsNumber}]`;
      } else {
        path += (i > 0 ? "." : "") + String(segment);
      }
      if (typeof currentFormValue === "object" && currentFormValue !== null) {
        currentFormValue = currentFormValue[segment];
      } else {
        currentFormValue = void 0;
      }
    }
    schema.set(path, (schema.get(path) ?? []).concat(issue));
  }
  return Object.fromEntries(schema);
}
const transformFormIssues = (issues, formValue) => {
  const schemaErrors = prefixSchemaToErrors$1(issues, formValue);
  return {
    form: schemaErrors,
    fields: schemaErrors
  };
};
const standardSchemaValidators = {
  validate({
    value,
    validationSource
  }, schema) {
    const result = schema["~standard"].validate(value);
    if (result instanceof Promise) {
      throw new Error("async function passed to sync validator");
    }
    if (!result.issues) return;
    if (validationSource === "field")
      return result.issues;
    return transformFormIssues(result.issues, value);
  },
  async validateAsync({
    value,
    validationSource
  }, schema) {
    const result = await schema["~standard"].validate(value);
    if (!result.issues) return;
    if (validationSource === "field")
      return result.issues;
    return transformFormIssues(result.issues, value);
  }
};
const isStandardSchemaValidator = (validator) => !!validator && "~standard" in validator;
const defaultFieldMeta = {
  isValidating: false,
  isTouched: false,
  isBlurred: false,
  isDirty: false,
  isPristine: true,
  isValid: true,
  isDefaultValue: true,
  errors: [],
  errorMap: {},
  errorSourceMap: {}
};
function metaHelper(formApi) {
  function handleArrayMove(field, fromIndex, toIndex) {
    const affectedFields = getAffectedFields(field, fromIndex, "move", toIndex);
    const startIndex = Math.min(fromIndex, toIndex);
    const endIndex = Math.max(fromIndex, toIndex);
    for (let i = startIndex; i <= endIndex; i++) {
      affectedFields.push(getFieldPath(field, i));
    }
    const fromFields = Object.keys(formApi.fieldInfo).reduce(
      (fieldMap, fieldKey) => {
        if (fieldKey.startsWith(getFieldPath(field, fromIndex))) {
          fieldMap.set(
            fieldKey,
            formApi.getFieldMeta(fieldKey)
          );
        }
        return fieldMap;
      },
      /* @__PURE__ */ new Map()
    );
    shiftMeta(affectedFields, fromIndex < toIndex ? "up" : "down");
    Object.keys(formApi.fieldInfo).filter((fieldKey) => fieldKey.startsWith(getFieldPath(field, toIndex))).forEach((fieldKey) => {
      const fromKey = fieldKey.replace(
        getFieldPath(field, toIndex),
        getFieldPath(field, fromIndex)
      );
      const fromMeta = fromFields.get(fromKey);
      if (fromMeta) {
        formApi.setFieldMeta(fieldKey, fromMeta);
      }
    });
  }
  function handleArrayRemove(field, index) {
    const affectedFields = getAffectedFields(field, index, "remove");
    shiftMeta(affectedFields, "up");
  }
  function handleArraySwap(field, index, secondIndex) {
    const affectedFields = getAffectedFields(field, index, "swap", secondIndex);
    affectedFields.forEach((fieldKey) => {
      if (!fieldKey.toString().startsWith(getFieldPath(field, index))) {
        return;
      }
      const swappedKey = fieldKey.toString().replace(
        getFieldPath(field, index),
        getFieldPath(field, secondIndex)
      );
      const [meta1, meta2] = [
        formApi.getFieldMeta(fieldKey),
        formApi.getFieldMeta(swappedKey)
      ];
      if (meta1) formApi.setFieldMeta(swappedKey, meta1);
      if (meta2) formApi.setFieldMeta(fieldKey, meta2);
    });
  }
  function handleArrayInsert(field, insertIndex) {
    const affectedFields = getAffectedFields(field, insertIndex, "insert");
    shiftMeta(affectedFields, "down");
    affectedFields.forEach((fieldKey) => {
      if (fieldKey.toString().startsWith(getFieldPath(field, insertIndex))) {
        formApi.setFieldMeta(fieldKey, getEmptyFieldMeta());
      }
    });
  }
  function getFieldPath(field, index) {
    return `${field}[${index}]`;
  }
  function getAffectedFields(field, index, mode, secondIndex) {
    const affectedFieldKeys = [getFieldPath(field, index)];
    switch (mode) {
      case "swap":
        affectedFieldKeys.push(getFieldPath(field, secondIndex));
        break;
      case "move": {
        const [startIndex, endIndex] = [
          Math.min(index, secondIndex),
          Math.max(index, secondIndex)
        ];
        for (let i = startIndex; i <= endIndex; i++) {
          affectedFieldKeys.push(getFieldPath(field, i));
        }
        break;
      }
      default: {
        const currentValue = formApi.getFieldValue(field);
        const fieldItems = Array.isArray(currentValue) ? currentValue.length : 0;
        for (let i = index + 1; i < fieldItems; i++) {
          affectedFieldKeys.push(getFieldPath(field, i));
        }
        break;
      }
    }
    return Object.keys(formApi.fieldInfo).filter(
      (fieldKey) => affectedFieldKeys.some((key) => fieldKey.startsWith(key))
    );
  }
  function updateIndex(fieldKey, direction) {
    return fieldKey.replace(/\[(\d+)\]/, (_, num) => {
      const currIndex = parseInt(num, 10);
      const newIndex = direction === "up" ? currIndex + 1 : Math.max(0, currIndex - 1);
      return `[${newIndex}]`;
    });
  }
  function shiftMeta(fields, direction) {
    const sortedFields = direction === "up" ? fields : [...fields].reverse();
    sortedFields.forEach((fieldKey) => {
      const nextFieldKey = updateIndex(fieldKey.toString(), direction);
      const nextFieldMeta = formApi.getFieldMeta(nextFieldKey);
      if (nextFieldMeta) {
        formApi.setFieldMeta(fieldKey, nextFieldMeta);
      } else {
        formApi.setFieldMeta(fieldKey, getEmptyFieldMeta());
      }
    });
  }
  const getEmptyFieldMeta = () => defaultFieldMeta;
  return {
    handleArrayMove,
    handleArrayRemove,
    handleArraySwap,
    handleArrayInsert
  };
}
function getDefaultFormState(defaultState) {
  return {
    values: defaultState.values ?? {},
    errorMap: defaultState.errorMap ?? {},
    fieldMetaBase: defaultState.fieldMetaBase ?? {},
    isSubmitted: defaultState.isSubmitted ?? false,
    isSubmitting: defaultState.isSubmitting ?? false,
    isValidating: defaultState.isValidating ?? false,
    submissionAttempts: defaultState.submissionAttempts ?? 0,
    isSubmitSuccessful: defaultState.isSubmitSuccessful ?? false,
    validationMetaMap: defaultState.validationMetaMap ?? {
      onChange: void 0,
      onBlur: void 0,
      onSubmit: void 0,
      onMount: void 0,
      onServer: void 0,
      onDynamic: void 0
    }
  };
}
class FormApi {
  /**
   * Constructs a new `FormApi` instance with the given form options.
   */
  constructor(opts) {
    this.options = {};
    this.fieldInfo = {};
    this.prevTransformArray = [];
    this.mount = () => {
      const cleanupFieldMetaDerived = this.fieldMetaDerived.mount();
      const cleanupStoreDerived = this.store.mount();
      const cleanupDevtoolBroadcast = this.store.subscribe(() => {
        throttleFormState(this);
      });
      const cleanupFormStateListener = formEventClient.on(
        "request-form-state",
        (e) => {
          if (e.payload.id === this._formId) {
            formEventClient.emit("form-api", {
              id: this._formId,
              state: this.store.state,
              options: this.options
            });
          }
        }
      );
      const cleanupFormResetListener = formEventClient.on(
        "request-form-reset",
        (e) => {
          if (e.payload.id === this._formId) {
            this.reset();
          }
        }
      );
      const cleanupFormForceSubmitListener = formEventClient.on(
        "request-form-force-submit",
        (e) => {
          if (e.payload.id === this._formId) {
            this._devtoolsSubmissionOverride = true;
            this.handleSubmit();
            this._devtoolsSubmissionOverride = false;
          }
        }
      );
      const cleanup = () => {
        cleanupFormForceSubmitListener();
        cleanupFormResetListener();
        cleanupFormStateListener();
        cleanupDevtoolBroadcast();
        cleanupFieldMetaDerived();
        cleanupStoreDerived();
        formEventClient.emit("form-unmounted", {
          id: this._formId
        });
      };
      this.options.listeners?.onMount?.({ formApi: this });
      const { onMount } = this.options.validators || {};
      formEventClient.emit("form-api", {
        id: this._formId,
        state: this.store.state,
        options: this.options
      });
      if (!onMount) return cleanup;
      this.validateSync("mount");
      return cleanup;
    };
    this.update = (options) => {
      if (!options) return;
      const oldOptions = this.options;
      this.options = options;
      const shouldUpdateReeval = !!options.transform?.deps?.some(
        (val, i) => val !== this.prevTransformArray[i]
      );
      const shouldUpdateValues = options.defaultValues && !evaluate(options.defaultValues, oldOptions.defaultValues) && !this.state.isTouched;
      const shouldUpdateState = !evaluate(options.defaultState, oldOptions.defaultState) && !this.state.isTouched;
      if (!shouldUpdateValues && !shouldUpdateState && !shouldUpdateReeval) return;
      batch(() => {
        this.baseStore.setState(
          () => getDefaultFormState(
            Object.assign(
              {},
              this.state,
              shouldUpdateState ? options.defaultState : {},
              shouldUpdateValues ? {
                values: options.defaultValues
              } : {},
              shouldUpdateReeval ? { _force_re_eval: !this.state._force_re_eval } : {}
            )
          )
        );
      });
      formEventClient.emit("form-api", {
        id: this._formId,
        state: this.store.state,
        options: this.options
      });
    };
    this.reset = (values, opts2) => {
      const { fieldMeta: currentFieldMeta } = this.state;
      const fieldMetaBase = this.resetFieldMeta(currentFieldMeta);
      if (values && !opts2?.keepDefaultValues) {
        this.options = {
          ...this.options,
          defaultValues: values
        };
      }
      this.baseStore.setState(
        () => getDefaultFormState({
          ...this.options.defaultState,
          values: values ?? this.options.defaultValues ?? this.options.defaultState?.values,
          fieldMetaBase
        })
      );
    };
    this.validateAllFields = async (cause) => {
      const fieldValidationPromises = [];
      batch(() => {
        void Object.values(this.fieldInfo).forEach(
          (field) => {
            if (!field.instance) return;
            const fieldInstance = field.instance;
            fieldValidationPromises.push(
              // Remember, `validate` is either a sync operation or a promise
              Promise.resolve().then(
                () => fieldInstance.validate(cause, { skipFormValidation: true })
              )
            );
            if (!field.instance.state.meta.isTouched) {
              field.instance.setMeta((prev) => ({ ...prev, isTouched: true }));
            }
          }
        );
      });
      const fieldErrorMapMap = await Promise.all(fieldValidationPromises);
      return fieldErrorMapMap.flat();
    };
    this.validateArrayFieldsStartingFrom = async (field, index, cause) => {
      const currentValue = this.getFieldValue(field);
      const lastIndex = Array.isArray(currentValue) ? Math.max(currentValue.length - 1, 0) : null;
      const fieldKeysToValidate = [`${field}[${index}]`];
      for (let i = index + 1; i <= (lastIndex ?? 0); i++) {
        fieldKeysToValidate.push(`${field}[${i}]`);
      }
      const fieldsToValidate = Object.keys(this.fieldInfo).filter(
        (fieldKey) => fieldKeysToValidate.some((key) => fieldKey.startsWith(key))
      );
      const fieldValidationPromises = [];
      batch(() => {
        fieldsToValidate.forEach((nestedField) => {
          fieldValidationPromises.push(
            Promise.resolve().then(() => this.validateField(nestedField, cause))
          );
        });
      });
      const fieldErrorMapMap = await Promise.all(fieldValidationPromises);
      return fieldErrorMapMap.flat();
    };
    this.validateField = (field, cause) => {
      const fieldInstance = this.fieldInfo[field]?.instance;
      if (!fieldInstance) return [];
      if (!fieldInstance.state.meta.isTouched) {
        fieldInstance.setMeta((prev) => ({ ...prev, isTouched: true }));
      }
      return fieldInstance.validate(cause);
    };
    this.validateSync = (cause) => {
      const validates = getSyncValidatorArray(cause, {
        ...this.options,
        form: this,
        validationLogic: this.options.validationLogic || defaultValidationLogic
      });
      let hasErrored = false;
      const currentValidationErrorMap = {};
      batch(() => {
        for (const validateObj of validates) {
          if (!validateObj.validate) continue;
          const rawError = this.runValidator({
            validate: validateObj.validate,
            value: {
              value: this.state.values,
              formApi: this,
              validationSource: "form"
            },
            type: "validate"
          });
          const { formError, fieldErrors } = normalizeError$1(rawError);
          const errorMapKey = getErrorMapKey$1(validateObj.cause);
          const allFieldsToProcess = /* @__PURE__ */ new Set([
            ...Object.keys(this.state.fieldMeta),
            ...Object.keys(fieldErrors || {})
          ]);
          for (const field of allFieldsToProcess) {
            if (this.baseStore.state.fieldMetaBase[field] === void 0 && !fieldErrors?.[field]) {
              continue;
            }
            const fieldMeta = this.getFieldMeta(field) ?? defaultFieldMeta;
            const {
              errorMap: currentErrorMap,
              errorSourceMap: currentErrorMapSource
            } = fieldMeta;
            const newFormValidatorError = fieldErrors?.[field];
            const { newErrorValue, newSource } = determineFormLevelErrorSourceAndValue({
              newFormValidatorError,
              isPreviousErrorFromFormValidator: (
                // These conditional checks are required, otherwise we get runtime errors.
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                currentErrorMapSource?.[errorMapKey] === "form"
              ),
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              previousErrorValue: currentErrorMap?.[errorMapKey]
            });
            if (newSource === "form") {
              currentValidationErrorMap[field] = {
                ...currentValidationErrorMap[field],
                [errorMapKey]: newFormValidatorError
              };
            }
            if (currentErrorMap?.[errorMapKey] !== newErrorValue) {
              this.setFieldMeta(field, (prev = defaultFieldMeta) => ({
                ...prev,
                errorMap: {
                  ...prev.errorMap,
                  [errorMapKey]: newErrorValue
                },
                errorSourceMap: {
                  ...prev.errorSourceMap,
                  [errorMapKey]: newSource
                }
              }));
            }
          }
          if (this.state.errorMap?.[errorMapKey] !== formError) {
            this.baseStore.setState((prev) => ({
              ...prev,
              errorMap: {
                ...prev.errorMap,
                [errorMapKey]: formError
              }
            }));
          }
          if (formError || fieldErrors) {
            hasErrored = true;
          }
        }
        const submitErrKey = getErrorMapKey$1("submit");
        if (
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          this.state.errorMap?.[submitErrKey] && cause !== "submit" && !hasErrored
        ) {
          this.baseStore.setState((prev) => ({
            ...prev,
            errorMap: {
              ...prev.errorMap,
              [submitErrKey]: void 0
            }
          }));
        }
        const serverErrKey = getErrorMapKey$1("server");
        if (
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          this.state.errorMap?.[serverErrKey] && cause !== "server" && !hasErrored
        ) {
          this.baseStore.setState((prev) => ({
            ...prev,
            errorMap: {
              ...prev.errorMap,
              [serverErrKey]: void 0
            }
          }));
        }
      });
      return { hasErrored, fieldsErrorMap: currentValidationErrorMap };
    };
    this.validateAsync = async (cause) => {
      const validates = getAsyncValidatorArray(cause, {
        ...this.options,
        form: this,
        validationLogic: this.options.validationLogic || defaultValidationLogic
      });
      if (!this.state.isFormValidating) {
        this.baseStore.setState((prev) => ({ ...prev, isFormValidating: true }));
      }
      const promises = [];
      let fieldErrorsFromFormValidators;
      for (const validateObj of validates) {
        if (!validateObj.validate) continue;
        const key = getErrorMapKey$1(validateObj.cause);
        const fieldValidatorMeta = this.state.validationMetaMap[key];
        fieldValidatorMeta?.lastAbortController.abort();
        const controller = new AbortController();
        this.state.validationMetaMap[key] = {
          lastAbortController: controller
        };
        promises.push(
          new Promise(async (resolve) => {
            let rawError;
            try {
              rawError = await new Promise((rawResolve, rawReject) => {
                setTimeout(async () => {
                  if (controller.signal.aborted) return rawResolve(void 0);
                  try {
                    rawResolve(
                      await this.runValidator({
                        validate: validateObj.validate,
                        value: {
                          value: this.state.values,
                          formApi: this,
                          validationSource: "form",
                          signal: controller.signal
                        },
                        type: "validateAsync"
                      })
                    );
                  } catch (e) {
                    rawReject(e);
                  }
                }, validateObj.debounceMs);
              });
            } catch (e) {
              rawError = e;
            }
            const { formError, fieldErrors: fieldErrorsFromNormalizeError } = normalizeError$1(rawError);
            if (fieldErrorsFromNormalizeError) {
              fieldErrorsFromFormValidators = fieldErrorsFromFormValidators ? {
                ...fieldErrorsFromFormValidators,
                ...fieldErrorsFromNormalizeError
              } : fieldErrorsFromNormalizeError;
            }
            const errorMapKey = getErrorMapKey$1(validateObj.cause);
            for (const field of Object.keys(
              this.state.fieldMeta
            )) {
              if (this.baseStore.state.fieldMetaBase[field] === void 0) {
                continue;
              }
              const fieldMeta = this.getFieldMeta(field);
              if (!fieldMeta) continue;
              const {
                errorMap: currentErrorMap,
                errorSourceMap: currentErrorMapSource
              } = fieldMeta;
              const newFormValidatorError = fieldErrorsFromFormValidators?.[field];
              const { newErrorValue, newSource } = determineFormLevelErrorSourceAndValue({
                newFormValidatorError,
                isPreviousErrorFromFormValidator: (
                  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                  currentErrorMapSource?.[errorMapKey] === "form"
                ),
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                previousErrorValue: currentErrorMap?.[errorMapKey]
              });
              if (
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                currentErrorMap?.[errorMapKey] !== newErrorValue
              ) {
                this.setFieldMeta(field, (prev) => ({
                  ...prev,
                  errorMap: {
                    ...prev.errorMap,
                    [errorMapKey]: newErrorValue
                  },
                  errorSourceMap: {
                    ...prev.errorSourceMap,
                    [errorMapKey]: newSource
                  }
                }));
              }
            }
            this.baseStore.setState((prev) => ({
              ...prev,
              errorMap: {
                ...prev.errorMap,
                [errorMapKey]: formError
              }
            }));
            resolve(
              fieldErrorsFromFormValidators ? { fieldErrors: fieldErrorsFromFormValidators, errorMapKey } : void 0
            );
          })
        );
      }
      let results = [];
      const fieldsErrorMap = {};
      if (promises.length) {
        results = await Promise.all(promises);
        for (const fieldValidationResult of results) {
          if (fieldValidationResult?.fieldErrors) {
            const { errorMapKey } = fieldValidationResult;
            for (const [field, fieldError] of Object.entries(
              fieldValidationResult.fieldErrors
            )) {
              const oldErrorMap = fieldsErrorMap[field] || {};
              const newErrorMap = {
                ...oldErrorMap,
                [errorMapKey]: fieldError
              };
              fieldsErrorMap[field] = newErrorMap;
            }
          }
        }
      }
      this.baseStore.setState((prev) => ({
        ...prev,
        isFormValidating: false
      }));
      return fieldsErrorMap;
    };
    this.validate = (cause) => {
      const { hasErrored, fieldsErrorMap } = this.validateSync(cause);
      if (hasErrored && !this.options.asyncAlways) {
        return fieldsErrorMap;
      }
      return this.validateAsync(cause);
    };
    this._handleSubmit = async (submitMeta) => {
      this.baseStore.setState((old) => ({
        ...old,
        // Submission attempts mark the form as not submitted
        isSubmitted: false,
        // Count submission attempts
        submissionAttempts: old.submissionAttempts + 1,
        isSubmitSuccessful: false
        // Reset isSubmitSuccessful at the start of submission
      }));
      batch(() => {
        void Object.values(this.fieldInfo).forEach(
          (field) => {
            if (!field.instance) return;
            if (!field.instance.state.meta.isTouched) {
              field.instance.setMeta((prev) => ({ ...prev, isTouched: true }));
            }
          }
        );
      });
      const submitMetaArg = submitMeta ?? this.options.onSubmitMeta;
      if (!this.state.canSubmit && !this._devtoolsSubmissionOverride) {
        this.options.onSubmitInvalid?.({
          value: this.state.values,
          formApi: this,
          meta: submitMetaArg
        });
        return;
      }
      this.baseStore.setState((d) => ({ ...d, isSubmitting: true }));
      const done = () => {
        this.baseStore.setState((prev) => ({ ...prev, isSubmitting: false }));
      };
      await this.validateAllFields("submit");
      if (!this.state.isFieldsValid) {
        done();
        this.options.onSubmitInvalid?.({
          value: this.state.values,
          formApi: this,
          meta: submitMetaArg
        });
        formEventClient.emit("form-submission", {
          id: this._formId,
          submissionAttempt: this.state.submissionAttempts,
          successful: false,
          stage: "validateAllFields",
          errors: Object.values(this.state.fieldMeta).map((meta) => meta.errors).flat()
        });
        return;
      }
      await this.validate("submit");
      if (!this.state.isValid) {
        done();
        this.options.onSubmitInvalid?.({
          value: this.state.values,
          formApi: this,
          meta: submitMetaArg
        });
        formEventClient.emit("form-submission", {
          id: this._formId,
          submissionAttempt: this.state.submissionAttempts,
          successful: false,
          stage: "validate",
          errors: this.state.errors
        });
        return;
      }
      batch(() => {
        void Object.values(this.fieldInfo).forEach(
          (field) => {
            field.instance?.options.listeners?.onSubmit?.({
              value: field.instance.state.value,
              fieldApi: field.instance
            });
          }
        );
      });
      this.options.listeners?.onSubmit?.({ formApi: this, meta: submitMetaArg });
      try {
        await this.options.onSubmit?.({
          value: this.state.values,
          formApi: this,
          meta: submitMetaArg
        });
        batch(() => {
          this.baseStore.setState((prev) => ({
            ...prev,
            isSubmitted: true,
            isSubmitSuccessful: true
            // Set isSubmitSuccessful to true on successful submission
          }));
          formEventClient.emit("form-submission", {
            id: this._formId,
            submissionAttempt: this.state.submissionAttempts,
            successful: true
          });
          done();
        });
      } catch (err) {
        this.baseStore.setState((prev) => ({
          ...prev,
          isSubmitSuccessful: false
          // Ensure isSubmitSuccessful is false if an error occurs
        }));
        formEventClient.emit("form-submission", {
          id: this._formId,
          submissionAttempt: this.state.submissionAttempts,
          successful: false,
          stage: "inflight",
          onError: err
        });
        done();
        throw err;
      }
    };
    this.getFieldValue = (field) => getBy(this.state.values, field);
    this.getFieldMeta = (field) => {
      return this.state.fieldMeta[field];
    };
    this.getFieldInfo = (field) => {
      return this.fieldInfo[field] ||= {
        instance: null,
        validationMetaMap: {
          onChange: void 0,
          onBlur: void 0,
          onSubmit: void 0,
          onMount: void 0,
          onServer: void 0,
          onDynamic: void 0
        }
      };
    };
    this.setFieldMeta = (field, updater) => {
      this.baseStore.setState((prev) => {
        return {
          ...prev,
          fieldMetaBase: {
            ...prev.fieldMetaBase,
            [field]: functionalUpdate(
              updater,
              prev.fieldMetaBase[field]
            )
          }
        };
      });
    };
    this.resetFieldMeta = (fieldMeta) => {
      return Object.keys(fieldMeta).reduce(
        (acc, key) => {
          const fieldKey = key;
          acc[fieldKey] = defaultFieldMeta;
          return acc;
        },
        {}
      );
    };
    this.setFieldValue = (field, updater, opts2) => {
      const dontUpdateMeta = opts2?.dontUpdateMeta ?? false;
      const dontRunListeners = opts2?.dontRunListeners ?? false;
      const dontValidate = opts2?.dontValidate ?? false;
      batch(() => {
        if (!dontUpdateMeta) {
          this.setFieldMeta(field, (prev) => ({
            ...prev,
            isTouched: true,
            isDirty: true,
            errorMap: {
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              ...prev?.errorMap,
              onMount: void 0
            }
          }));
        }
        this.baseStore.setState((prev) => {
          return {
            ...prev,
            values: setBy(prev.values, field, updater)
          };
        });
      });
      if (!dontRunListeners) {
        this.getFieldInfo(field).instance?.triggerOnChangeListener();
      }
      if (!dontValidate) {
        this.validateField(field, "change");
      }
    };
    this.deleteField = (field) => {
      const subFieldsToDelete = Object.keys(this.fieldInfo).filter((f) => {
        const fieldStr = field.toString();
        return f !== fieldStr && f.startsWith(fieldStr);
      });
      const fieldsToDelete = [...subFieldsToDelete, field];
      this.baseStore.setState((prev) => {
        const newState = { ...prev };
        fieldsToDelete.forEach((f) => {
          newState.values = deleteBy(newState.values, f);
          delete this.fieldInfo[f];
          delete newState.fieldMetaBase[f];
        });
        return newState;
      });
    };
    this.pushFieldValue = (field, value, options) => {
      this.setFieldValue(
        field,
        (prev) => [...Array.isArray(prev) ? prev : [], value],
        options
      );
    };
    this.insertFieldValue = async (field, index, value, options) => {
      this.setFieldValue(
        field,
        (prev) => {
          return [
            ...prev.slice(0, index),
            value,
            ...prev.slice(index)
          ];
        },
        mergeOpts(options, { dontValidate: true })
      );
      const dontValidate = options?.dontValidate ?? false;
      if (!dontValidate) {
        await this.validateField(field, "change");
      }
      metaHelper(this).handleArrayInsert(field, index);
      if (!dontValidate) {
        await this.validateArrayFieldsStartingFrom(field, index, "change");
      }
    };
    this.replaceFieldValue = async (field, index, value, options) => {
      this.setFieldValue(
        field,
        (prev) => {
          return prev.map(
            (d, i) => i === index ? value : d
          );
        },
        mergeOpts(options, { dontValidate: true })
      );
      const dontValidate = options?.dontValidate ?? false;
      if (!dontValidate) {
        await this.validateField(field, "change");
        await this.validateArrayFieldsStartingFrom(field, index, "change");
      }
    };
    this.removeFieldValue = async (field, index, options) => {
      const fieldValue = this.getFieldValue(field);
      const lastIndex = Array.isArray(fieldValue) ? Math.max(fieldValue.length - 1, 0) : null;
      this.setFieldValue(
        field,
        (prev) => {
          return prev.filter(
            (_d, i) => i !== index
          );
        },
        mergeOpts(options, { dontValidate: true })
      );
      metaHelper(this).handleArrayRemove(field, index);
      if (lastIndex !== null) {
        const start = `${field}[${lastIndex}]`;
        this.deleteField(start);
      }
      const dontValidate = options?.dontValidate ?? false;
      if (!dontValidate) {
        await this.validateField(field, "change");
        await this.validateArrayFieldsStartingFrom(field, index, "change");
      }
    };
    this.swapFieldValues = (field, index1, index2, options) => {
      this.setFieldValue(
        field,
        (prev) => {
          const prev1 = prev[index1];
          const prev2 = prev[index2];
          return setBy(setBy(prev, `${index1}`, prev2), `${index2}`, prev1);
        },
        mergeOpts(options, { dontValidate: true })
      );
      metaHelper(this).handleArraySwap(field, index1, index2);
      const dontValidate = options?.dontValidate ?? false;
      if (!dontValidate) {
        this.validateField(field, "change");
        this.validateField(`${field}[${index1}]`, "change");
        this.validateField(`${field}[${index2}]`, "change");
      }
    };
    this.moveFieldValues = (field, index1, index2, options) => {
      this.setFieldValue(
        field,
        (prev) => {
          const next = [...prev];
          next.splice(index2, 0, next.splice(index1, 1)[0]);
          return next;
        },
        mergeOpts(options, { dontValidate: true })
      );
      metaHelper(this).handleArrayMove(field, index1, index2);
      const dontValidate = options?.dontValidate ?? false;
      if (!dontValidate) {
        this.validateField(field, "change");
        this.validateField(`${field}[${index1}]`, "change");
        this.validateField(`${field}[${index2}]`, "change");
      }
    };
    this.clearFieldValues = (field, options) => {
      const fieldValue = this.getFieldValue(field);
      const lastIndex = Array.isArray(fieldValue) ? Math.max(fieldValue.length - 1, 0) : null;
      this.setFieldValue(
        field,
        [],
        mergeOpts(options, { dontValidate: true })
      );
      if (lastIndex !== null) {
        for (let i = 0; i <= lastIndex; i++) {
          const fieldKey = `${field}[${i}]`;
          this.deleteField(fieldKey);
        }
      }
      const dontValidate = options?.dontValidate ?? false;
      if (!dontValidate) {
        this.validateField(field, "change");
      }
    };
    this.resetField = (field) => {
      this.baseStore.setState((prev) => {
        return {
          ...prev,
          fieldMetaBase: {
            ...prev.fieldMetaBase,
            [field]: defaultFieldMeta
          },
          values: this.options.defaultValues ? setBy(prev.values, field, getBy(this.options.defaultValues, field)) : prev.values
        };
      });
    };
    this.setErrorMap = (errorMap) => {
      batch(() => {
        Object.entries(errorMap).forEach(([key, value]) => {
          const errorMapKey = key;
          if (isGlobalFormValidationError(value)) {
            const { formError, fieldErrors } = normalizeError$1(value);
            for (const fieldName of Object.keys(
              this.fieldInfo
            )) {
              const fieldMeta = this.getFieldMeta(fieldName);
              if (!fieldMeta) continue;
              this.setFieldMeta(fieldName, (prev) => ({
                ...prev,
                errorMap: {
                  ...prev.errorMap,
                  [errorMapKey]: fieldErrors?.[fieldName]
                },
                errorSourceMap: {
                  ...prev.errorSourceMap,
                  [errorMapKey]: "form"
                }
              }));
            }
            this.baseStore.setState((prev) => ({
              ...prev,
              errorMap: {
                ...prev.errorMap,
                [errorMapKey]: formError
              }
            }));
          } else {
            this.baseStore.setState((prev) => ({
              ...prev,
              errorMap: {
                ...prev.errorMap,
                [errorMapKey]: value
              }
            }));
          }
        });
      });
    };
    this.getAllErrors = () => {
      return {
        form: {
          errors: this.state.errors,
          errorMap: this.state.errorMap
        },
        fields: Object.entries(this.state.fieldMeta).reduce(
          (acc, [fieldName, fieldMeta]) => {
            if (Object.keys(fieldMeta).length && fieldMeta.errors.length) {
              acc[fieldName] = {
                errors: fieldMeta.errors,
                errorMap: fieldMeta.errorMap
              };
            }
            return acc;
          },
          {}
        )
      };
    };
    this.parseValuesWithSchema = (schema) => {
      return standardSchemaValidators.validate(
        { value: this.state.values, validationSource: "form" },
        schema
      );
    };
    this.parseValuesWithSchemaAsync = (schema) => {
      return standardSchemaValidators.validateAsync(
        { value: this.state.values, validationSource: "form" },
        schema
      );
    };
    this.timeoutIds = {
      validations: {},
      listeners: {},
      formListeners: {}
    };
    this._formId = opts?.formId ?? uuid();
    this._devtoolsSubmissionOverride = false;
    this.baseStore = new Store(
      getDefaultFormState({
        ...opts?.defaultState,
        values: opts?.defaultValues ?? opts?.defaultState?.values
      })
    );
    this.fieldMetaDerived = new Derived({
      deps: [this.baseStore],
      fn: ({ prevDepVals, currDepVals, prevVal: _prevVal }) => {
        const prevVal = _prevVal;
        const prevBaseStore = prevDepVals?.[0];
        const currBaseStore = currDepVals[0];
        let originalMetaCount = 0;
        const fieldMeta = {};
        for (const fieldName of Object.keys(
          currBaseStore.fieldMetaBase
        )) {
          const currBaseMeta = currBaseStore.fieldMetaBase[fieldName];
          const prevBaseMeta = prevBaseStore?.fieldMetaBase[fieldName];
          const prevFieldInfo = prevVal?.[fieldName];
          const curFieldVal = getBy(currBaseStore.values, fieldName);
          let fieldErrors = prevFieldInfo?.errors;
          if (!prevBaseMeta || currBaseMeta.errorMap !== prevBaseMeta.errorMap) {
            fieldErrors = Object.values(currBaseMeta.errorMap ?? {}).filter(
              (val) => val !== void 0
            );
            const fieldInstance = this.getFieldInfo(fieldName)?.instance;
            if (fieldInstance && !fieldInstance.options.disableErrorFlat) {
              fieldErrors = fieldErrors.flat(1);
            }
          }
          const isFieldValid = !isNonEmptyArray(fieldErrors);
          const isFieldPristine = !currBaseMeta.isDirty;
          const isDefaultValue = evaluate(
            curFieldVal,
            getBy(this.options.defaultValues, fieldName)
          ) || evaluate(
            curFieldVal,
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            this.getFieldInfo(fieldName)?.instance?.options.defaultValue
          );
          if (prevFieldInfo && prevFieldInfo.isPristine === isFieldPristine && prevFieldInfo.isValid === isFieldValid && prevFieldInfo.isDefaultValue === isDefaultValue && prevFieldInfo.errors === fieldErrors && currBaseMeta === prevBaseMeta) {
            fieldMeta[fieldName] = prevFieldInfo;
            originalMetaCount++;
            continue;
          }
          fieldMeta[fieldName] = {
            ...currBaseMeta,
            errors: fieldErrors ?? [],
            isPristine: isFieldPristine,
            isValid: isFieldValid,
            isDefaultValue
          };
        }
        if (!Object.keys(currBaseStore.fieldMetaBase).length) return fieldMeta;
        if (prevVal && originalMetaCount === Object.keys(currBaseStore.fieldMetaBase).length) {
          return prevVal;
        }
        return fieldMeta;
      }
    });
    this.store = new Derived({
      deps: [this.baseStore, this.fieldMetaDerived],
      fn: ({ prevDepVals, currDepVals, prevVal: _prevVal }) => {
        const prevVal = _prevVal;
        const prevBaseStore = prevDepVals?.[0];
        const currBaseStore = currDepVals[0];
        const currFieldMeta = currDepVals[1];
        const fieldMetaValues = Object.values(currFieldMeta).filter(
          Boolean
        );
        const isFieldsValidating = fieldMetaValues.some(
          (field) => field.isValidating
        );
        const isFieldsValid = fieldMetaValues.every((field) => field.isValid);
        const isTouched = fieldMetaValues.some((field) => field.isTouched);
        const isBlurred = fieldMetaValues.some((field) => field.isBlurred);
        const isDefaultValue = fieldMetaValues.every(
          (field) => field.isDefaultValue
        );
        const shouldInvalidateOnMount = (
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          isTouched && currBaseStore.errorMap?.onMount
        );
        const isDirty = fieldMetaValues.some((field) => field.isDirty);
        const isPristine = !isDirty;
        const hasOnMountError = Boolean(
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          currBaseStore.errorMap?.onMount || // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          fieldMetaValues.some((f) => f?.errorMap?.onMount)
        );
        const isValidating = !!isFieldsValidating;
        let errors = prevVal?.errors ?? [];
        if (!prevBaseStore || currBaseStore.errorMap !== prevBaseStore.errorMap) {
          errors = Object.values(currBaseStore.errorMap).reduce((prev, curr) => {
            if (curr === void 0) return prev;
            if (curr && isGlobalFormValidationError(curr)) {
              prev.push(curr.form);
              return prev;
            }
            prev.push(curr);
            return prev;
          }, []);
        }
        const isFormValid = errors.length === 0;
        const isValid = isFieldsValid && isFormValid;
        const submitInvalid = this.options.canSubmitWhenInvalid ?? false;
        const canSubmit = currBaseStore.submissionAttempts === 0 && !isTouched && !hasOnMountError || !isValidating && !currBaseStore.isSubmitting && isValid || submitInvalid;
        let errorMap = currBaseStore.errorMap;
        if (shouldInvalidateOnMount) {
          errors = errors.filter(
            (err) => err !== currBaseStore.errorMap.onMount
          );
          errorMap = Object.assign(errorMap, { onMount: void 0 });
        }
        if (prevVal && prevBaseStore && prevVal.errorMap === errorMap && prevVal.fieldMeta === this.fieldMetaDerived.state && prevVal.errors === errors && prevVal.isFieldsValidating === isFieldsValidating && prevVal.isFieldsValid === isFieldsValid && prevVal.isFormValid === isFormValid && prevVal.isValid === isValid && prevVal.canSubmit === canSubmit && prevVal.isTouched === isTouched && prevVal.isBlurred === isBlurred && prevVal.isPristine === isPristine && prevVal.isDefaultValue === isDefaultValue && prevVal.isDirty === isDirty && evaluate(prevBaseStore, currBaseStore)) {
          return prevVal;
        }
        let state = {
          ...currBaseStore,
          errorMap,
          fieldMeta: this.fieldMetaDerived.state,
          errors,
          isFieldsValidating,
          isFieldsValid,
          isFormValid,
          isValid,
          canSubmit,
          isTouched,
          isBlurred,
          isPristine,
          isDefaultValue,
          isDirty
        };
        const transformArray = this.options.transform?.deps ?? [];
        const shouldTransform = transformArray.length !== this.prevTransformArray.length || transformArray.some((val, i) => val !== this.prevTransformArray[i]);
        if (shouldTransform) {
          const newObj = Object.assign({}, this, { state });
          this.options.transform?.fn(newObj);
          state = newObj.state;
          this.prevTransformArray = transformArray;
        }
        return state;
      }
    });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update(opts || {});
  }
  get state() {
    return this.store.state;
  }
  get formId() {
    return this._formId;
  }
  /**
   * @private
   */
  runValidator(props) {
    if (isStandardSchemaValidator(props.validate)) {
      return standardSchemaValidators[props.type](
        props.value,
        props.validate
      );
    }
    return props.validate(props.value);
  }
  handleSubmit(submitMeta) {
    return this._handleSubmit(submitMeta);
  }
}
function normalizeError$1(rawError) {
  if (rawError) {
    if (isGlobalFormValidationError(rawError)) {
      const formError = normalizeError$1(rawError.form).formError;
      const fieldErrors = rawError.fields;
      return { formError, fieldErrors };
    }
    return { formError: rawError };
  }
  return { formError: void 0 };
}
function getErrorMapKey$1(cause) {
  switch (cause) {
    case "submit":
      return "onSubmit";
    case "blur":
      return "onBlur";
    case "mount":
      return "onMount";
    case "server":
      return "onServer";
    case "dynamic":
      return "onDynamic";
    case "change":
    default:
      return "onChange";
  }
}
class FieldApi {
  /**
   * Initializes a new `FieldApi` instance.
   */
  constructor(opts) {
    this.options = {};
    this.mount = () => {
      const cleanup = this.store.mount();
      if (this.options.defaultValue !== void 0 && !this.getMeta().isTouched) {
        this.form.setFieldValue(this.name, this.options.defaultValue, {
          dontUpdateMeta: true
        });
      }
      const info = this.getInfo();
      info.instance = this;
      this.update(this.options);
      const { onMount } = this.options.validators || {};
      if (onMount) {
        const error = this.runValidator({
          validate: onMount,
          value: {
            value: this.state.value,
            fieldApi: this,
            validationSource: "field"
          },
          type: "validate"
        });
        if (error) {
          this.setMeta(
            (prev) => ({
              ...prev,
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              errorMap: { ...prev?.errorMap, onMount: error },
              errorSourceMap: {
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                ...prev?.errorSourceMap,
                onMount: "field"
              }
            })
          );
        }
      }
      this.options.listeners?.onMount?.({
        value: this.state.value,
        fieldApi: this
      });
      return cleanup;
    };
    this.update = (opts2) => {
      this.options = opts2;
      this.name = opts2.name;
      if (!this.state.meta.isTouched && this.options.defaultValue !== void 0) {
        const formField = this.form.getFieldValue(this.name);
        if (!evaluate(formField, opts2.defaultValue)) {
          this.form.setFieldValue(this.name, opts2.defaultValue, {
            dontUpdateMeta: true,
            dontValidate: true,
            dontRunListeners: true
          });
        }
      }
      if (!this.form.getFieldMeta(this.name)) {
        this.form.setFieldMeta(this.name, this.state.meta);
      }
    };
    this.getValue = () => {
      return this.form.getFieldValue(this.name);
    };
    this.setValue = (updater, options) => {
      this.form.setFieldValue(
        this.name,
        updater,
        mergeOpts(options, { dontRunListeners: true, dontValidate: true })
      );
      if (!options?.dontRunListeners) {
        this.triggerOnChangeListener();
      }
      if (!options?.dontValidate) {
        this.validate("change");
      }
    };
    this.getMeta = () => this.store.state.meta;
    this.setMeta = (updater) => this.form.setFieldMeta(this.name, updater);
    this.getInfo = () => this.form.getFieldInfo(this.name);
    this.pushValue = (value, options) => {
      this.form.pushFieldValue(
        this.name,
        value,
        mergeOpts(options, { dontRunListeners: true })
      );
      if (!options?.dontRunListeners) {
        this.triggerOnChangeListener();
      }
    };
    this.insertValue = (index, value, options) => {
      this.form.insertFieldValue(
        this.name,
        index,
        value,
        mergeOpts(options, { dontRunListeners: true })
      );
      if (!options?.dontRunListeners) {
        this.triggerOnChangeListener();
      }
    };
    this.replaceValue = (index, value, options) => {
      this.form.replaceFieldValue(
        this.name,
        index,
        value,
        mergeOpts(options, { dontRunListeners: true })
      );
      if (!options?.dontRunListeners) {
        this.triggerOnChangeListener();
      }
    };
    this.removeValue = (index, options) => {
      this.form.removeFieldValue(
        this.name,
        index,
        mergeOpts(options, { dontRunListeners: true })
      );
      if (!options?.dontRunListeners) {
        this.triggerOnChangeListener();
      }
    };
    this.swapValues = (aIndex, bIndex, options) => {
      this.form.swapFieldValues(
        this.name,
        aIndex,
        bIndex,
        mergeOpts(options, { dontRunListeners: true })
      );
      if (!options?.dontRunListeners) {
        this.triggerOnChangeListener();
      }
    };
    this.moveValue = (aIndex, bIndex, options) => {
      this.form.moveFieldValues(
        this.name,
        aIndex,
        bIndex,
        mergeOpts(options, { dontRunListeners: true })
      );
      if (!options?.dontRunListeners) {
        this.triggerOnChangeListener();
      }
    };
    this.clearValues = (options) => {
      this.form.clearFieldValues(
        this.name,
        mergeOpts(options, { dontRunListeners: true })
      );
      if (!options?.dontRunListeners) {
        this.triggerOnChangeListener();
      }
    };
    this.getLinkedFields = (cause) => {
      const fields = Object.values(this.form.fieldInfo);
      const linkedFields = [];
      for (const field of fields) {
        if (!field.instance) continue;
        const { onChangeListenTo, onBlurListenTo } = field.instance.options.validators || {};
        if (cause === "change" && onChangeListenTo?.includes(this.name)) {
          linkedFields.push(field.instance);
        }
        if (cause === "blur" && onBlurListenTo?.includes(this.name)) {
          linkedFields.push(field.instance);
        }
      }
      return linkedFields;
    };
    this.validateSync = (cause, errorFromForm) => {
      const validates = getSyncValidatorArray(cause, {
        ...this.options,
        form: this.form,
        validationLogic: this.form.options.validationLogic || defaultValidationLogic
      });
      const linkedFields = this.getLinkedFields(cause);
      const linkedFieldValidates = linkedFields.reduce(
        (acc, field) => {
          const fieldValidates = getSyncValidatorArray(cause, {
            ...field.options,
            form: field.form,
            validationLogic: field.form.options.validationLogic || defaultValidationLogic
          });
          fieldValidates.forEach((validate) => {
            validate.field = field;
          });
          return acc.concat(fieldValidates);
        },
        []
      );
      let hasErrored = false;
      batch(() => {
        const validateFieldFn = (field, validateObj) => {
          const errorMapKey = getErrorMapKey(validateObj.cause);
          const fieldLevelError = validateObj.validate ? normalizeError(
            field.runValidator({
              validate: validateObj.validate,
              value: {
                value: field.store.state.value,
                validationSource: "field",
                fieldApi: field
              },
              type: "validate"
            })
          ) : void 0;
          const formLevelError = errorFromForm[errorMapKey];
          const { newErrorValue, newSource } = determineFieldLevelErrorSourceAndValue({
            formLevelError,
            fieldLevelError
          });
          if (field.state.meta.errorMap?.[errorMapKey] !== newErrorValue) {
            field.setMeta((prev) => ({
              ...prev,
              errorMap: {
                ...prev.errorMap,
                [errorMapKey]: newErrorValue
              },
              errorSourceMap: {
                ...prev.errorSourceMap,
                [errorMapKey]: newSource
              }
            }));
          }
          if (newErrorValue) {
            hasErrored = true;
          }
        };
        for (const validateObj of validates) {
          validateFieldFn(this, validateObj);
        }
        for (const fieldValitateObj of linkedFieldValidates) {
          if (!fieldValitateObj.validate) continue;
          validateFieldFn(fieldValitateObj.field, fieldValitateObj);
        }
      });
      const submitErrKey = getErrorMapKey("submit");
      if (
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        this.state.meta.errorMap?.[submitErrKey] && cause !== "submit" && !hasErrored
      ) {
        this.setMeta((prev) => ({
          ...prev,
          errorMap: {
            ...prev.errorMap,
            [submitErrKey]: void 0
          },
          errorSourceMap: {
            ...prev.errorSourceMap,
            [submitErrKey]: void 0
          }
        }));
      }
      return { hasErrored };
    };
    this.validateAsync = async (cause, formValidationResultPromise) => {
      const validates = getAsyncValidatorArray(cause, {
        ...this.options,
        form: this.form,
        validationLogic: this.form.options.validationLogic || defaultValidationLogic
      });
      const asyncFormValidationResults = await formValidationResultPromise;
      const linkedFields = this.getLinkedFields(cause);
      const linkedFieldValidates = linkedFields.reduce(
        (acc, field) => {
          const fieldValidates = getAsyncValidatorArray(cause, {
            ...field.options,
            form: field.form,
            validationLogic: field.form.options.validationLogic || defaultValidationLogic
          });
          fieldValidates.forEach((validate) => {
            validate.field = field;
          });
          return acc.concat(fieldValidates);
        },
        []
      );
      const validatesPromises = [];
      const linkedPromises = [];
      const hasAsyncValidators = validates.some((v) => v.validate) || linkedFieldValidates.some((v) => v.validate);
      if (hasAsyncValidators) {
        if (!this.state.meta.isValidating) {
          this.setMeta((prev) => ({ ...prev, isValidating: true }));
        }
        for (const linkedField of linkedFields) {
          linkedField.setMeta((prev) => ({ ...prev, isValidating: true }));
        }
      }
      const validateFieldAsyncFn = (field, validateObj, promises) => {
        const errorMapKey = getErrorMapKey(validateObj.cause);
        const fieldValidatorMeta = field.getInfo().validationMetaMap[errorMapKey];
        fieldValidatorMeta?.lastAbortController.abort();
        const controller = new AbortController();
        this.getInfo().validationMetaMap[errorMapKey] = {
          lastAbortController: controller
        };
        promises.push(
          new Promise(async (resolve) => {
            let rawError;
            try {
              rawError = await new Promise((rawResolve, rawReject) => {
                if (this.timeoutIds.validations[validateObj.cause]) {
                  clearTimeout(this.timeoutIds.validations[validateObj.cause]);
                }
                this.timeoutIds.validations[validateObj.cause] = setTimeout(
                  async () => {
                    if (controller.signal.aborted) return rawResolve(void 0);
                    try {
                      rawResolve(
                        await this.runValidator({
                          validate: validateObj.validate,
                          value: {
                            value: field.store.state.value,
                            fieldApi: field,
                            signal: controller.signal,
                            validationSource: "field"
                          },
                          type: "validateAsync"
                        })
                      );
                    } catch (e) {
                      rawReject(e);
                    }
                  },
                  validateObj.debounceMs
                );
              });
            } catch (e) {
              rawError = e;
            }
            if (controller.signal.aborted) return resolve(void 0);
            const fieldLevelError = normalizeError(rawError);
            const formLevelError = asyncFormValidationResults[this.name]?.[errorMapKey];
            const { newErrorValue, newSource } = determineFieldLevelErrorSourceAndValue({
              formLevelError,
              fieldLevelError
            });
            field.setMeta((prev) => {
              return {
                ...prev,
                errorMap: {
                  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                  ...prev?.errorMap,
                  [errorMapKey]: newErrorValue
                },
                errorSourceMap: {
                  ...prev.errorSourceMap,
                  [errorMapKey]: newSource
                }
              };
            });
            resolve(newErrorValue);
          })
        );
      };
      for (const validateObj of validates) {
        if (!validateObj.validate) continue;
        validateFieldAsyncFn(this, validateObj, validatesPromises);
      }
      for (const fieldValitateObj of linkedFieldValidates) {
        if (!fieldValitateObj.validate) continue;
        validateFieldAsyncFn(
          fieldValitateObj.field,
          fieldValitateObj,
          linkedPromises
        );
      }
      let results = [];
      if (validatesPromises.length || linkedPromises.length) {
        results = await Promise.all(validatesPromises);
        await Promise.all(linkedPromises);
      }
      if (hasAsyncValidators) {
        this.setMeta((prev) => ({ ...prev, isValidating: false }));
        for (const linkedField of linkedFields) {
          linkedField.setMeta((prev) => ({ ...prev, isValidating: false }));
        }
      }
      return results.filter(Boolean);
    };
    this.validate = (cause, opts2) => {
      if (!this.state.meta.isTouched) return [];
      const { fieldsErrorMap } = opts2?.skipFormValidation ? { fieldsErrorMap: {} } : this.form.validateSync(cause);
      const { hasErrored } = this.validateSync(
        cause,
        fieldsErrorMap[this.name] ?? {}
      );
      if (hasErrored && !this.options.asyncAlways) {
        this.getInfo().validationMetaMap[getErrorMapKey(cause)]?.lastAbortController.abort();
        return this.state.meta.errors;
      }
      const formValidationResultPromise = opts2?.skipFormValidation ? Promise.resolve({}) : this.form.validateAsync(cause);
      return this.validateAsync(cause, formValidationResultPromise);
    };
    this.handleChange = (updater) => {
      this.setValue(updater);
    };
    this.handleBlur = () => {
      const prevTouched = this.state.meta.isTouched;
      if (!prevTouched) {
        this.setMeta((prev) => ({ ...prev, isTouched: true }));
      }
      if (!this.state.meta.isBlurred) {
        this.setMeta((prev) => ({ ...prev, isBlurred: true }));
      }
      this.validate("blur");
      this.triggerOnBlurListener();
    };
    this.setErrorMap = (errorMap) => {
      this.setMeta((prev) => ({
        ...prev,
        errorMap: {
          ...prev.errorMap,
          ...errorMap
        }
      }));
    };
    this.parseValueWithSchema = (schema) => {
      return standardSchemaValidators.validate(
        { value: this.state.value, validationSource: "field" },
        schema
      );
    };
    this.parseValueWithSchemaAsync = (schema) => {
      return standardSchemaValidators.validateAsync(
        { value: this.state.value, validationSource: "field" },
        schema
      );
    };
    this.triggerOnChangeListener = () => {
      const formDebounceMs = this.form.options.listeners?.onChangeDebounceMs;
      if (formDebounceMs && formDebounceMs > 0) {
        if (this.timeoutIds.formListeners.change) {
          clearTimeout(this.timeoutIds.formListeners.change);
        }
        this.timeoutIds.formListeners.change = setTimeout(() => {
          this.form.options.listeners?.onChange?.({
            formApi: this.form,
            fieldApi: this
          });
        }, formDebounceMs);
      } else {
        this.form.options.listeners?.onChange?.({
          formApi: this.form,
          fieldApi: this
        });
      }
      const fieldDebounceMs = this.options.listeners?.onChangeDebounceMs;
      if (fieldDebounceMs && fieldDebounceMs > 0) {
        if (this.timeoutIds.listeners.change) {
          clearTimeout(this.timeoutIds.listeners.change);
        }
        this.timeoutIds.listeners.change = setTimeout(() => {
          this.options.listeners?.onChange?.({
            value: this.state.value,
            fieldApi: this
          });
        }, fieldDebounceMs);
      } else {
        this.options.listeners?.onChange?.({
          value: this.state.value,
          fieldApi: this
        });
      }
    };
    this.form = opts.form;
    this.name = opts.name;
    this.options = opts;
    this.timeoutIds = {
      validations: {},
      listeners: {},
      formListeners: {}
    };
    this.store = new Derived({
      deps: [this.form.store],
      fn: ({ prevVal: _prevVal }) => {
        const prevVal = _prevVal;
        const meta = this.form.getFieldMeta(this.name) ?? {
          ...defaultFieldMeta,
          ...opts.defaultMeta
        };
        let value = this.form.getFieldValue(this.name);
        if (!meta.isTouched && value === void 0 && this.options.defaultValue !== void 0 && !evaluate(value, this.options.defaultValue)) {
          value = this.options.defaultValue;
        }
        if (prevVal && prevVal.value === value && prevVal.meta === meta) {
          return prevVal;
        }
        return {
          value,
          meta
        };
      }
    });
  }
  /**
   * The current field state.
   */
  get state() {
    return this.store.state;
  }
  /**
   * @private
   */
  runValidator(props) {
    if (isStandardSchemaValidator(props.validate)) {
      return standardSchemaValidators[props.type](
        props.value,
        props.validate
      );
    }
    return props.validate(props.value);
  }
  triggerOnBlurListener() {
    const formDebounceMs = this.form.options.listeners?.onBlurDebounceMs;
    if (formDebounceMs && formDebounceMs > 0) {
      if (this.timeoutIds.formListeners.blur) {
        clearTimeout(this.timeoutIds.formListeners.blur);
      }
      this.timeoutIds.formListeners.blur = setTimeout(() => {
        this.form.options.listeners?.onBlur?.({
          formApi: this.form,
          fieldApi: this
        });
      }, formDebounceMs);
    } else {
      this.form.options.listeners?.onBlur?.({
        formApi: this.form,
        fieldApi: this
      });
    }
    const fieldDebounceMs = this.options.listeners?.onBlurDebounceMs;
    if (fieldDebounceMs && fieldDebounceMs > 0) {
      if (this.timeoutIds.listeners.blur) {
        clearTimeout(this.timeoutIds.listeners.blur);
      }
      this.timeoutIds.listeners.blur = setTimeout(() => {
        this.options.listeners?.onBlur?.({
          value: this.state.value,
          fieldApi: this
        });
      }, fieldDebounceMs);
    } else {
      this.options.listeners?.onBlur?.({
        value: this.state.value,
        fieldApi: this
      });
    }
  }
}
function normalizeError(rawError) {
  if (rawError) {
    return rawError;
  }
  return void 0;
}
function getErrorMapKey(cause) {
  switch (cause) {
    case "submit":
      return "onSubmit";
    case "blur":
      return "onBlur";
    case "mount":
      return "onMount";
    case "server":
      return "onServer";
    case "dynamic":
      return "onDynamic";
    case "change":
    default:
      return "onChange";
  }
}
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
function useField(opts) {
  const [prevOptions, setPrevOptions] = reactExports.useState(() => ({
    form: opts.form,
    name: opts.name
  }));
  const [fieldApi, setFieldApi] = reactExports.useState(() => {
    return new FieldApi({
      ...opts
    });
  });
  if (prevOptions.form !== opts.form || prevOptions.name !== opts.name) {
    setFieldApi(
      new FieldApi({
        ...opts
      })
    );
    setPrevOptions({ form: opts.form, name: opts.name });
  }
  const reactiveStateValue = useStore(
    fieldApi.store,
    opts.mode === "array" ? (state) => Object.keys(state.value ?? []).length : (state) => state.value
  );
  const reactiveMetaIsTouched = useStore(
    fieldApi.store,
    (state) => state.meta.isTouched
  );
  const reactiveMetaIsBlurred = useStore(
    fieldApi.store,
    (state) => state.meta.isBlurred
  );
  const reactiveMetaIsDirty = useStore(
    fieldApi.store,
    (state) => state.meta.isDirty
  );
  const reactiveMetaErrorMap = useStore(
    fieldApi.store,
    (state) => state.meta.errorMap
  );
  const reactiveMetaErrorSourceMap = useStore(
    fieldApi.store,
    (state) => state.meta.errorSourceMap
  );
  const reactiveMetaIsValidating = useStore(
    fieldApi.store,
    (state) => state.meta.isValidating
  );
  const extendedFieldApi = reactExports.useMemo(() => {
    const reactiveFieldApi = {
      ...fieldApi,
      get state() {
        return {
          // For array mode, reactiveStateValue is the length (for reactivity tracking),
          // so we need to get the actual value from fieldApi
          value: opts.mode === "array" ? fieldApi.state.value : reactiveStateValue,
          get meta() {
            return {
              ...fieldApi.state.meta,
              isTouched: reactiveMetaIsTouched,
              isBlurred: reactiveMetaIsBlurred,
              isDirty: reactiveMetaIsDirty,
              errorMap: reactiveMetaErrorMap,
              errorSourceMap: reactiveMetaErrorSourceMap,
              isValidating: reactiveMetaIsValidating
            };
          }
        };
      }
    };
    const extendedApi = reactiveFieldApi;
    extendedApi.Field = Field;
    return extendedApi;
  }, [
    fieldApi,
    opts.mode,
    reactiveStateValue,
    reactiveMetaIsTouched,
    reactiveMetaIsBlurred,
    reactiveMetaIsDirty,
    reactiveMetaErrorMap,
    reactiveMetaErrorSourceMap,
    reactiveMetaIsValidating
  ]);
  useIsomorphicLayoutEffect(fieldApi.mount, [fieldApi]);
  useIsomorphicLayoutEffect(() => {
    fieldApi.update(opts);
  });
  return extendedFieldApi;
}
const Field = (({
  children,
  ...fieldOptions
}) => {
  const fieldApi = useField(fieldOptions);
  const jsxToDisplay = reactExports.useMemo(
    () => functionalUpdate(children, fieldApi),
    [children, fieldApi]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxToDisplay });
});
function useUUID() {
  return reactExports.useState(() => uuid())[0];
}
const useFormId = reactExports.version.split(".")[0] === "17" ? useUUID : reactExports.useId;
function LocalSubscribe({
  form,
  selector,
  children
}) {
  const data = useStore(form.store, selector);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: functionalUpdate(children, data) });
}
function useForm(opts) {
  const fallbackFormId = useFormId();
  const [prevFormId, setPrevFormId] = reactExports.useState(opts?.formId);
  const [formApi, setFormApi] = reactExports.useState(() => {
    return new FormApi({ ...opts, formId: opts?.formId ?? fallbackFormId });
  });
  if (prevFormId !== opts?.formId) {
    const formId = opts?.formId ?? fallbackFormId;
    setFormApi(new FormApi({ ...opts, formId }));
    setPrevFormId(formId);
  }
  const extendedFormApi = reactExports.useMemo(() => {
    const extendedApi = {
      ...formApi,
      handleSubmit: ((...props) => {
        return formApi._handleSubmit(...props);
      }),
      // We must add all `get`ters from `core`'s `FormApi` here, as otherwise the spread operator won't catch those
      get formId() {
        return formApi._formId;
      },
      get state() {
        return formApi.store.state;
      }
    };
    extendedApi.Field = function APIField(props) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { ...props, form: formApi });
    };
    extendedApi.Subscribe = function Subscribe(props) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        LocalSubscribe,
        {
          form: formApi,
          selector: props.selector,
          children: props.children
        }
      );
    };
    return extendedApi;
  }, [formApi]);
  useIsomorphicLayoutEffect(formApi.mount, []);
  useIsomorphicLayoutEffect(() => {
    formApi.update(opts);
  });
  return extendedFormApi;
}
function prefixSchemaToErrors(zodErrors, transformErrors) {
  const schema = /* @__PURE__ */ new Map();
  for (const zodError of zodErrors) {
    const path = zodError.path.map(
      (segment) => typeof segment === "number" ? `[${segment}]` : segment
    ).join(".").replace(/\.\[/g, "[");
    schema.set(path, (schema.get(path) ?? []).concat(zodError));
  }
  const transformedSchema = {};
  schema.forEach((value, key) => {
    transformedSchema[key] = transformErrors(value);
  });
  return transformedSchema;
}
function defaultFormTransformer(transformErrors) {
  return (zodErrors) => ({
    form: transformErrors(zodErrors),
    fields: prefixSchemaToErrors(zodErrors, transformErrors)
  });
}
const zodValidator = (params = {}) => () => {
  const transformFieldErrors = params.transformErrors ?? ((issues) => issues.map((issue) => issue.message).join(", "));
  const getTransformStrategy = (validationSource) => validationSource === "form" ? defaultFormTransformer(transformFieldErrors) : transformFieldErrors;
  return {
    validate({ value, validationSource }, fn) {
      const result = fn.safeParse(value);
      if (result.success) return;
      const transformer = getTransformStrategy(validationSource);
      return transformer(result.error.issues);
    },
    async validateAsync({ value, validationSource }, fn) {
      const result = await fn.safeParseAsync(value);
      if (result.success) return;
      const transformer = getTransformStrategy(validationSource);
      return transformer(result.error.issues);
    }
  };
};
function sanitizeText(input) {
  if (!input || typeof input !== "string") return "";
  return input.replace(/[<>]/g, "").replace(/javascript:/gi, "").replace(/on\w+=/gi, "").trim();
}
class RateLimiter {
  attempts = /* @__PURE__ */ new Map();
  isRateLimited(key, maxAttempts = 5, windowMs = 6e4) {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    const recentAttempts = attempts.filter((time) => now - time < windowMs);
    if (recentAttempts.length >= maxAttempts) {
      return true;
    }
    recentAttempts.push(now);
    this.attempts.set(key, recentAttempts);
    return false;
  }
  reset(key) {
    this.attempts.delete(key);
  }
}
const rateLimiter = new RateLimiter();
function generateCsrfToken() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}
function validateFormInput(input, rules) {
  const errors = [];
  let value = input;
  if (input === null || input === void 0) {
    if (rules.required) {
      errors.push("This field is required");
    }
    return { isValid: errors.length === 0, value: input, errors };
  }
  const stringValue = String(input);
  if (rules.maxLength && stringValue.length > rules.maxLength) {
    errors.push(`Maximum length is ${rules.maxLength} characters`);
  }
  if (rules.pattern && !rules.pattern.test(stringValue)) {
    errors.push("Invalid format");
  }
  if (rules.sanitize && typeof input === "string") {
    value = sanitizeText(input);
  }
  return {
    isValid: errors.length === 0,
    value,
    errors
  };
}
function useSecureForm(options) {
  const { rateLimitKey = "form-submit", csrfProtection = true } = options;
  const [csrfToken] = reactExports.useState(() => generateCsrfToken());
  const [submitStatus, setSubmitStatus] = reactExports.useState("idle");
  const secureSubmit = reactExports.useCallback(
    async (values) => {
      if (rateLimiter.isRateLimited(rateLimitKey)) {
        throw new Error(
          "Too many submissions. Please wait before trying again."
        );
      }
      setSubmitStatus("submitting");
      try {
        const sanitizedValues = Object.keys(values).reduce(
          (acc, key) => {
            const value = values[key];
            if (typeof value === "string") {
              acc[key] = sanitizeText(value);
            } else {
              acc[key] = value;
            }
            return acc;
          },
          {}
        );
        const submitData = csrfProtection ? { ...sanitizedValues, _csrf: csrfToken } : sanitizedValues;
        if (options.onSubmit) {
          await options.onSubmit(submitData);
        }
        setSubmitStatus("success");
      } catch (error) {
        setSubmitStatus("error");
        throw error;
      } finally {
        setSubmitStatus("idle");
      }
    },
    [rateLimitKey, csrfProtection, csrfToken, options.onSubmit]
  );
  return {
    secureSubmit,
    submitStatus,
    csrfToken: csrfProtection ? csrfToken : void 0
  };
}
const secureValidators = {
  email: (value) => {
    const { isValid } = validateFormInput(value, {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    });
    return isValid || "Please enter a valid email address";
  },
  required: (fieldName = "This field") => (value) => {
    const { isValid } = validateFormInput(value, { required: true });
    return isValid || `${fieldName} is required`;
  },
  maxLength: (max, fieldName = "This field") => (value) => {
    const { isValid } = validateFormInput(value, { maxLength: max });
    return isValid || `${fieldName} must be less than ${max} characters`;
  },
  sanitize: (value) => sanitizeText(value)
};
const inquirySchema = objectType({
  name: stringType().min(1, "Please enter your full name so we can address you properly"),
  email: stringType().email("Invalid email address"),
  company: stringType(),
  inquiry_type: stringType(),
  message: stringType().min(10, "Please provide more details about your energy needs (minimum 10 characters)"),
  turnstileToken: stringType().min(1, "Please complete the spam check")
});
function ContactPage() {
  const search = Route$a.useSearch();
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const containerRef = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const {
    secureSubmit,
    submitStatus
  } = useSecureForm({
    rateLimitKey: "contact-form",
    csrfProtection: true
  });
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      inquiry_type: search.type || "residential",
      message: "",
      turnstileToken: ""
    },
    // @ts-expect-error Types mismatch in tanstack form adapter
    validatorAdapter: zodValidator(),
    validators: {
      onSubmit: inquirySchema
    },
    onSubmit: async ({
      value
    }) => {
      await secureSubmit(value);
    }
  });
  const nameId = reactExports.useId();
  const emailId = reactExports.useId();
  const companyId = reactExports.useId();
  const messageId = reactExports.useId();
  const faqs = [{
    q: "Where are RENOZ batteries manufactured?",
    a: "RENOZ battery systems are engineered and designed in Perth, Western Australia. We partner with world-class manufacturers to produce our systems to the highest standards. We are proud to be Perth's own battery OEM."
  }, {
    q: "What is the warranty period?",
    a: "We offer a standard 10-year performance warranty on all our battery modules, guaranteeing at least 80% capacity retention after 6,000 cycles."
  }, {
    q: "Do you sell directly to homeowners?",
    a: "We primarily work through a network of certified installers to ensure safe and compliant installation. However, you can contact us directly for a system sizing consultation, and we can recommend a local partner."
  }, {
    q: "Are your systems compatible with existing solar setups?",
    a: "Yes, RENOZ systems are designed to be inverter-agnostic and can be retrofitted to most existing solar PV installations, including AC-coupled and DC-coupled configurations."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[var(--cream)]", ref: containerRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-screen min-h-[600px] flex items-center overflow-hidden bg-[var(--black)] text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "absolute inset-0 z-0", style: {
        y
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center opacity-60", style: {
          backgroundImage: "url('/images/about/hero-wa-energy.webp')"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--cream)] via-transparent to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg", children: [
          "Let's start a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " conversation."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          x: -20
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          duration: 0.8,
          delay: 0.2
        }, className: "glass-dark p-6 md:p-8 rounded-2xl max-w-2xl border-l-4 border-[var(--renoz-green)] shadow-2xl mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl text-zinc-100 font-normal leading-relaxed", children: "Whether you're a homeowner, installer, or developer, our Perth-based engineering team is ready to help." }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 -mt-24 relative z-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "lg:col-span-7", initial: {
          opacity: 0,
          y: 40
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          delay: 0.2
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-2xl border-none rounded-[32px] overflow-hidden bg-white p-8 md:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "inquiry_type", children: (field) => {
            const inquiryType = field.state.value;
            const getTitle = () => {
              if (inquiryType === "partnership") return "Apply for Trade Account";
              if (inquiryType === "commercial") return "Discuss Commercial Project";
              return "Get Expert Advice";
            };
            const getDesc = () => {
              if (inquiryType === "partnership") return "Join our partner network for wholesale pricing and direct engineering support.";
              if (inquiryType === "commercial") return "Tell us about your project requirements (capacity, voltage, application).";
              return "Let us know your energy needs and we will connect you with a certified installer.";
            };
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex bg-gray-100 p-1 rounded-xl mb-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => field.handleChange("residential"), className: cn("flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all", inquiryType === "residential" ? "bg-white text-[var(--black)] shadow-sm" : "text-gray-500 hover:text-gray-700"), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Homeowner" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => field.handleChange("partnership"), className: cn("flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all", inquiryType === "partnership" ? "bg-white text-[var(--black)] shadow-sm" : "text-gray-500 hover:text-gray-700"), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HardHat, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Installer" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => field.handleChange("commercial"), className: cn("flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all", inquiryType === "commercial" ? "bg-white text-[var(--black)] shadow-sm" : "text-gray-500 hover:text-gray-700"), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Commercial" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-[var(--black)] mb-2", children: getTitle() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: getDesc() })
              ] })
            ] });
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "name", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: nameId, className: "block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500", children: "Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: nameId, value: field.state.value, onBlur: field.handleBlur, onChange: (e) => field.handleChange(secureValidators.sanitize(e.target.value)), className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--renoz-green)] focus:border-transparent outline-none transition-all placeholder:text-gray-400", placeholder: "John Doe", required: true, "aria-invalid": field.state.meta.errors.length > 0, "aria-describedby": field.state.meta.errors.length > 0 ? `${nameId}-error` : void 0, minLength: 2, maxLength: 100 }),
                field.state.meta.errors ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: `${nameId}-error`, className: "text-red-500 text-sm mt-1", role: "alert", "aria-live": "polite", children: field.state.meta.errors.join(", ") }) : null
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "email", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: emailId, className: "block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500", children: "Email *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: emailId, type: "email", value: field.state.value, onBlur: field.handleBlur, onChange: (e) => field.handleChange(e.target.value), className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--renoz-green)] focus:border-transparent outline-none transition-all placeholder:text-gray-400", placeholder: "john@example.com" }),
                field.state.meta.errors ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: field.state.meta.errors.join(", ") }) : null
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "company", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(form.Subscribe, { selector: (state) => [state.values.inquiry_type], children: ([inquiryType]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: companyId, className: "block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500", children: inquiryType === "residential" ? "Address (Optional)" : "Company Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: companyId, value: field.state.value, onBlur: field.handleBlur, onChange: (e) => field.handleChange(e.target.value), className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--renoz-green)] focus:border-transparent outline-none transition-all placeholder:text-gray-400", placeholder: inquiryType === "residential" ? "Your suburb or address" : "Your business name" })
            ] }) }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "message", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: messageId, className: "block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500", children: "Message *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: messageId, rows: 5, value: field.state.value, onBlur: field.handleBlur, onChange: (e) => field.handleChange(e.target.value), className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--renoz-green)] focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400", placeholder: "Tell us about your project requirements..." }),
              field.state.meta.errors ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: field.state.meta.errors.join(", ") }) : null
            ] }) }),
            submitStatus === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0,
              height: 0
            }, animate: {
              opacity: 1,
              height: "auto"
            }, className: "p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 flex items-center gap-3", role: "alert", "aria-live": "polite", "aria-atomic": "true", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 bg-green-200 rounded-full flex items-center justify-center shrink-0", "aria-hidden": "true", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Thanks for reaching out! Our energy experts will respond within 24 hours with your custom solution." })
            ] }),
            submitStatus === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
              opacity: 0,
              height: 0
            }, animate: {
              opacity: 1,
              height: "auto"
            }, className: "p-4 bg-red-50 border border-red-200 rounded-xl text-red-800", role: "alert", "aria-live": "assertive", "aria-atomic": "true", children: "We encountered an issue sending your message. Please try again or contact us directly or call us directly." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(form.Field, { name: "turnstileToken", children: (field) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Turnstile, { siteKey: "0x4AAAAAABHX5BtfeC3UIcgA", onVerify: (token) => field.handleChange(token), onError: () => field.handleChange(""), theme: "auto", size: "normal", className: "flex justify-center" }),
              field.state.meta.errors ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-2 text-center", children: field.state.meta.errors.join(", ") }) : null
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(form.Subscribe, { selector: (state) => [state.canSubmit], children: ([canSubmit]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", variant: "primary", size: "lg", className: "w-full rounded-xl py-4 text-lg shadow-lg shadow-[var(--renoz-green)]/20", disabled: !canSubmit || false || submitStatus === "submitting", "aria-describedby": "submit-status", children: [
                submitStatus === "submitting" ? "Sending..." : "Get Expert Advice",
                submitStatus !== "submitting" && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sr-only", "aria-live": "polite", "aria-atomic": "true", children: [
                submitStatus === "submitting" && "Sending your message...",
                submitStatus === "success" && "Message sent successfully",
                submitStatus === "error" && "Failed to send message"
              ] })
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: "tel:1800736693", className: "block bg-[var(--black)] text-white rounded-[32px] p-8 shadow-xl hover:scale-[1.02] transition-transform duration-300 group relative overflow-hidden", initial: {
            opacity: 0,
            x: 20
          }, whileInView: {
            opacity: 1,
            x: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            delay: 0.3
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-white/10 rounded-[20px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-6 h-6 text-[var(--renoz-green)]" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 text-gray-500 group-hover:text-white transition-colors" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 font-bold uppercase tracking-wider mb-1", children: "Call Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold mb-4", children: "1800 736 693" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Mon-Fri, 8am - 5pm AWST" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: "mailto:sales@renoz.energy", className: "block bg-white text-[var(--black)] rounded-[32px] p-8 shadow-soft hover:shadow-lg transition-all duration-300 group", initial: {
            opacity: 0,
            x: 20
          }, whileInView: {
            opacity: 1,
            x: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            delay: 0.4
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-gray-100 rounded-[20px] group-hover:bg-[var(--renoz-green)]/10 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-6 h-6 text-[var(--black)] group-hover:text-[var(--renoz-green)] transition-colors" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 text-gray-300 group-hover:text-[var(--black)] transition-colors" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400 font-bold uppercase tracking-wider mb-1", children: "Email Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold break-all", children: "sales@renoz.energy" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "bg-[var(--renoz-green)] text-white rounded-[32px] p-8 shadow-xl relative overflow-hidden", initial: {
            opacity: 0,
            x: 20
          }, whileInView: {
            opacity: 1,
            x: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6,
            delay: 0.5
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-8 h-8 text-white mb-6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/60 font-bold uppercase tracking-wider mb-1", children: "Head Office & Factory" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-bold leading-tight", children: [
                "Unit 4, 8 Murphy Street",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "O'Connor WA 6163"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-6 border-t border-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://maps.google.com/?q=8+Murphy+Street+O'Connor+WA", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center text-sm font-bold hover:text-white/80 transition-colors", children: [
                "Get Directions ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
              ] }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 md:mt-20 lg:mt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.8
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 -mx-4 hide-scrollbar pb-8", children: [{
          title: "Initial Review",
          description: "Our admin team reviews your inquiry within 24 hours (Mon-Fri) and routes it to the correct department.",
          step: "01"
        }, {
          title: "Technical Sizing",
          description: "For complex projects, our engineers may request additional info (switchboard photos, load profiles) to provide an accurate quote.",
          step: "02"
        }, {
          title: "Connection",
          description: "We'll either provide a direct quote or introduce you to a certified local partner who can handle the installation.",
          step: "03"
        }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "snap-center shrink-0 w-[85%] max-w-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-[var(--renoz-green)]/20 mb-4", children: item.step }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 leading-relaxed text-sm", children: item.description })
        ] }) }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VerticalTimeline, { title: "What happens next?", steps: [{
          title: "Initial Review",
          description: "Our admin team reviews your inquiry within 24 hours (Mon-Fri) and routes it to the correct department."
        }, {
          title: "Technical Sizing (Optional)",
          description: "For complex projects, our engineers may request additional info (switchboard photos, load profiles) to provide an accurate quote."
        }, {
          title: "Connection",
          description: "We'll either provide a direct quote or introduce you to a certified local partner who can handle the installation."
        }] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12 md:mt-20 lg:mt-32 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.8
        }, className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "w-6 h-6 text-[var(--renoz-green)]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-[var(--black)]", children: "Frequently Asked Questions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 10
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.5,
          delay: i * 0.1
        }, className: "bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenFaq(openFaq === i ? null : i), className: "w-full flex justify-between items-center text-left font-bold text-[var(--black)] p-6 md:p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: faq.q }),
            openFaq === i ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-5 h-5 text-[var(--renoz-green)] shrink-0 ml-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-5 h-5 text-gray-400 shrink-0 ml-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: openFaq === i && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            height: 0,
            opacity: 0
          }, animate: {
            height: "auto",
            opacity: 1
          }, exit: {
            height: 0,
            opacity: 0
          }, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-6 md:px-8 md:pb-8 text-zinc-600 font-normal leading-relaxed border-t border-gray-50 pt-4", children: faq.a }) }) })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-12 md:mt-20 lg:mt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.8
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-[var(--black)] to-gray-800 text-white p-12 md:p-16 rounded-[32px] border-none shadow-2xl relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--renoz-green)]/20 border border-[var(--renoz-green)]/30 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-8 h-8 text-[var(--renoz-green)]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Already a RENOZ Customer?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-300 mb-8 leading-relaxed", children: "Activate your 10-year replacement warranty in minutes. Simple online registration for peace of mind." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "primary", size: "lg", to: "/warranty", className: "rounded-full px-8 shadow-glow", children: [
              "Register Your Warranty",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/resources", className: "inline-flex items-center justify-center px-8 py-4 text-white border-2 border-white/20 hover:border-white/40 rounded-full font-bold transition-all hover:bg-white/5", children: "View Resources" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 mt-6", children: [
            "Need help? Email",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@renoz.energy", className: "text-[var(--renoz-green)] hover:underline", children: "support@renoz.energy" })
          ] })
        ] })
      ] }) }) })
    ] })
  ] });
}
export {
  ContactPage as component
};
