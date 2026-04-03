"use client";

import type { TimelineEntry } from "@/constants";
import { capitalizeFirst } from "@/lib/utils";
import { BookOpen, Briefcase, GraduationCap } from "lucide-react";
import type { DateTimeFormatOptions } from "next-intl";
import { useFormatter, useTranslations } from "next-intl";
import { GroupLogo } from "./logos";
import { RoleDialog } from "./role-dialog";

export type TimelineGroup = {
	type: TimelineEntry["type"];
	institution: string;
	logo?: string;
	roles: TimelineEntry[];
};

const DATE_FORMAT: DateTimeFormatOptions = { month: "short", year: "numeric" };

export function GroupItem({ group }: { group: TimelineGroup }) {
	const t = useTranslations("Experience");
	const format = useFormatter();
	const logoSrc = group.logo ? `/images/${group.type}/${group.logo}.png` : null;
	const hasMultipleRoles = group.roles.length > 1;
	const currentIndex = group.roles.findIndex((r) => r.current);
	const isCurrent = currentIndex !== -1;
	const Icon =
		group.type === "Education"
			? isCurrent
				? BookOpen
				: GraduationCap
			: Briefcase;

	function formatPeriod(role: TimelineEntry): string {
		const start = capitalizeFirst(
			format.dateTime(new Date(role.startDate), DATE_FORMAT),
		);
		const end = role.endDate
			? capitalizeFirst(format.dateTime(new Date(role.endDate), DATE_FORMAT))
			: t("Current");
		return `${start} — ${end}`;
	}

	function getRoleIcon(role: TimelineEntry) {
		if (group.type !== "Education") return null;
		const RoleIcon = role.current ? BookOpen : GraduationCap;
		return <RoleIcon className="size-3.5 shrink-0 text-muted-foreground" />;
	}

	return (
		<li className="mb-10 ml-8 last:mb-0">
			{/* Timeline marker */}
			<span className="-left-4 absolute flex size-8 items-center justify-center overflow-hidden rounded-full bg-primary ring-4 ring-background">
				<Icon className="size-4 text-primary-foreground" />
			</span>

			<div className="rounded-lg border border-border/60 bg-card/50 shadow-sm">
				{/* Institution header */}
				<div className="flex items-center gap-3 p-4 pb-3">
					{logoSrc && <GroupLogo src={logoSrc} alt={group.institution} />}
					<div>
						<h3 className="font-semibold text-foreground leading-tight">
							{group.institution}
						</h3>
						{hasMultipleRoles && (
							<p className="text-muted-foreground text-xs">
								{group.roles.length}{" "}
								{t(group.type === "Education" ? "Courses" : "Roles")}
							</p>
						)}
					</div>
				</div>

				{/* Roles */}
				<div className="border-border/40 border-t">
					{group.roles.map((role, j) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: static list
						<RoleDialog
							key={j}
							role={role}
							institution={group.institution}
							logo={logoSrc ?? undefined}
						>
							<div className="relative flex cursor-pointer gap-3 px-4 py-3 transition-colors last:pb-4 hover:bg-muted/40">
								{hasMultipleRoles && (
									<div className="flex flex-col items-center">
										<div className="mt-1.5 size-2 shrink-0 rounded-full bg-muted-foreground/40" />
										{j < group.roles.length - 1 && (
											<div className="mt-1 w-px flex-1 bg-border" />
										)}
									</div>
								)}
								<div className="min-w-0 flex-1 pb-1">
									<div className="flex flex-wrap items-center justify-between gap-1">
										<div className="flex items-center gap-1.5">
											{getRoleIcon(role)}
											<p className="font-medium text-foreground text-sm">
												{t(`Timeline.${role.key}.role`)}
											</p>
										</div>
										{j === currentIndex && (
											<span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary text-xs">
												{t("Current")}
											</span>
										)}
									</div>
									<time className="text-muted-foreground/70 text-xs">
										{formatPeriod(role)}
									</time>
								</div>
							</div>
						</RoleDialog>
					))}
				</div>
			</div>
		</li>
	);
}
