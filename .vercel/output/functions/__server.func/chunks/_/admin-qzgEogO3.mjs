import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from "react";
import { s as supabase, B as Button } from "./router-6SuvEb_N.mjs";
import { C as Card } from "./Card-BYhoWMQ1.mjs";
import "@tanstack/react-router";
import "@vercel/analytics/react";
import "clsx";
import "framer-motion";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@supabase/supabase-js";
function AdminPage() {
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("products");
  const [loading, setLoading] = useState(true);
  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [productsResult, postsResult] = await Promise.all([supabase.from("website_products").select("id, name, category, description, featured"), supabase.from("posts").select("id, title, slug, published")]);
      if (productsResult.data) setProducts(productsResult.data);
      if (postsResult.data) setPosts(postsResult.data);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    loadData();
  }, [loadData]);
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[var(--cream)] py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold mb-8", children: "CMS Admin" }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mb-8", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setActiveTab("products"), className: `px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === "products" ? "bg-[var(--renoz-green)] text-white" : "bg-[var(--white)] text-[var(--text-primary)] hover:bg-gray-100"}`, children: "Products" }),
      /* @__PURE__ */ jsx("button", { onClick: () => setActiveTab("posts"), className: `px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === "posts" ? "bg-[var(--renoz-green)] text-white" : "bg-[var(--white)] text-[var(--text-primary)] hover:bg-gray-100"}`, children: "Blog Posts" })
    ] }),
    loading ? /* @__PURE__ */ jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ jsx("p", { className: "text-[var(--text-muted)]", children: "Loading..." }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      activeTab === "products" && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Products" }),
          /* @__PURE__ */ jsx(Button, { variant: "primary", children: "Add Product" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: products.map((product) => /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: product.name }),
            product.featured && /* @__PURE__ */ jsx("span", { className: "text-xs bg-[var(--renoz-green)] text-white px-2 py-1 rounded", children: "Featured" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-[var(--text-muted)] mb-2 capitalize", children: product.category }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-[var(--text-muted)] mb-4 line-clamp-2", children: product.description || "No description" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "flex-1", children: "Edit" }),
            /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", className: "flex-1", children: "Delete" })
          ] })
        ] }, product.id)) }),
        products.length === 0 && /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx("p", { className: "text-center text-[var(--text-muted)] py-8", children: "No products found. Add your first product to get started." }) })
      ] }),
      activeTab === "posts" && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Blog Posts" }),
          /* @__PURE__ */ jsx(Button, { variant: "primary", children: "Add Post" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: posts.map((post) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: post.title }),
              post.published ? /* @__PURE__ */ jsx("span", { className: "text-xs bg-green-100 text-green-800 px-2 py-1 rounded", children: "Published" }) : /* @__PURE__ */ jsx("span", { className: "text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded", children: "Draft" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-[var(--text-muted)]", children: [
              "/",
              post.slug
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "Edit" }),
            /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Delete" })
          ] })
        ] }) }, post.id)) }),
        posts.length === 0 && /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx("p", { className: "text-center text-[var(--text-muted)] py-8", children: "No blog posts found. Add your first post to get started." }) })
      ] })
    ] })
  ] }) });
}
export {
  AdminPage as component
};
