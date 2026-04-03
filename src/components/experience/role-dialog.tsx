"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import type { TimelineEntry } from "@/constants";
import { capitalizeFirst } from "@/lib/utils";
import type { DateTimeFormatOptions } from "next-intl";
import { useFormatter, useTranslations } from "next-intl";
import { GroupLogo } from "./logos";

const DATE_FORMAT: DateTimeFormatOptions = { month: "long", year: "numeric" };

type RoleDialogProps = {
	role: TimelineEntry;
	institution: string;
	logo?: string;
	children: React.ReactNode;
};

export function RoleDialog({
	role,
	institution,
	logo,
	children,
}: RoleDialogProps) {
	const t = useTranslations("Experience");
	const format = useFormatter();

	const start = capitalizeFirst(
		format.dateTime(new Date(role.startDate), DATE_FORMAT),
	);
	const end = role.endDate
		? capitalizeFirst(format.dateTime(new Date(role.endDate), DATE_FORMAT))
		: t("Current");

	return (
		<Dialog>
			<DialogTrigger asChild={true}>{children}</DialogTrigger>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<div className="flex items-center gap-3">
						{logo && <GroupLogo src={logo} alt={institution} />}
						<div>
							<DialogTitle>{t(`Timeline.${role.key}.role`)}</DialogTitle>
							<DialogDescription>{institution}</DialogDescription>
						</div>
					</div>
				</DialogHeader>
				<p className="text-muted-foreground text-xs">
					{start} — {end}
				</p>
				<p className="text-foreground text-sm leading-relaxed">
					{t(`Timeline.${role.key}.description`)}
				</p>
			</DialogContent>
		</Dialog>
	);
}
