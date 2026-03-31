import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Preview,
	Section,
	Text,
} from "@react-email/components";

interface ContactEmailProps {
	name: string;
	email: string;
	subject: string;
	message: string;
	sentAt: string;
}

export function ContactEmail({
	name,
	email,
	subject,
	message,
	sentAt,
}: ContactEmailProps) {
	return (
		<Html lang="en">
			<Head />
			<Preview>
				New message from {name}: {subject}
			</Preview>
			<Body style={styles.body}>
				<Container style={styles.container}>
					{/* Header */}
					<Section style={styles.header}>
						<Text style={styles.headerLabel}>Portfolio</Text>
						<Heading style={styles.headerTitle}>New Contact Message</Heading>
					</Section>

					{/* Meta */}
					<Section style={styles.metaSection}>
						<table style={styles.metaTable}>
							<tbody>
								<tr>
									<td style={styles.metaKey}>From</td>
									<td style={styles.metaValue}>{name}</td>
								</tr>
								<tr>
									<td style={styles.metaKey}>Email</td>
									<td style={styles.metaValue}>{email}</td>
								</tr>
								<tr>
									<td style={styles.metaKey}>Subject</td>
									<td style={styles.metaValue}>{subject}</td>
								</tr>
								<tr>
									<td style={styles.metaKey}>Sent at</td>
									<td style={styles.metaValue}>{sentAt}</td>
								</tr>
							</tbody>
						</table>
					</Section>

					<Hr style={styles.divider} />

					{/* Message */}
					<Section style={styles.messageSection}>
						<Text style={styles.messageLabel}>Message</Text>
						<Text style={styles.messageBody}>{message}</Text>
					</Section>

					<Hr style={styles.divider} />

					{/* Footer */}
					<Section style={styles.footer}>
						<Text style={styles.footerText}>
							This message was sent via the contact form on your portfolio.
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
}

const styles = {
	body: {
		backgroundColor: "#09090b",
		fontFamily:
			"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
		margin: "0",
		padding: "32px 0",
	},
	container: {
		backgroundColor: "#18181b",
		border: "1px solid #27272a",
		borderRadius: "12px",
		margin: "0 auto",
		maxWidth: "560px",
		overflow: "hidden",
	},
	header: {
		backgroundColor: "#09090b",
		borderBottom: "1px solid #27272a",
		padding: "28px 32px",
	},
	headerLabel: {
		color: "#71717a",
		fontSize: "11px",
		fontWeight: "600",
		letterSpacing: "0.1em",
		margin: "0 0 6px",
		textTransform: "uppercase" as const,
	},
	headerTitle: {
		color: "#fafafa",
		fontSize: "22px",
		fontWeight: "700",
		margin: "0",
	},
	metaSection: {
		padding: "24px 32px",
	},
	metaTable: {
		borderCollapse: "collapse" as const,
		width: "100%",
	},
	metaKey: {
		color: "#71717a",
		fontSize: "12px",
		fontWeight: "500",
		paddingBottom: "10px",
		paddingRight: "16px",
		verticalAlign: "top" as const,
		whiteSpace: "nowrap" as const,
		width: "72px",
	},
	metaValue: {
		color: "#e4e4e7",
		fontSize: "14px",
		fontWeight: "400",
		paddingBottom: "10px",
	},
	divider: {
		border: "none",
		borderTop: "1px solid #27272a",
		margin: "0",
	},
	messageSection: {
		padding: "24px 32px",
	},
	messageLabel: {
		color: "#71717a",
		fontSize: "11px",
		fontWeight: "600",
		letterSpacing: "0.1em",
		margin: "0 0 12px",
		textTransform: "uppercase" as const,
	},
	messageBody: {
		backgroundColor: "#09090b",
		border: "1px solid #27272a",
		borderRadius: "8px",
		color: "#e4e4e7",
		fontSize: "14px",
		lineHeight: "1.7",
		margin: "0",
		padding: "16px",
		whiteSpace: "pre-wrap" as const,
	},
	footer: {
		padding: "16px 32px 24px",
	},
	footerText: {
		color: "#52525b",
		fontSize: "12px",
		margin: "0",
	},
} as const;
