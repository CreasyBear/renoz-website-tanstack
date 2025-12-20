import { createFileRoute } from "@tanstack/react-router";

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title: "Terms of Service - RENOZ Energy" },
			{
				name: "description",
				content:
					"RENOZ Energy terms of service. Read our terms and conditions for using our website and services.",
			},
			{ property: "og:title", content: "Terms of Service - RENOZ Energy" },
			{ property: "og:url", content: `${baseUrl}/terms` },
		],
	}),
	component: TermsPage,
});

function TermsPage() {
	return (
		<div className="min-h-screen bg-[var(--cream)]">
			<section className="pt-40 pb-20">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl md:text-5xl font-bold mb-12 text-[var(--black)] tracking-tight">
						Terms of Service
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
								1. Agreement to Terms
							</h3>
							<p>
								These Terms of Service constitute a legally binding agreement
								made between you and RENOZ Energy regarding your access to and
								use of the renoz.energy website. By accessing the site, you
								agree that you have read, understood, and agreed to be bound by
								all of these Terms of Service.
							</p>
						</section>

						<section>
							<h3 className="text-xl font-bold text-[var(--black)] mb-3">
								2. Intellectual Property Rights
							</h3>
							<p>
								Unless otherwise indicated, the Site is our proprietary property
								and all source code, databases, functionality, software, website
								designs, audio, video, text, photographs, and graphics on the
								Site (collectively, the "Content") and the trademarks, service
								marks, and logos contained therein (the "Marks") are owned or
								controlled by us or licensed to us, and are protected by
								copyright and trademark laws.
							</p>
						</section>

						<section>
							<h3 className="text-xl font-bold text-[var(--black)] mb-3">
								3. Product Information
							</h3>
							<p>
								We make every effort to display as accurately as possible the
								colors, features, specifications, and details of the products
								available on the Site. However, we do not guarantee that the
								colors, features, specifications, and details of the products
								will be accurate, complete, reliable, current, or free of other
								errors, and your electronic display may not accurately reflect
								the actual colors and details of the products.
							</p>
						</section>

						<section>
							<h3 className="text-xl font-bold text-[var(--black)] mb-3">
								4. Warranty Registration
							</h3>
							<p>
								Warranty registrations submitted through our online portal are
								subject to verification. Submission of a warranty registration
								form does not automatically guarantee warranty coverage.
								Coverage is determined in accordance with our formal Product
								Warranty document provided at the time of purchase.
							</p>
						</section>

						<section>
							<h3 className="text-xl font-bold text-[var(--black)] mb-3">
								5. Limitation of Liability
							</h3>
							<p>
								In no event will we or our directors, employees, or agents be
								liable to you or any third party for any direct, indirect,
								consequential, exemplary, incidental, special, or punitive
								damages, including lost profit, lost revenue, loss of data, or
								other damages arising from your use of the site.
							</p>
						</section>

						<section>
							<h3 className="text-xl font-bold text-[var(--black)] mb-3">
								6. Governing Law
							</h3>
							<p>
								These Terms shall be governed by and defined following the laws
								of Western Australia. RENOZ Energy and yourself irrevocably
								consent that the courts of Western Australia shall have
								exclusive jurisdiction to resolve any dispute which may arise in
								connection with these terms.
							</p>
						</section>

						<section className="pt-8 border-t border-gray-200">
							<h3 className="text-xl font-bold text-[var(--black)] mb-3">
								Contact Information
							</h3>
							<p>
								Questions about the Terms of Service should be sent to us at:
								<br />
								<br />
								<strong>RENOZ Energy Pty Ltd</strong>
								<br />
								Unit 4, 8 Murphy Street
								<br />
								O'Connor WA 6163
								<br />
								<a
									href="mailto:sales@renoz.energy"
									className="text-[var(--renoz-green)] hover:underline"
								>
									sales@renoz.energy
								</a>
							</p>
						</section>
					</div>
				</div>
			</section>
		</div>
	);
}
