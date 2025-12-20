import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "../components/ui/Button";

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/cookies")({
	head: () => ({
		meta: [
			{ title: "Cookie Policy - RENOZ Energy" },
			{
				name: "description",
				content:
					"RENOZ Energy cookie policy. Understanding how we use cookies to improve your experience.",
			},
			{ property: "og:title", content: "Cookie Policy - RENOZ Energy" },
			{ property: "og:url", content: `${baseUrl}/cookies` },
		],
	}),
	component: CookiePage,
});

function CookiePage() {
	return (
		<div className="min-h-screen bg-[var(--cream)]">
			<section className="pt-40 pb-20">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl md:text-5xl font-bold mb-12 text-[var(--black)] tracking-tight">
						Cookie Policy
					</h1>

					<div className="prose prose-lg max-w-none text-[var(--text-muted)] space-y-8 leading-relaxed">
						<p className="text-sm text-gray-500 font-medium">
							Last updated:{" "}
							{new Date().toLocaleDateString("en-AU", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</p>

						<section>
							<h3 className="text-xl font-bold text-[var(--black)] mb-3">
								1. What are cookies?
							</h3>
							<p>
								Cookies are small text files that are stored on your computer or
								mobile device when you visit a website. They allow the website
								to remember your actions and preferences (such as login,
								language, font size, and other display preferences) over a
								period of time.
							</p>
						</section>

						<section>
							<h3 className="text-xl font-bold text-[var(--black)] mb-3">
								2. How we use cookies
							</h3>
							<p>We use cookies for the following purposes:</p>
							<ul className="list-disc pl-5 space-y-2 mt-2">
								<li>
									<strong>Essential Cookies:</strong> Required for the website
									to function properly (e.g., secure warranty registration
									forms).
								</li>
								<li>
									<strong>Analytics Cookies:</strong> Help us understand how
									visitors interact with the website by collecting and reporting
									information anonymously.
								</li>
								<li>
									<strong>Functionality Cookies:</strong> Allow the website to
									remember choices you make (such as your preferred language or
									region).
								</li>
							</ul>
						</section>

						<section>
							<h3 className="text-xl font-bold text-[var(--black)] mb-3">
								3. Managing Cookies
							</h3>
							<p>
								You can control and/or delete cookies as you wish. You can
								delete all cookies that are already on your computer and you can
								set most browsers to prevent them from being placed. If you do
								this, however, you may have to manually adjust some preferences
								every time you visit a site and some services and
								functionalities may not work.
							</p>
						</section>

						<section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
							<h3 className="text-xl font-bold text-[var(--black)] mb-4">
								Cookie Preferences
							</h3>
							<p className="mb-6 text-sm">
								We respect your privacy. You can choose to reject non-essential
								cookies. Essential cookies required for site functionality
								cannot be disabled.
							</p>
							<div className="flex gap-4">
								<Button variant="outline" onClick={() => window.history.back()}>
									Reject All Non-Essential
								</Button>
								<Button variant="primary" asChild>
									<Link to="/">Accept All & Continue</Link>
								</Button>
							</div>
						</section>
					</div>
				</div>
			</section>
		</div>
	);
}
