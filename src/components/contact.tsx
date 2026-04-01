"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send, XCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
	Button,
	Card,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Textarea,
} from "@/components/ui";
import { Section } from "./section";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
	const t = useTranslations("Contact");
	const [status, setStatus] = useState<FormStatus>("idle");

	const formSchema = z.object({
		name: z.string().min(3, { message: t("Form.NameTooShort") }),
		email: z.string().email({ message: t("Form.EmailInvalid") }),
		subject: z.string().min(1, { message: t("Form.Required") }),
		message: z.string().min(1, { message: t("Form.Required") }),
		website: z.string().max(0),
	});

	type formType = z.infer<typeof formSchema>;

	const form = useForm<formType>({
		resolver: zodResolver(formSchema),
		defaultValues: { name: "", email: "", subject: "", message: "", website: "" },
	});

	async function onSubmit(values: formType) {
		setStatus("loading");
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});
			if (!response.ok) {
				setStatus("error");
				return;
			}
			setStatus("success");
			form.reset();
		} catch {
			setStatus("error");
		}
	}

	return (
		<Section.Root id="contact">
			<Section.Title title={t("Title")} />
			<Section.Content className="items-center justify-center px-4">
				<Card className="w-full max-w-2xl border-border/60 bg-card/50 p-6 shadow-lg backdrop-blur-sm sm:p-8">
					{status === "success" ? (
						<div className="flex flex-col items-center gap-4 py-10 text-center">
							<CheckCircle2 className="size-14 text-green-500" />
							<p className="font-semibold text-foreground text-lg">
								{t("Form.SuccessTitle")}
							</p>
							<p className="text-muted-foreground text-sm">
								{t("Form.Success")}
							</p>
							<Button
								variant="outline"
								size="sm"
								className="mt-2"
								onClick={() => setStatus("idle")}
							>
								{t("Form.SendAnother")}
							</Button>
						</div>
					) : (
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="flex flex-col gap-5"
							>
								{/* Honeypot: hidden from humans, bots fill it — rejected server-side */}
								<input
									type="text"
									{...form.register("website")}
									tabIndex={-1}
									aria-hidden="true"
									autoComplete="off"
									className="pointer-events-none absolute h-0 w-0 opacity-0"
								/>
								<div className="grid gap-5 sm:grid-cols-2">
									<FormField
										control={form.control}
										name="name"
										render={({ field }) => (
											<FormItem>
												<FormLabel>{t("Form.Name")}</FormLabel>
												<FormControl>
													<Input
														placeholder={t("Form.NamePlaceholder")}
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>{t("Form.Email")}</FormLabel>
												<FormControl>
													<Input
														type="email"
														placeholder={t("Form.EmailPlaceholder")}
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<FormField
									control={form.control}
									name="subject"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{t("Form.Subject")}</FormLabel>
											<FormControl>
												<Input
													placeholder={t("Form.SubjectPlaceholder")}
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{t("Form.Message")}</FormLabel>
											<FormControl>
												<Textarea
													placeholder={t("Form.MessagePlaceholder")}
													className="min-h-36 resize-none"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{status === "error" && (
									<div className="flex items-center gap-2 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-destructive text-sm">
										<XCircle className="size-4 shrink-0" />
										{t("Form.Error")}
									</div>
								)}

								<Button
									type="submit"
									disabled={status === "loading"}
									className="w-full gap-2"
								>
									{status === "loading" ? (
										<>
											<Loader2 className="size-4 animate-spin" />
											{t("Form.Sending")}
										</>
									) : (
										<>
											<Send className="size-4" />
											{t("Form.Submit")}
										</>
									)}
								</Button>
							</form>
						</Form>
					)}
				</Card>
			</Section.Content>
		</Section.Root>
	);
}
