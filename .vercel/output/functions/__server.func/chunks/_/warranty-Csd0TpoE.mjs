import { jsx, jsxs } from "react/jsx-runtime";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";
import { useState, useId, useEffect, useRef } from "react";
import { useForm, FormProvider, Controller, useFormContext } from "react-hook-form";
import { z } from "zod";
import { c as createLucideIcon, B as Button, S as Shield, A as ArrowRight, a as cn, C as ChevronDown, X, b as buttonVariants } from "./router-6SuvEb_N.mjs";
import { C as Card } from "./Card-BYhoWMQ1.mjs";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { format } from "date-fns";
import { getDefaultClassNames, DayPicker } from "react-day-picker";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server.mjs";
import { Slot } from "@radix-ui/react-slot";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as SelectPrimitive from "@radix-ui/react-select";
import { T as Turnstile, C as ChevronUp } from "./Turnstile-CicOKJFT.mjs";
import { C as Check } from "./check.mjs";
import { C as CircleCheckBig } from "./circle-check-big.mjs";
import "@tanstack/react-router";
import "@vercel/analytics/react";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "@supabase/supabase-js";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "../../index.mjs";
import "tiny-invariant";
import "seroval";
import "@tanstack/react-router/ssr/server";
const __iconNode$8 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar$1 = createLucideIcon("calendar", __iconNode$8);
const __iconNode$7 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$7);
const __iconNode$6 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$6);
const __iconNode$5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode$5);
const __iconNode$4 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
];
const FileCheck = createLucideIcon("file-check", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
];
const File = createLucideIcon("file", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode$1);
const __iconNode = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode);
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ jsx(Check, { className: "size-3.5" })
        }
      )
    }
  );
}
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsx(
    DayPicker,
    {
      showOutsideDays,
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute bg-popover inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          props.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: CalendarRoot,
        Chevron: CalendarChevron,
        DayButton: CalendarDayButton,
        WeekNumber: CalendarWeekNumber,
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsx(
    Button,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}
function CalendarRoot({
  className,
  rootRef,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "calendar",
      ref: rootRef,
      className: cn(className),
      ...props
    }
  );
}
function CalendarChevron({
  className,
  orientation,
  ...props
}) {
  if (orientation === "left") {
    return /* @__PURE__ */ jsx(ChevronLeft, { className: cn("size-4", className), ...props });
  }
  if (orientation === "right") {
    return /* @__PURE__ */ jsx(ChevronRight, { className: cn("size-4", className), ...props });
  }
  return /* @__PURE__ */ jsx(ChevronDown, { className: cn("size-4", className), ...props });
}
function CalendarWeekNumber({
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx("td", { ...props, children: /* @__PURE__ */ jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
}
function Popover({
  ...props
}) {
  return /* @__PURE__ */ jsx(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    PopoverPrimitive.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ) });
}
function DatePicker({
  value,
  onChange,
  placeholder = "Pick a date",
  maxDate,
  disabled = false
}) {
  const [date, setDate] = React.useState(
    value ? new Date(value) : void 0
  );
  const handleSelect = (selectedDate) => {
    setDate(selectedDate);
    if (selectedDate && onChange) {
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      onChange(formattedDate);
    }
  };
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "outline",
        className: cn(
          "w-full justify-start text-left font-normal",
          !date && "text-muted-foreground"
        ),
        disabled,
        children: [
          /* @__PURE__ */ jsx(Calendar$1, { className: "mr-2 h-4 w-4" }),
          date ? format(date, "PPP") : /* @__PURE__ */ jsx("span", { children: placeholder })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsx(
      Calendar,
      {
        mode: "single",
        selected: date,
        onSelect: handleSelect,
        disabled: (date2) => {
          if (maxDate && date2 > maxDate) return true;
          return false;
        },
        initialFocus: true
      }
    ) })
  ] });
}
const createSsrRpc = (functionId, importer) => {
  const url = "/_serverFn/" + functionId;
  const fn = async (...args) => {
    const serverFn = await getServerFnById(functionId);
    return serverFn(...args);
  };
  return Object.assign(fn, {
    url,
    functionId,
    [TSS_SERVER_FUNCTION]: true
  });
};
process.env.VITE_SUPABASE_URL || "https://tcrpfwxfsbkrwqielhfg.supabase.co";
process.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_y8Vro117yYqQIMCBHvffVA_rDCXg4Sz";
const uploadFileSchema = z.object({
  warrantyId: z.string(),
  file: z.object({
    name: z.string(),
    type: z.string(),
    data: z.string()
    // base64 encoded file data
  })
});
const uploadWarrantyFile = createServerFn({
  method: "POST"
}).inputValidator(uploadFileSchema).handler(createSsrRpc("1bc93234ddbb124568de1b8b4782a5e1fc4f1d462f61652737d640217f0fc80a"));
function FileUpload({
  warrantyId,
  files,
  onFilesChange,
  maxFileSize = 10 * 1024 * 1024,
  // 10MB default
  allowedTypes = ["image/jpeg", "image/png", "application/pdf"]
}) {
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const handleFileSelect = async (selectedFiles) => {
    if (!selectedFiles) return;
    const newFiles = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      if (!allowedTypes.includes(file.type)) {
        const errorFile = {
          name: file.name,
          type: file.type,
          size: file.size,
          error: "Invalid file type. Only JPEG, PNG, and PDF files are allowed."
        };
        newFiles.push(errorFile);
        continue;
      }
      if (file.size > maxFileSize) {
        const errorFile = {
          name: file.name,
          type: file.type,
          size: file.size,
          error: `File too large. Maximum size is ${Math.round(maxFileSize / 1024 / 1024)}MB`
        };
        newFiles.push(errorFile);
        continue;
      }
      if (file.size === 0) {
        const errorFile = {
          name: file.name,
          type: file.type,
          size: file.size,
          error: "File appears to be empty or corrupted"
        };
        newFiles.push(errorFile);
        continue;
      }
      let preview;
      if (file.type.startsWith("image/")) {
        preview = URL.createObjectURL(file);
      }
      const uploadFile = {
        name: file.name,
        type: file.type,
        size: file.size,
        preview,
        uploading: true
      };
      newFiles.push(uploadFile);
      const performUpload = async (retryCount = 0) => {
        try {
          const reader = new FileReader();
          reader.onload = async (e) => {
            try {
              const base64Data = e.target?.result;
              if (!base64Data || !base64Data.startsWith("data:")) {
                throw new Error("Failed to read file data");
              }
              const result = await uploadWarrantyFile({
                data: {
                  warrantyId,
                  file: {
                    name: file.name,
                    type: file.type,
                    data: base64Data
                  }
                }
              });
              if (result.success && result.url) {
                onFilesChange((prevFiles) => {
                  const updatedFiles = [...prevFiles];
                  const fileIndex = updatedFiles.findIndex(
                    (f) => f.name === file.name && f.uploading
                  );
                  if (fileIndex !== -1) {
                    updatedFiles[fileIndex] = {
                      ...updatedFiles[fileIndex],
                      url: result.url,
                      path: result.path,
                      uploading: false
                    };
                  }
                  return updatedFiles;
                });
              } else {
                const errorMessage = result.error || "Upload failed";
                const isRetryableError = errorMessage.includes("network") || errorMessage.includes("server") || errorMessage.includes("timeout");
                if (isRetryableError && retryCount < 2) {
                  console.log(
                    `Retrying upload for ${file.name} (attempt ${retryCount + 2})`
                  );
                  setTimeout(
                    () => performUpload(retryCount + 1),
                    2 ** retryCount * 1e3
                  );
                  return;
                }
                onFilesChange((prevFiles) => {
                  const updatedFiles = [...prevFiles];
                  const fileIndex = updatedFiles.findIndex(
                    (f) => f.name === file.name && f.uploading
                  );
                  if (fileIndex !== -1) {
                    updatedFiles[fileIndex] = {
                      ...updatedFiles[fileIndex],
                      uploading: false,
                      error: errorMessage
                    };
                  }
                  return updatedFiles;
                });
              }
            } catch (uploadError) {
              console.error("Upload error:", uploadError);
              if (retryCount < 2 && uploadError.message?.includes("network")) {
                console.log(
                  `Retrying upload for ${file.name} due to network error (attempt ${retryCount + 2})`
                );
                setTimeout(
                  () => performUpload(retryCount + 1),
                  2 ** retryCount * 1e3
                );
                return;
              }
              onFilesChange((prevFiles) => {
                const updatedFiles = [...prevFiles];
                const fileIndex = updatedFiles.findIndex(
                  (f) => f.name === file.name && f.uploading
                );
                if (fileIndex !== -1) {
                  updatedFiles[fileIndex] = {
                    ...updatedFiles[fileIndex],
                    uploading: false,
                    error: "Upload failed due to technical error"
                  };
                }
                return updatedFiles;
              });
            }
          };
          reader.onerror = () => {
            onFilesChange((prevFiles) => {
              const updatedFiles = [...prevFiles];
              const fileIndex = updatedFiles.findIndex(
                (f) => f.name === file.name && f.uploading
              );
              if (fileIndex !== -1) {
                updatedFiles[fileIndex] = {
                  ...updatedFiles[fileIndex],
                  uploading: false,
                  error: "Failed to read file"
                };
              }
              return updatedFiles;
            });
          };
          reader.readAsDataURL(file);
        } catch (error) {
          console.error("File processing error:", error);
          onFilesChange((prevFiles) => {
            const updatedFiles = [...prevFiles];
            const fileIndex = updatedFiles.findIndex(
              (f) => f.name === file.name && f.uploading
            );
            if (fileIndex !== -1) {
              updatedFiles[fileIndex] = {
                ...updatedFiles[fileIndex],
                uploading: false,
                error: "File processing failed"
              };
            }
            return updatedFiles;
          });
        }
      };
      performUpload();
    }
    if (newFiles.length > 0) {
      onFilesChange((prev) => [...prev, ...newFiles]);
    }
  };
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files);
    }
  };
  const removeFile = (index) => {
    onFilesChange((prev) => prev.filter((_, i) => i !== index));
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        onDragEnter: handleDrag,
        onDragLeave: handleDrag,
        onDragOver: handleDrag,
        onDrop: handleDrop,
        className: `
          border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer hover:border-gray-400
          ${dragActive ? "border-[var(--renoz-green)] bg-[var(--renoz-green)]/5" : "border-gray-300 bg-gray-50"}
        `,
        onClick: () => {
          fileInputRef.current?.click();
        },
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              ref: fileInputRef,
              type: "file",
              multiple: true,
              accept: allowedTypes.join(","),
              onChange: (e) => handleFileSelect(e.target.files),
              className: "hidden"
            }
          ),
          /* @__PURE__ */ jsx(Upload, { className: "w-12 h-12 mx-auto mb-4 text-gray-400" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-700 mb-1", children: "Drag & drop files here" }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500", children: [
            "or click to browse • ",
            Math.round(maxFileSize / 1024 / 1024),
            "MB per file"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 mt-2", children: "Accepted: JPEG, PNG, PDF" })
        ]
      }
    ),
    files.length > 0 && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-gray-700", children: [
        "Uploaded Files (",
        files.length,
        ")"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: files.map((file, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg",
          children: [
            file.preview ? /* @__PURE__ */ jsx(
              "img",
              {
                src: file.preview,
                alt: file.name,
                className: "w-12 h-12 object-cover rounded"
              }
            ) : /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gray-100 rounded flex items-center justify-center", children: /* @__PURE__ */ jsx(File, { className: "w-6 h-6 text-gray-400" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-900 truncate", children: file.name }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: file.uploading ? "Uploading..." : file.error ? /* @__PURE__ */ jsx("span", { className: "text-red-500", children: file.error }) : `${Math.round(file.size / 1024)} KB` })
            ] }),
            !file.uploading && /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
              file.error && /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => alert("Please re-upload this file manually"),
                  className: "p-1 text-gray-400 hover:text-blue-500 transition-colors",
                  title: "Retry upload (re-upload file manually)",
                  children: /* @__PURE__ */ jsx(RefreshCw, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => removeFile(index),
                  className: "p-1 text-gray-400 hover:text-red-500 transition-colors",
                  children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
                }
              )
            ] })
          ]
        },
        index
      )) })
    ] })
  ] });
}
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
const Form = FormProvider;
const FormFieldContext = React.createContext(
  {}
);
const FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx(Controller, { ...props }) });
};
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
const FormItemContext = React.createContext(
  {}
);
function FormItem({ className, ...props }) {
  const id = React.useId();
  return /* @__PURE__ */ jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "form-item",
      className: cn("grid gap-2", className),
      ...props
    }
  ) });
}
function FormLabel({
  className,
  ...props
}) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx(
    Label,
    {
      "data-slot": "form-label",
      "data-error": !!error,
      className: cn("data-[error=true]:text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx(
    Slot,
    {
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx(
    "p",
    {
      "data-slot": "form-description",
      id: formDescriptionId,
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "p",
    {
      "data-slot": "form-message",
      id: formMessageId,
      className: cn("text-destructive text-sm", className),
      ...props,
      children: body
    }
  );
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent bg-no-repeat px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
const SelectTrigger = React.forwardRef(({ className, size = "default", children, ...props }, ref) => {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    {
      ref,
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "size-4 opacity-50" }) })
      ]
    }
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectContent = React.forwardRef(
  ({
    className,
    children,
    position = "item-aligned",
    align = "center",
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
      SelectPrimitive.Content,
      {
        ref,
        "data-slot": "select-content",
        className: cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
          position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        ),
        position,
        align,
        ...props,
        children: [
          /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
          /* @__PURE__ */ jsx(
            SelectPrimitive.Viewport,
            {
              className: cn(
                "p-1",
                position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
              ),
              children
            }
          ),
          /* @__PURE__ */ jsx(SelectScrollDownButton, {})
        ]
      }
    ) });
  }
);
SelectContent.displayName = SelectPrimitive.Content.displayName;
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronUp, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronDown, { className: "size-4" })
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const submitWarrantySchema = z.object({
  warrantyId: z.string(),
  turnstileToken: z.string(),
  // Installer
  installerName: z.string(),
  installerEmail: z.string(),
  installerPhone: z.string(),
  companyName: z.string().optional(),
  electricalLicence: z.string().optional(),
  // Installation Address
  installStreet: z.string(),
  installSuburb: z.string(),
  installPostcode: z.string(),
  // Homeowner (optional)
  onBehalfOfHomeowner: z.boolean(),
  homeownerName: z.string().optional(),
  homeownerEmail: z.string().optional(),
  homeownerPhone: z.string().optional(),
  homeownerAddress: z.string().optional(),
  // System
  batteryModel: z.string(),
  serialNumbers: z.array(z.string()),
  phases: z.string(),
  gridStatus: z.string(),
  pvSystem: z.boolean(),
  backupGenset: z.boolean(),
  inverterBrand: z.string().optional(),
  inverterModel: z.string().optional(),
  inverterSerial: z.string().optional(),
  // Dates
  installDate: z.string(),
  // ISO date string
  commissioningDate: z.string(),
  // ISO date string
  // Purchase Info
  retailer: z.string().optional(),
  purchaseDate: z.string().optional(),
  // ISO date string
  // Notes
  installationNotes: z.string().optional(),
  // Files
  evidenceFiles: z.array(z.object({
    url: z.string(),
    name: z.string(),
    type: z.string()
  })),
  // Declarations
  installationDeclaration: z.boolean(),
  marketingPermission: z.boolean()
});
const submitWarranty = createServerFn({
  method: "POST"
}).inputValidator(submitWarrantySchema).handler(createSsrRpc("e668dc8b9b007de076ba6b2b95484a4584a4c72e8cf4a28d131c8736c7d552a7"));
function generateWarrantyId() {
  const now = /* @__PURE__ */ new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const dateStr = `${year}${month}${day}`;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomStr = "";
  for (let i = 0; i < 6; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `WR-${dateStr}-${randomStr}`;
}
const optionalString = z.string().optional().or(z.literal(""));
const warrantySchema = z.object({
  // On behalf of homeowner
  onBehalfOfHomeowner: z.boolean().default(false),
  // Contact Information (Installer)
  installerName: z.string().min(2, "Installer name is required"),
  installerEmail: z.string().email("Valid installer email required"),
  installerPhone: z.string().min(8, "Valid installer phone required"),
  // Company Information
  companyName: optionalString,
  electricalLicence: optionalString,
  // Installation Address
  installStreet: z.string().min(3, "Street address is required"),
  installSuburb: z.string().min(2, "Suburb is required"),
  installPostcode: z.string().regex(/^\d{4}$/, "Valid WA postcode required"),
  // Homeowner Contact (if registering on behalf)
  homeownerName: optionalString,
  homeownerEmail: optionalString,
  // Custom validation in superRefine
  homeownerPhone: optionalString,
  homeownerAddress: optionalString,
  // System Information
  batteryModel: z.string().min(2, "Battery model is required"),
  phases: z.enum(["Single", "Three"]),
  gridStatus: z.enum(["on-grid", "off-grid"]).default("on-grid"),
  pvSystem: z.boolean().default(false),
  backupGenset: z.boolean().default(false),
  inverterBrand: optionalString,
  inverterModel: optionalString,
  inverterSerial: optionalString,
  // Serial Numbers (multiple batteries)
  serialNumbers: z.array(z.string().min(3, "Valid serial number required")).min(1, "At least one serial number required"),
  // Dates
  installDate: z.string().min(1, "Installation date is required"),
  commissioningDate: z.string().min(1, "Commissioning date is required"),
  // Purchase Info
  retailer: optionalString,
  purchaseDate: optionalString,
  // Installation Notes
  installationNotes: optionalString,
  // Declarations
  installationDeclaration: z.boolean().refine((val) => val === true, {
    message: "You must confirm proper installation according to manufacturer requirements"
  }),
  marketingPermission: z.boolean().default(false)
}).superRefine((data, ctx) => {
  if (data.onBehalfOfHomeowner) {
    if (!data.homeownerName || data.homeownerName.trim().length === 0) {
      ctx.addIssue({
        path: ["homeownerName"],
        code: z.ZodIssueCode.custom,
        message: "Homeowner name is required when registering for homeowner"
      });
    }
    if (!data.homeownerEmail || data.homeownerEmail.trim().length === 0) {
      ctx.addIssue({
        path: ["homeownerEmail"],
        code: z.ZodIssueCode.custom,
        message: "Homeowner email is required when registering for homeowner"
      });
    } else {
      const emailResult = z.string().email().safeParse(data.homeownerEmail);
      if (!emailResult.success) {
        ctx.addIssue({
          path: ["homeownerEmail"],
          code: z.ZodIssueCode.custom,
          message: "Valid homeowner email is required"
        });
      }
    }
    if (!data.homeownerPhone || data.homeownerPhone.trim().length === 0) {
      ctx.addIssue({
        path: ["homeownerPhone"],
        code: z.ZodIssueCode.custom,
        message: "Homeowner phone is required when registering for homeowner"
      });
    }
  }
});
const INVERTER_DATA = {
  Deye: ["SUN-5K-SG04LP1-AU", "SUN-6K-SG04LP1-AU", "SUN-8K-SG05LP1-AU", "SUN-10K-SG02LP1-AU-AM3", "SUN-16K-SG01LP1-AU", "SUN-5K-SG04LP3-AU", "SUN-10K-SG04LP3-AU", "SUN-12K-SG04LP3-AU"],
  Selectronic: ["SP PRO SPMC481-AU (48V 5kW)", "SP PRO SPMC482-AU (48V 7.5kW)", "SP PRO SPRO482-AU (48V 15kW/20kW)"],
  Victron: ["MultiPlus-II 48/3000/35-32", "MultiPlus-II 48/5000/70-50", "MultiPlus-II 48/8000/110-100", "MultiPlus-II 48/10000/140-100", "Quattro 48/5000/70-100/100", "Quattro 48/10000/140-100/100", "Quattro 48/15000/200-100/100"],
  SMA: ["Sunny Island 4.4M (SI4.4M-13)", "Sunny Island 6.0H (SI6.0H-13)", "Sunny Island 8.0H (SI8.0H-13)"],
  GoodWe: ["GW3648D-ES", "GW5048D-ES", "GW3600-BP", "GW5000-BP", "GW3600-SBP-20", "GW5000-SBP-20"],
  Sungrow: ["SH5.0RS (Single Phase LV)", "SH10RS (Single Phase LV)"],
  Growatt: ["SPH 3000TL BL-UP", "SPH 5000TL BL-UP", "SPH 6000TL BL-UP"],
  Noark: ["Sion Ex9N-DH-5KS-AU (5kW Single Phase)", "Sion Ex9N-DH-6KS-AU (6kW Single Phase)", "Sion Ex9N-DH-8KS-AU (8kW Single Phase)", "Sion Ex9N-DH-10KT-AU (10kW Three Phase)"]
};
function WarrantyPage() {
  const [warrantyId] = useState(() => generateWarrantyId());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [turnstileError, setTurnstileError] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [manualInverterBrand, setManualInverterBrand] = useState("");
  const [manualInverterModel, setManualInverterModel] = useState("");
  const pvCheckboxId = useId();
  const gensetCheckboxId = useId();
  const marketingCheckboxId = useId();
  const form = useForm({
    mode: "onBlur",
    // biome-ignore lint/suspicious/noExplicitAny: version mismatch types
    resolver: zodResolver(warrantySchema),
    defaultValues: {
      onBehalfOfHomeowner: false,
      installerName: "",
      installerEmail: "",
      installerPhone: "",
      companyName: "",
      electricalLicence: "",
      installStreet: "",
      installSuburb: "",
      installPostcode: "",
      homeownerName: "",
      homeownerEmail: "",
      homeownerPhone: "",
      homeownerAddress: "",
      batteryModel: "LV-5KWH100AH",
      // Default to the only available model
      phases: "Single",
      gridStatus: "on-grid",
      pvSystem: false,
      backupGenset: false,
      inverterBrand: "",
      inverterModel: "",
      inverterSerial: "",
      serialNumbers: [""],
      installDate: "",
      commissioningDate: "",
      retailer: "",
      purchaseDate: "",
      installationNotes: "",
      installationDeclaration: true,
      marketingPermission: false
    }
  });
  const {
    watch,
    setValue,
    control,
    handleSubmit,
    reset,
    getValues
  } = form;
  const onBehalfOfHomeowner = watch("onBehalfOfHomeowner");
  const serialNumbers = watch("serialNumbers");
  useEffect(() => {
    try {
      const savedInstaller = localStorage.getItem("renoz_installer_details");
      if (savedInstaller) {
        const parsed = JSON.parse(savedInstaller);
        const currentName = getValues("installerName");
        if (!currentName) {
          if (parsed.installerName) setValue("installerName", parsed.installerName);
          if (parsed.installerEmail) setValue("installerEmail", parsed.installerEmail);
          if (parsed.installerPhone) setValue("installerPhone", parsed.installerPhone);
          if (parsed.companyName) setValue("companyName", parsed.companyName);
          if (parsed.electricalLicence) setValue("electricalLicence", parsed.electricalLicence);
        }
      }
    } catch (e) {
      console.error("Failed to load installer details", e);
    }
  }, [setValue, getValues]);
  const saveInstallerDetails = (data) => {
    try {
      const details = {
        installerName: data.installerName,
        installerEmail: data.installerEmail,
        installerPhone: data.installerPhone,
        companyName: data.companyName,
        electricalLicence: data.electricalLicence
      };
      localStorage.setItem("renoz_installer_details", JSON.stringify(details));
    } catch (e) {
      console.error("Failed to save installer details", e);
    }
  };
  const onSubmit = async (data) => {
    if (!turnstileToken) {
      setTurnstileError(true);
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setTurnstileError(false);
    try {
      const evidenceFiles = uploadedFiles.filter((file) => file.url && !file.uploading && !file.error).map((file) => ({
        url: file.url || "",
        name: file.name,
        type: file.type
      }));
      const finalInverterBrand = data.inverterBrand === "Other" ? manualInverterBrand : data.inverterBrand;
      const finalInverterModel = data.inverterModel === "Other" ? manualInverterModel : data.inverterModel;
      const result = await submitWarranty({
        data: {
          warrantyId,
          turnstileToken,
          installerName: data.installerName,
          installerEmail: data.installerEmail,
          installerPhone: data.installerPhone,
          companyName: data.companyName || void 0,
          electricalLicence: data.electricalLicence || void 0,
          installStreet: data.installStreet,
          installSuburb: data.installSuburb,
          installPostcode: data.installPostcode,
          onBehalfOfHomeowner: data.onBehalfOfHomeowner,
          homeownerName: data.homeownerName || void 0,
          homeownerEmail: data.homeownerEmail || void 0,
          homeownerPhone: data.homeownerPhone || void 0,
          homeownerAddress: data.homeownerAddress || void 0,
          batteryModel: data.batteryModel,
          serialNumbers: data.serialNumbers.filter((s) => s.trim()),
          phases: data.phases,
          gridStatus: data.gridStatus,
          pvSystem: data.pvSystem,
          backupGenset: data.backupGenset,
          inverterBrand: finalInverterBrand || void 0,
          inverterModel: finalInverterModel || void 0,
          inverterSerial: data.inverterSerial || void 0,
          installDate: data.installDate,
          commissioningDate: data.commissioningDate,
          retailer: data.retailer || void 0,
          purchaseDate: data.purchaseDate || void 0,
          installationNotes: data.installationNotes || void 0,
          evidenceFiles,
          installationDeclaration: data.installationDeclaration,
          marketingPermission: data.marketingPermission
        }
      });
      if (!result.success) {
        throw new Error(result.error || "Failed to submit warranty registration");
      }
      saveInstallerDetails(data);
      setSubmitStatus("success");
      reset();
      setManualInverterBrand("");
      setManualInverterModel("");
      setUploadedFiles([]);
      setTurnstileToken(null);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  const batteryCount = serialNumbers.filter((s) => s.trim()).length;
  const nominalCapacity = batteryCount * 5.12;
  const usableCapacity = nominalCapacity * 0.9;
  if (submitStatus === "success") {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[#F5F5F7] flex items-center justify-center p-4", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-2xl", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.9
    }, animate: {
      opacity: 1,
      scale: 1
    }, transition: {
      duration: 0.5,
      type: "spring"
    }, className: "bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-gray-100", children: [
      /* @__PURE__ */ jsx(motion.div, { initial: {
        scale: 0
      }, animate: {
        scale: 1
      }, transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 15
      }, className: "w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(Check, { className: "w-12 h-12 text-[var(--renoz-green)]" }) }),
      /* @__PURE__ */ jsx(motion.h2, { initial: {
        opacity: 0,
        y: 10
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.3
      }, className: "text-3xl font-bold text-gray-900 mb-4", children: "Warranty Activated!" }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.4
      }, className: "bg-gray-50 rounded-xl p-4 mb-8 inline-block", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 uppercase font-semibold tracking-wider mb-1", children: "Warranty Reference" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-mono font-bold text-[var(--renoz-green)] tracking-widest", children: warrantyId })
      ] }),
      /* @__PURE__ */ jsx(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.5
      }, className: "text-gray-600 mb-8 max-w-md mx-auto leading-relaxed", children: "Thank you for registering your installation. We've sent confirmation emails to you and the homeowner with the official warranty certificate." }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 10
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.6
      }, className: "flex justify-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { onClick: () => window.location.reload(), variant: "outline", className: "border-2", children: "Register Another System" }),
        /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-[var(--renoz-green)] hover:bg-[var(--renoz-green)]/90", children: /* @__PURE__ */ jsx("a", { href: "/", children: "Return Home" }) })
      ] })
    ] }) }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#F5F5F7]", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative h-[40vh] min-h-[300px] flex items-center overflow-hidden bg-[var(--black)] text-white", children: [
      /* @__PURE__ */ jsxs(motion.div, { className: "absolute inset-0 z-0", initial: {
        scale: 1.1
      }, animate: {
        scale: 1
      }, transition: {
        duration: 10,
        ease: "easeOut"
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-cover bg-center opacity-40", style: {
          backgroundImage: "url('/images/case-studies/Harvey-35kWh.webp')"
        } }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full pt-10", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        x: -30
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        duration: 0.8
      }, className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--renoz-green)] text-white text-xs font-bold tracking-widest uppercase mb-4", children: [
          /* @__PURE__ */ jsx(Shield, { className: "w-3 h-3" }),
          "Official Registration"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-none", children: "Activate Your Warranty" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-300 max-w-lg leading-relaxed", children: "Secure your investment. Register your RENOZ system to activate your 10-year performance guarantee." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16 relative z-20", children: /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "grid grid-cols-1 lg:grid-cols-12 gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-4 space-y-6", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.2
      }, className: "sticky top-24 space-y-6", children: [
        /* @__PURE__ */ jsxs(Card, { className: "border-none shadow-xl bg-white p-6 rounded-2xl overflow-hidden relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-[var(--renoz-green)]" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase text-gray-400 tracking-wider", children: "Reference ID" }),
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-[var(--renoz-green)] rounded-full animate-pulse" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "font-mono text-2xl font-bold text-[var(--black)] tracking-wider mb-1", children: warrantyId }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Auto-generated session ID" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[var(--black)] text-white p-6 rounded-2xl shadow-xl", children: [
          /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-[var(--renoz-green)]" }),
            "Why Register?"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-gray-300", children: [
              /* @__PURE__ */ jsx(CircleCheckBig, { className: "w-5 h-5 text-[var(--renoz-green)] shrink-0" }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Official Certification" }),
                /* @__PURE__ */ jsx("br", {}),
                "Receive a digital warranty certificate for your property records."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-gray-300", children: [
              /* @__PURE__ */ jsx(CircleCheckBig, { className: "w-5 h-5 text-[var(--renoz-green)] shrink-0" }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Priority Support" }),
                /* @__PURE__ */ jsx("br", {}),
                "Direct access to our Perth engineering team for any technical queries."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-gray-300", children: [
              /* @__PURE__ */ jsx(CircleCheckBig, { className: "w-5 h-5 text-[var(--renoz-green)] shrink-0" }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Performance Guarantee" }),
                /* @__PURE__ */ jsx("br", {}),
                "Activate your 10-year capacity retention warranty."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden lg:block bg-white p-6 rounded-2xl shadow-sm border border-gray-100", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold uppercase text-gray-400 tracking-wider mb-4", children: "Form Sections" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [{
            id: 1,
            label: "Contact Details",
            active: true
          }, {
            id: 2,
            label: "System Information",
            active: false
          }, {
            id: 3,
            label: "Installation Photos",
            active: false
          }, {
            id: 4,
            label: "Declaration",
            active: false
          }].map((step) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
            /* @__PURE__ */ jsx("div", { className: `w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step.active ? "bg-[var(--renoz-green)] text-white" : "bg-gray-100 text-gray-400"}`, children: step.id }),
            /* @__PURE__ */ jsx("span", { className: step.active ? "font-bold text-[var(--black)]" : "text-gray-500", children: step.label })
          ] }, step.id)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8 space-y-6", children: [
        /* @__PURE__ */ jsxs(Card, { className: "p-6 md:p-8 rounded-2xl shadow-sm border-none bg-white", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[var(--renoz-green)]/10 flex items-center justify-center text-[var(--renoz-green)]", children: /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-[var(--black)]", children: "Installer Information" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Who is registering this warranty?" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx(FormField, { control, name: "onBehalfOfHomeowner", render: ({
              field
            }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex flex-row items-center justify-between rounded-xl border p-4 shadow-sm bg-gray-50/50", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-0.5", children: [
                /* @__PURE__ */ jsx(FormLabel, { className: "text-base", children: "Registering for a client?" }),
                /* @__PURE__ */ jsx(FormDescription, { children: "Enable this if you are an installer registering on behalf of the homeowner." })
              ] }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Checkbox, { checked: field.value, onCheckedChange: field.onChange, className: "h-6 w-6" }) })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsx(FormField, { control, name: "installerName", render: ({
                field
              }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Installer Name *" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "John Smith", ...field, className: "w-full bg-gray-50" }) }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] }) }),
              /* @__PURE__ */ jsx(FormField, { control, name: "installerEmail", render: ({
                field
              }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Email Address *" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { type: "email", placeholder: "john@example.com", ...field, className: "w-full bg-gray-50" }) }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsx(FormField, { control, name: "installerPhone", render: ({
                field
              }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Phone Number *" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { type: "tel", placeholder: "0400 000 000", ...field, className: "w-full bg-gray-50" }) }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] }) }),
              /* @__PURE__ */ jsx(FormField, { control, name: "companyName", render: ({
                field
              }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Company Name" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Acme Solar", ...field, className: "w-full bg-gray-50" }) }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] }) })
            ] }),
            /* @__PURE__ */ jsx(FormField, { control, name: "electricalLicence", render: ({
              field
            }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Electrical Licence Number" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "EC000000", ...field, className: "w-full bg-gray-50" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "p-6 md:p-8 rounded-2xl shadow-sm border-none bg-white", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[var(--renoz-green)]/10 flex items-center justify-center text-[var(--renoz-green)]", children: /* @__PURE__ */ jsx(FileCheck, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-[var(--black)]", children: "Site Information" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Where is the system installed?" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx(FormField, { control, name: "installStreet", render: ({
              field
            }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Street Address *" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "123 Solar Way", ...field, className: "w-full bg-gray-50", autoComplete: "street-address" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsx(FormField, { control, name: "installSuburb", render: ({
                field
              }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Suburb *" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Perth", ...field, className: "w-full bg-gray-50", autoComplete: "address-level2" }) }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] }) }),
              /* @__PURE__ */ jsx(FormField, { control, name: "installPostcode", render: ({
                field
              }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Postcode *" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "6000", ...field, className: "w-full bg-gray-50", autoComplete: "postal-code" }) }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] }) })
            ] }),
            /* @__PURE__ */ jsx(AnimatePresence, { children: onBehalfOfHomeowner && /* @__PURE__ */ jsxs(motion.div, { initial: {
              opacity: 0,
              height: 0
            }, animate: {
              opacity: 1,
              height: "auto"
            }, exit: {
              opacity: 0,
              height: 0
            }, className: "space-y-6 pt-6 border-t border-gray-100", children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 mb-2", children: /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-gray-500", children: "Homeowner Details" }) }),
              /* @__PURE__ */ jsx(FormField, { control, name: "homeownerName", render: ({
                field
              }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Homeowner Name *" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Jane Doe", ...field, className: "w-full bg-gray-50" }) }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsx(FormField, { control, name: "homeownerEmail", render: ({
                  field
                }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                  /* @__PURE__ */ jsx(FormLabel, { children: "Homeowner Email *" }),
                  /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { type: "email", placeholder: "jane@example.com", ...field, className: "w-full bg-gray-50" }) }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] }) }),
                /* @__PURE__ */ jsx(FormField, { control, name: "homeownerPhone", render: ({
                  field
                }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                  /* @__PURE__ */ jsx(FormLabel, { children: "Homeowner Phone *" }),
                  /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { type: "tel", placeholder: "0400 000 000", ...field, className: "w-full bg-gray-50" }) }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] }) })
              ] }),
              /* @__PURE__ */ jsx(FormField, { control, name: "homeownerAddress", render: ({
                field
              }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Homeowner Address (if different)" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Leave blank if same as installation address", ...field, className: "w-full bg-gray-50" }) }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] }) })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "p-6 md:p-8 rounded-2xl shadow-sm border-none bg-white", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[var(--renoz-green)]/10 flex items-center justify-center text-[var(--renoz-green)]", children: /* @__PURE__ */ jsx("div", { className: "text-lg", children: "⚡" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-[var(--black)]", children: "System Configuration" }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
                nominalCapacity.toFixed(2),
                " kWh Nominal /",
                " ",
                usableCapacity.toFixed(2),
                " kWh Usable"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-gray-500", children: "Battery Units" }),
                /* @__PURE__ */ jsxs("span", { className: "text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium", children: [
                  serialNumbers.filter((s) => s.trim()).length,
                  " Units Total"
                ] })
              ] }),
              serialNumbers.map((_, index) => /* @__PURE__ */ jsx(FormField, { control, name: `serialNumbers.${index}`, render: ({
                field
              }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                /* @__PURE__ */ jsxs(FormLabel, { className: "text-xs uppercase text-gray-500", children: [
                  "Battery ",
                  index + 1,
                  " Serial"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-2 w-full", children: [
                  /* @__PURE__ */ jsx(FormControl, { className: "flex-1", children: /* @__PURE__ */ jsx(Input, { placeholder: "e.g., LV51-2515000001", ...field, className: "w-full font-mono bg-gray-50" }) }),
                  serialNumbers.length > 1 && /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", className: "shrink-0 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200", onClick: () => {
                    const newSerials = serialNumbers.filter((_2, i) => i !== index);
                    setValue("serialNumbers", newSerials);
                  }, children: "Remove" })
                ] }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] }) }, index)),
              /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: () => {
                setValue("serialNumbers", [...serialNumbers, ""]);
              }, className: "w-full border-dashed border-2 hover:border-[var(--renoz-green)] hover:text-[var(--renoz-green)] h-12", children: "+ Add Another Battery Unit" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-px bg-gray-100" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-gray-500", children: "System Specs" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsx(FormField, { control, name: "batteryModel", render: ({
                  field
                }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                  /* @__PURE__ */ jsx(FormLabel, { children: "Battery Model *" }),
                  /* @__PURE__ */ jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value || "LV-5KWH100AH", children: [
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full bg-gray-50", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select model" }) }) }),
                    /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsx(SelectItem, { value: "LV-5KWH100AH", children: "LV-5KWH100AH (5.12 kWh)" }) })
                  ] }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] }) }),
                /* @__PURE__ */ jsx(FormField, { control, name: "phases", render: ({
                  field
                }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                  /* @__PURE__ */ jsx(FormLabel, { children: "Power Type *" }),
                  /* @__PURE__ */ jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full bg-gray-50", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select phases" }) }) }),
                    /* @__PURE__ */ jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsx(SelectItem, { value: "Single", children: "Single Phase" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "Three", children: "Three Phase" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] }) }),
                /* @__PURE__ */ jsx(FormField, { control, name: "gridStatus", render: ({
                  field
                }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                  /* @__PURE__ */ jsx(FormLabel, { children: "Grid Connection *" }),
                  /* @__PURE__ */ jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full bg-gray-50", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select grid status" }) }) }),
                    /* @__PURE__ */ jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsx(SelectItem, { value: "on-grid", children: "On-grid (Standard)" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "off-grid", children: "Off-grid (Standalone)" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsx(FormField, { control, name: "inverterBrand", render: ({
                  field
                }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                  /* @__PURE__ */ jsx(FormLabel, { children: "Inverter Brand" }),
                  /* @__PURE__ */ jsxs(Select, { onValueChange: (val) => {
                    field.onChange(val);
                    if (val !== "Other") {
                      setValue("inverterModel", "");
                    } else {
                      setValue("inverterModel", "Other");
                    }
                  }, value: field.value || "", children: [
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full bg-gray-50", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select Brand" }) }) }),
                    /* @__PURE__ */ jsxs(SelectContent, { children: [
                      Object.keys(INVERTER_DATA).map((brand) => /* @__PURE__ */ jsx(SelectItem, { value: brand, children: brand }, brand)),
                      /* @__PURE__ */ jsx(SelectItem, { value: "Other", children: "Other / Not Listed" })
                    ] })
                  ] }),
                  field.value === "Other" && /* @__PURE__ */ jsx(Input, { placeholder: "Enter Brand Name", value: manualInverterBrand, onChange: (e) => setManualInverterBrand(e.target.value), className: "mt-2 w-full bg-gray-50" }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] }) }),
                /* @__PURE__ */ jsx(FormField, { control, name: "inverterModel", render: ({
                  field
                }) => {
                  const selectedBrand = watch("inverterBrand");
                  const models = selectedBrand && selectedBrand !== "Other" ? INVERTER_DATA[selectedBrand] : [];
                  return /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                    /* @__PURE__ */ jsx(FormLabel, { children: "Inverter Model" }),
                    /* @__PURE__ */ jsxs(Select, { onValueChange: field.onChange, value: field.value || "", disabled: !selectedBrand, children: [
                      /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full bg-gray-50", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: !selectedBrand ? "Select Brand first" : "Select Model" }) }) }),
                      /* @__PURE__ */ jsxs(SelectContent, { children: [
                        models.map((model) => /* @__PURE__ */ jsx(SelectItem, { value: model, children: model }, model)),
                        /* @__PURE__ */ jsx(SelectItem, { value: "Other", children: "Other / Not Listed" })
                      ] })
                    ] }),
                    field.value === "Other" && /* @__PURE__ */ jsx(Input, { placeholder: "Enter Model Number", value: manualInverterModel, onChange: (e) => setManualInverterModel(e.target.value), className: "mt-2 w-full bg-gray-50" }),
                    /* @__PURE__ */ jsx(FormMessage, {})
                  ] });
                } }),
                /* @__PURE__ */ jsx(FormField, { control, name: "inverterSerial", render: ({
                  field
                }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                  /* @__PURE__ */ jsx(FormLabel, { children: "Inverter Serial" }),
                  /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Serial #", ...field, className: "w-full bg-gray-50" }) }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2", children: [
                /* @__PURE__ */ jsx(FormField, { control, name: "pvSystem", render: ({
                  field
                }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full flex flex-row items-center gap-3 rounded-xl border p-3 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer", children: [
                  /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Checkbox, { id: pvCheckboxId, checked: field.value, onCheckedChange: field.onChange }) }),
                  /* @__PURE__ */ jsx(FormLabel, { htmlFor: pvCheckboxId, className: "text-sm font-medium cursor-pointer flex-1 mb-0", children: "PV Solar Connected" })
                ] }) }),
                /* @__PURE__ */ jsx(FormField, { control, name: "backupGenset", render: ({
                  field
                }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full flex flex-row items-center gap-3 rounded-xl border p-3 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer", children: [
                  /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Checkbox, { id: gensetCheckboxId, checked: field.value, onCheckedChange: field.onChange }) }),
                  /* @__PURE__ */ jsx(FormLabel, { htmlFor: gensetCheckboxId, className: "text-sm font-medium cursor-pointer flex-1 mb-0", children: "Backup Generator" })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-px bg-gray-100" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-gray-500", children: "Timeline" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6", children: [
                /* @__PURE__ */ jsx(FormField, { control, name: "installDate", render: ({
                  field
                }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                  /* @__PURE__ */ jsx(FormLabel, { children: "Installation Date *" }),
                  /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(DatePicker, { value: field.value, onChange: field.onChange, placeholder: "Select date", maxDate: /* @__PURE__ */ new Date() }) }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] }) }),
                /* @__PURE__ */ jsx(FormField, { control, name: "commissioningDate", render: ({
                  field
                }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                  /* @__PURE__ */ jsx(FormLabel, { children: "Commissioning Date *" }),
                  /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(DatePicker, { value: field.value, onChange: field.onChange, placeholder: "Select date", maxDate: /* @__PURE__ */ new Date() }) }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] }) }),
                /* @__PURE__ */ jsx(FormField, { control, name: "retailer", render: ({
                  field
                }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                    /* @__PURE__ */ jsx(FormLabel, { className: "mb-0", children: "Purchased From (Optional)" }),
                    /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => {
                      const company = getValues("companyName");
                      const installer = getValues("installerName");
                      if (company) setValue("retailer", company);
                      else if (installer) setValue("retailer", installer);
                    }, className: "text-[10px] font-bold uppercase tracking-tight text-[var(--renoz-green)] hover:text-[var(--renoz-green)]/80 flex items-center gap-1 bg-[var(--renoz-green)]/5 px-2 py-0.5 rounded-md transition-colors", children: [
                      /* @__PURE__ */ jsx(Copy, { className: "w-2.5 h-2.5" }),
                      " Same as Installer"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Retailer Name", ...field, className: "w-full bg-gray-50" }) }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] }) }),
                /* @__PURE__ */ jsx(FormField, { control, name: "purchaseDate", render: ({
                  field
                }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
                  /* @__PURE__ */ jsx(FormLabel, { children: "Purchase Date (Optional)" }),
                  /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(DatePicker, { value: field.value, onChange: field.onChange, placeholder: "Select date", maxDate: /* @__PURE__ */ new Date() }) }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "p-6 md:p-8 rounded-2xl shadow-sm border-none bg-white", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[var(--renoz-green)]/10 flex items-center justify-center text-[var(--renoz-green)]", children: /* @__PURE__ */ jsx("div", { className: "text-lg", children: "📸" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-[var(--black)]", children: "Evidence & Notes" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Installation context and photos" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsx(FormField, { control, name: "installationNotes", render: ({
              field
            }) => /* @__PURE__ */ jsxs(FormItem, { className: "w-full", children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Installation Notes (Optional)" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Textarea, { placeholder: "Add any specific installation details, system configuration details, or important notes about this installation...", className: "w-full resize-none min-h-[100px] bg-gray-50", ...field }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-gray-500", children: "Photo Evidence" }),
              /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-xl border border-blue-100", children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-blue-900 mb-2", children: "Recommended Photos:" }),
                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 list-disc pl-5 space-y-1", children: [
                  /* @__PURE__ */ jsx("li", { children: "Wide shot of installation environment" }),
                  /* @__PURE__ */ jsx("li", { children: "Close-up of battery serial number labels" }),
                  /* @__PURE__ */ jsx("li", { children: "Inverter connection points" }),
                  /* @__PURE__ */ jsx("li", { children: "Commissioning screen showing successful setup" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(FileUpload, { warrantyId, files: uploadedFiles, onFilesChange: setUploadedFiles, maxFileSize: 10 * 1024 * 1024, allowedTypes: ["image/jpeg", "image/png", "application/pdf"] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "p-6 md:p-8 rounded-2xl shadow-sm border-none bg-white", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[var(--renoz-green)]/10 flex items-center justify-center text-[var(--renoz-green)]", children: /* @__PURE__ */ jsx("div", { className: "text-lg", children: "✍️" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-[var(--black)]", children: "Final Declaration" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Review and submit" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx(FormField, { control, name: "installationDeclaration", render: ({
              field
            }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex flex-row items-start space-x-3 space-y-0 rounded-xl border p-4 bg-gray-50", children: [
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Checkbox, { checked: field.value, onCheckedChange: field.onChange }) }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1 leading-none", children: [
                /* @__PURE__ */ jsx(FormLabel, { className: "text-base font-medium", children: "I confirm the batteries have been installed according to RENOZ Energy's installation requirements and user manual *" }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(FormField, { control, name: "marketingPermission", render: ({
              field
            }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex flex-row items-start space-x-3 space-y-0 rounded-xl border p-4 bg-gray-50", children: [
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Checkbox, { id: marketingCheckboxId, checked: field.value, onCheckedChange: field.onChange }) }),
              /* @__PURE__ */ jsx("div", { className: "space-y-1 leading-none", children: /* @__PURE__ */ jsx(FormLabel, { htmlFor: marketingCheckboxId, className: "text-sm font-medium leading-relaxed cursor-pointer", children: "I agree to receive marketing communications from RENOZ Energy about my battery system" }) })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "pt-4", children: [
              /* @__PURE__ */ jsx(Turnstile, { siteKey: "0x4AAAAAABHX5BtfeC3UIcgA", onVerify: setTurnstileToken, onExpire: () => setTurnstileToken(null), onError: () => {
                setTurnstileToken(null);
                setTurnstileError(true);
              } }),
              turnstileError && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-2 font-medium", children: "Please complete the spam verification." })
            ] }),
            submitStatus === "error" && /* @__PURE__ */ jsxs(motion.div, { initial: {
              opacity: 0,
              height: 0
            }, animate: {
              opacity: 1,
              height: "auto"
            }, className: "p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(CircleX, { className: "w-6 h-6 shrink-0" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold", children: "There was an error submitting your warranty registration." }),
                /* @__PURE__ */ jsx("p", { className: "text-sm mt-1", children: "Please check your information and try again, or contact us directly." })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxs(Button, { type: "submit", variant: "default", size: "lg", className: "w-full rounded-xl py-4 text-lg shadow-lg shadow-[var(--renoz-green)]/20", disabled: isSubmitting || !turnstileToken && true, children: [
          isSubmitting ? "Submitting..." : "Register Warranty",
          !isSubmitting && /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
        ] }) })
      ] }),
      " "
    ] }) }) })
  ] });
}
export {
  WarrantyPage as component
};
