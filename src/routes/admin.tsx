import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import Card from "../components/ui/Card";
import { supabase } from "../lib/supabase";

export const Route = createFileRoute("/admin")({ component: AdminPage });

interface Product {
	id: string;
	name: string;
	category: string;
	description: string | null;
	featured: boolean;
}

interface Post {
	id: string;
	title: string;
	slug: string;
	published: boolean;
}

function AdminPage() {
	const [products, setProducts] = useState<Product[]>([]);
	const [posts, setPosts] = useState<Post[]>([]);
	const [activeTab, setActiveTab] = useState<"products" | "posts">("products");
	const [loading, setLoading] = useState(true);

	const loadData = useCallback(async () => {
		setLoading(true);
		try {
			const [productsResult, postsResult] = await Promise.all([
				supabase
					.from("products")
					.select("id, name, category, description, featured"),
				supabase.from("posts").select("id, title, slug, published"),
			]);

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

	return (
		<div className="min-h-screen bg-[var(--cream)] py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-5xl font-bold mb-8">CMS Admin</h1>

				<div className="flex gap-4 mb-8">
					<button
						onClick={() => setActiveTab("products")}
						className={`px-6 py-3 rounded-lg font-medium transition-colors ${
							activeTab === "products"
								? "bg-[var(--renoz-green)] text-white"
								: "bg-[var(--white)] text-[var(--text-primary)] hover:bg-gray-100"
						}`}
					>
						Products
					</button>
					<button
						onClick={() => setActiveTab("posts")}
						className={`px-6 py-3 rounded-lg font-medium transition-colors ${
							activeTab === "posts"
								? "bg-[var(--renoz-green)] text-white"
								: "bg-[var(--white)] text-[var(--text-primary)] hover:bg-gray-100"
						}`}
					>
						Blog Posts
					</button>
				</div>

				{loading ? (
					<div className="text-center py-12">
						<p className="text-[var(--text-muted)]">Loading...</p>
					</div>
				) : (
					<>
						{activeTab === "products" && (
							<div>
								<div className="flex justify-between items-center mb-6">
									<h2 className="text-3xl font-bold">Products</h2>
									<Button variant="primary">Add Product</Button>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{products.map((product) => (
										<Card key={product.id}>
											<div className="flex justify-between items-start mb-2">
												<h3 className="text-xl font-bold">{product.name}</h3>
												{product.featured && (
													<span className="text-xs bg-[var(--renoz-green)] text-white px-2 py-1 rounded">
														Featured
													</span>
												)}
											</div>
											<p className="text-sm text-[var(--text-muted)] mb-2 capitalize">
												{product.category}
											</p>
											<p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-2">
												{product.description || "No description"}
											</p>
											<div className="flex gap-2">
												<Button variant="outline" size="sm" className="flex-1">
													Edit
												</Button>
												<Button
													variant="secondary"
													size="sm"
													className="flex-1"
												>
													Delete
												</Button>
											</div>
										</Card>
									))}
								</div>
								{products.length === 0 && (
									<Card>
										<p className="text-center text-[var(--text-muted)] py-8">
											No products found. Add your first product to get started.
										</p>
									</Card>
								)}
							</div>
						)}

						{activeTab === "posts" && (
							<div>
								<div className="flex justify-between items-center mb-6">
									<h2 className="text-3xl font-bold">Blog Posts</h2>
									<Button variant="primary">Add Post</Button>
								</div>
								<div className="space-y-4">
									{posts.map((post) => (
										<Card key={post.id}>
											<div className="flex justify-between items-start">
												<div className="flex-1">
													<div className="flex items-center gap-3 mb-2">
														<h3 className="text-xl font-bold">{post.title}</h3>
														{post.published ? (
															<span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
																Published
															</span>
														) : (
															<span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
																Draft
															</span>
														)}
													</div>
													<p className="text-sm text-[var(--text-muted)]">
														/{post.slug}
													</p>
												</div>
												<div className="flex gap-2">
													<Button variant="outline" size="sm">
														Edit
													</Button>
													<Button variant="secondary" size="sm">
														Delete
													</Button>
												</div>
											</div>
										</Card>
									))}
								</div>
								{posts.length === 0 && (
									<Card>
										<p className="text-center text-[var(--text-muted)] py-8">
											No blog posts found. Add your first post to get started.
										</p>
									</Card>
								)}
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
}
