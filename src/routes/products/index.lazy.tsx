import { createLazyFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "./index";

export const Route = createLazyFileRoute("/products/")({
	component: ProductsPage,
});
