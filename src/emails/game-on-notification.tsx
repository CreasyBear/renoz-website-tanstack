import {
	Body,
	Column,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";

interface GameOnNotificationEmailProps {
	name: string;
	email: string;
	club_name: string;
	phone?: string;
	role?: string;
	sport?: string;
	suburb?: string;
	nfp_status?: string;
	facility?: string;
	interests: string[];
	message: string;
}

export const GameOnNotificationEmail = ({
	name,
	email,
	club_name,
	phone,
	role,
	sport,
	suburb,
	nfp_status,
	facility,
	interests,
	message,
}: GameOnNotificationEmailProps) => {
	const previewText = `Game On enquiry from ${club_name} — ${name}`;

	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Body style={body}>
				<Container style={outer}>
					{/* Header */}
					<Section style={header}>
						<Img
							src="https://renoz.energy/images/optimized/logo-renoz.webp"
							width="130"
							alt="RENOZ Energy"
							style={logo}
						/>
						<Text style={headerTag}>Game On · Round 1</Text>
					</Section>

					<Section style={content}>
						<Heading style={h1}>New Game On Enquiry</Heading>
						<Text style={lead}>
							{name} from <strong>{club_name}</strong> has submitted a Game On
							programme enquiry.
						</Text>

						{/* Enquirer card */}
						<Section style={card}>
							<Row style={row}>
								<Column style={colLabel}>Name</Column>
								<Column style={colValue}>{name}</Column>
							</Row>
							<Hr style={divider} />
							<Row style={row}>
								<Column style={colLabel}>Email</Column>
								<Column style={colValue}>
									<Link href={`mailto:${email}`} style={link}>
										{email}
									</Link>
								</Column>
							</Row>
							<Hr style={divider} />
							<Row style={row}>
								<Column style={colLabel}>Club</Column>
								<Column style={colValue}>{club_name}</Column>
							</Row>
							{phone && (
								<>
									<Hr style={divider} />
									<Row style={row}>
										<Column style={colLabel}>Phone</Column>
										<Column style={colValue}>{phone}</Column>
									</Row>
								</>
							)}
							{role && (
								<>
									<Hr style={divider} />
									<Row style={row}>
										<Column style={colLabel}>Role</Column>
										<Column style={colValue}>{role}</Column>
									</Row>
								</>
							)}
							{sport && (
								<>
									<Hr style={divider} />
									<Row style={row}>
										<Column style={colLabel}>Sport</Column>
										<Column style={colValue}>{sport}</Column>
									</Row>
								</>
							)}
							{suburb && (
								<>
									<Hr style={divider} />
									<Row style={row}>
										<Column style={colLabel}>Facility area</Column>
										<Column style={colValue}>{suburb}</Column>
									</Row>
								</>
							)}
						</Section>

						{/* Programme fields */}
						{(nfp_status || facility) && (
							<Section style={card}>
								{nfp_status && (
									<Row style={row}>
										<Column style={colLabel}>NFP / affiliation</Column>
										<Column style={colValue}>{nfp_status}</Column>
									</Row>
								)}
								{nfp_status && facility && <Hr style={divider} />}
								{facility && (
									<Row style={row}>
										<Column style={colLabel}>Facility tenure</Column>
										<Column style={colValue}>{facility}</Column>
									</Row>
								)}
							</Section>
						)}

						{/* Interests */}
						{interests.length > 0 && (
							<Section style={card}>
								<Text style={sectionTitle}>Upgrade interests</Text>
								<Row style={badgeRow}>
									{interests.map((interest) => (
										<Column key={interest} style={badge}>
											{interest}
										</Column>
									))}
								</Row>
							</Section>
						)}

						{/* Message */}
						<Heading as="h3" style={h3}>
							How we can help
						</Heading>
						<Section style={messageBox}>
							<Text style={messageText}>{message}</Text>
						</Section>

						{/* Context footer */}
						<Section style={contextCard}>
							<Text style={contextText}>
								Oasis Electrical scopes/quotes and is club-facing. RENOZ
								supplies battery + inverter line. Club remains the grant
								applicant. No work before grant agreement. Diesel generators are
								not eligible (s.5.3).
							</Text>
						</Section>

						<Hr style={footerDivider} />
						<Text style={footerText}>
							Sent from the Game On programme page ·{" "}
							<Link href="https://renoz.energy/game-on" style={footerLink}>
								renoz.energy/game-on
							</Link>
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default GameOnNotificationEmail;

// ── Styles ──────────────────────────────────────────────────────────────

const body = {
	backgroundColor: "#f5f0e8",
	fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
	padding: "48px 0",
};

const outer = {
	maxWidth: "600px",
	margin: "0 auto",
};

const header = {
	backgroundColor: "#1B1D1F",
	padding: "32px 48px",
	borderTopLeftRadius: "16px",
	borderTopRightRadius: "16px",
	textAlign: "center" as const,
};

const logo = {
	margin: "0 auto",
};

const headerTag = {
	color: "#00B140",
	fontSize: "11px",
	fontWeight: "700",
	letterSpacing: "0.1em",
	textTransform: "uppercase" as const,
	margin: "16px 0 0 0",
};

const content = {
	backgroundColor: "#ffffff",
	padding: "40px 48px",
	borderBottomLeftRadius: "16px",
	borderBottomRightRadius: "16px",
	border: "1px solid #e8e0d4",
	borderTop: "none",
};

const h1 = {
	color: "#1B1D1F",
	fontSize: "24px",
	fontWeight: "700",
	letterSpacing: "-0.02em",
	margin: "0 0 8px 0",
};

const lead = {
	color: "#666666",
	fontSize: "16px",
	lineHeight: "24px",
	margin: "0 0 28px 0",
};

const card = {
	backgroundColor: "#f9f7f5",
	border: "1px solid #e8e0d4",
	borderRadius: "12px",
	padding: "20px",
	marginBottom: "20px",
};

const row = {
	margin: "0",
};

const colLabel = {
	color: "#999999",
	fontSize: "11px",
	fontWeight: "600",
	letterSpacing: "0.06em",
	textTransform: "uppercase" as const,
	width: "120px",
	paddingRight: "16px",
	verticalAlign: "top" as const,
};

const colValue = {
	color: "#1B1D1F",
	fontSize: "15px",
	lineHeight: "22px",
	verticalAlign: "top" as const,
};

const divider = {
	border: "none",
	borderTop: "1px solid #e8e0d4",
	margin: "12px 0",
};

const link = {
	color: "#00B140",
	textDecoration: "underline",
};

const sectionTitle = {
	color: "#999999",
	fontSize: "11px",
	fontWeight: "600",
	letterSpacing: "0.06em",
	textTransform: "uppercase" as const,
	margin: "0 0 12px 0",
};

const badgeRow = {
	display: "flex",
	flexWrap: "wrap" as const,
	gap: "8px",
};

const badge = {
	backgroundColor: "#00B140",
	color: "#ffffff",
	fontSize: "13px",
	fontWeight: "500",
	padding: "6px 14px",
	borderRadius: "20px",
};

const h3 = {
	color: "#1B1D1F",
	fontSize: "16px",
	fontWeight: "600",
	margin: "24px 0 12px 0",
};

const messageBox = {
	backgroundColor: "#f9f7f5",
	border: "1px solid #e8e0d4",
	borderRadius: "12px",
	padding: "16px 20px",
	marginBottom: "20px",
};

const messageText = {
	color: "#374151",
	fontSize: "15px",
	lineHeight: "24px",
	whiteSpace: "pre-wrap" as const,
	margin: "0",
};

const contextCard = {
	backgroundColor: "#f0fdf4",
	border: "1px solid #bbf7d0",
	borderRadius: "12px",
	padding: "16px 20px",
	marginBottom: "24px",
};

const contextText = {
	color: "#166534",
	fontSize: "13px",
	lineHeight: "20px",
	margin: "0",
};

const footerDivider = {
	border: "none",
	borderTop: "1px solid #e8e0d4",
	margin: "0 0 16px 0",
};

const footerText = {
	color: "#999999",
	fontSize: "12px",
	textAlign: "center" as const,
	margin: "0",
};

const footerLink = {
	color: "#999999",
	textDecoration: "underline",
};
