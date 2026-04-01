import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TECH_BADGES = ["TypeScript", "NestJS", "Node.js", "PostgreSQL", "Docker"];

export default function OpengraphImage() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#09090b",
				position: "relative",
				overflow: "hidden",
				fontFamily: "sans-serif",
			}}
		>
			{/* Green blob — top left */}
			<div
				style={{
					position: "absolute",
					top: -180,
					left: -180,
					width: 620,
					height: 620,
					borderRadius: "50%",
					backgroundColor: "rgba(34, 197, 94, 0.18)",
				}}
			/>
			{/* Teal blob — bottom right */}
			<div
				style={{
					position: "absolute",
					bottom: -160,
					right: -160,
					width: 540,
					height: 540,
					borderRadius: "50%",
					backgroundColor: "rgba(20, 184, 166, 0.16)",
				}}
			/>

			{/* Content */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 16,
					zIndex: 1,
					padding: "0 80px",
					textAlign: "center",
				}}
			>
				<p
					style={{
						fontSize: 28,
						color: "rgba(255,255,255,0.45)",
						margin: 0,
						letterSpacing: "0.05em",
					}}
				>
					Hello, World!
				</p>
				<p
					style={{
						fontSize: 72,
						fontWeight: 800,
						color: "#4ade80",
						margin: 0,
						lineHeight: 1.1,
					}}
				>
					Miguel Alexandre Uhlein
				</p>
				<p
					style={{
						fontSize: 34,
						color: "rgba(255,255,255,0.55)",
						margin: 0,
					}}
				>
					Back-end Developer
				</p>

				{/* Tech badges */}
				<div
					style={{
						display: "flex",
						gap: 12,
						marginTop: 24,
						flexWrap: "wrap",
						justifyContent: "center",
					}}
				>
					{TECH_BADGES.map((tech) => (
						<div
							key={tech}
							style={{
								padding: "10px 22px",
								borderRadius: 9999,
								border: "1px solid rgba(255,255,255,0.15)",
								color: "rgba(255,255,255,0.6)",
								fontSize: 20,
								backgroundColor: "rgba(255,255,255,0.05)",
							}}
						>
							{tech}
						</div>
					))}
				</div>
			</div>
		</div>,
		{ ...size },
	);
}
