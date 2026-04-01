import { render } from "@react-email/render";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

import { ContactEmail } from "@/emails/contact-email";

const bodySchema = z.object({
	name: z.string().min(3),
	email: z.string().email(),
	subject: z.string().min(1),
	message: z.string().min(1),
	website: z.string().max(0),
});

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
	const now = Date.now();
	const entry = rateLimit.get(ip);

	if (!entry || now > entry.resetAt) {
		rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
		return false;
	}

	if (entry.count >= RATE_LIMIT_MAX) return true;

	entry.count++;
	return false;
}

export async function POST(request: Request) {
	const headersList = await headers();
	const ip =
		headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

	if (checkRateLimit(ip)) {
		return NextResponse.json(
			{ error: "Too many requests" },
			{ status: 429 },
		);
	}

	const json = await request.json();
	const parsed = bodySchema.safeParse(json);

	if (!parsed.success) {
		return NextResponse.json(
			{ error: "Invalid request body" },
			{ status: 400 },
		);
	}

	if (parsed.data.website) {
		return NextResponse.json({ success: true });
	}

	const { name, email, subject, message } = parsed.data;

	const sentAt = new Date().toLocaleString("en-US", {
		dateStyle: "medium",
		timeStyle: "short",
		timeZone: "America/Sao_Paulo",
	});

	const html = await render(
		ContactEmail({ name, email, subject, message, sentAt }),
	);

	const resend = new Resend(process.env.RESEND_API_KEY);

	const { error } = await resend.emails.send({
		from: "Portfolio Contact <onboarding@resend.dev>",
		to: "nedcloar1@hotmail.com",
		subject: `[Portfolio] ${subject}`,
		html,
	});

	if (error) {
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 },
		);
	}

	return NextResponse.json({ success: true });
}
