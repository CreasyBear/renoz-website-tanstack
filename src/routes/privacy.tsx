import { createFileRoute } from "@tanstack/react-router";

const baseUrl = "https://renoz.energy";

export const Route = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy - RENOZ Energy" },
			{
				name: "description",
				content:
					"RENOZ Energy privacy policy. Learn how we collect, use, and protect your personal information.",
			},
			{ property: "og:title", content: "Privacy Policy - RENOZ Energy" },
			{ property: "og:url", content: `${baseUrl}/privacy` },
		],
	}),
	component: PrivacyPage,
});

function PrivacyPage() {
	return (
		<div className="min-h-screen bg-[var(--cream)]">
			<section className="pt-40 pb-20">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl md:text-5xl font-bold mb-12 text-[var(--black)] tracking-tight">
						Privacy Policy
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
								1. Overview
							</h3>
							<p>
								RENOZ Energy ("we", "our", or "us") respects your privacy and is
								committed to protecting your personal data. This policy outlines
								how we handle your information when you interact with our
								website and services.
							</p>
						</section>

						<section>
							<h3 className="text-xl font-bold text-[var(--black)] mb-3">
								2. Information Collection
							</h3>
							<p>
								We collect information necessary to provide our services,
								including:
							</p>
							<ul className="list-disc pl-5 space-y-2 mt-2">
								<li>
									<strong>Identity Data:</strong> Name, company name, and job
									title.
								</li>
								<li>
									<strong>Contact Data:</strong> Email address, telephone
									number, and installation address.
								</li>
								<li>
									<strong>Technical Data:</strong> System specifications,
									warranty registration details, and installation evidence
									(photos/documents).
								</li>
							</ul>
						</section>

						<section>
							<h3 className="text-xl font-bold text-[var(--black)] mb-3">
								3. Usage of Information
							</h3>
							<p>Your data is used strictly for:</p>
							<ul className="list-disc pl-5 space-y-2 mt-2">
								<li>Processing warranty registrations and claims.</li>
								<li>Providing customer support and technical assistance.</li>
								<li>Communicating product updates or safety notices.</li>
								<li>Improving our products and digital services.</li>
							</ul>
						</section>

						<section>
							<h3 className="text-xl font-bold text-[var(--black)] mb-3">
								4. Data Security
							</h3>
							<p>
								We implement industry-standard security measures to prevent your
								personal data from being accidentally lost, used, or accessed in
								an unauthorized way. Access to your personal data is limited to
								employees, agents, contractors, and other third parties who have
								a business need to know.
							</p>
						</section>

						<section>
							<h3 className="text-xl font-bold text-[var(--black)] mb-3">
								5. Data Retention
							</h3>
							<p>
								We will only retain your personal data for as long as necessary
								to fulfil the purposes we collected it for, including for the
								purposes of satisfying any legal, accounting, or reporting
								requirements. Warranty records are retained for the duration of
								the product warranty period plus a reasonable archive period.
							</p>
						</section>

						<section>
							<h3 className="text-xl font-bold text-[var(--black)] mb-3">
								6. Your Rights
							</h3>
							<p>
								Under Australian Privacy Principles, you have the right to
								request access to, correction of, or deletion of your personal
								data. To exercise these rights, please contact our privacy
								officer.
							</p>
						</section>

						<section className="pt-8 border-t border-gray-200">
							<h3 className="text-xl font-bold text-[var(--black)] mb-3">
								Contact Us
							</h3>
							<p>
								For any privacy-related inquiries, please contact:
								<br />
								<br />
								<strong>Privacy Officer</strong>
								<br />
								RENOZ Energy Pty Ltd
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
