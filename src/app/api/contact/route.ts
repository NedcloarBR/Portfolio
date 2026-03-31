import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

import { ContactEmail } from "@/emails/contact-email";

const bodySchema = z.object({
	name: z.string().min(3),
	email: z.string().email(),
	subject: z.string().min(1),
	message: z.string().min(1),
});

export async function POST(request: Request) {
	const json = await request.json();
	const parsed = bodySchema.safeParse(json);

	if (!parsed.success) {
		return NextResponse.json(
			{ error: "Invalid request body" },
			{ status: 400 },
		);
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
