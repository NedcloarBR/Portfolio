import { type TimelineEntry, timeline } from "@/constants";
import { useTranslations } from "next-intl";
import { FadeInView } from "../fade-in-view";
import { Section } from "../section";
import { GroupItem, type TimelineGroup } from "./group-item";

function groupTimeline(entries: TimelineEntry[]): TimelineGroup[] {
	const groups: TimelineGroup[] = [];
	const seen = new Map<string, TimelineGroup>();
	for (const entry of entries) {
		if (!seen.has(entry.institution)) {
			const group: TimelineGroup = {
				type: entry.type,
				institution: entry.institution,
				logo: entry.logo,
				roles: [entry],
			};
			seen.set(entry.institution, group);
			groups.push(group);
		} else {
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			seen.get(entry.institution)!.roles.push(entry);
		}
	}
	return groups;
}

export function Experience() {
	const t = useTranslations("Experience");
	const groups = groupTimeline(timeline);

	return (
		<Section.Root id="experience">
			<Section.Title title={t("Title")} />
			<Section.Content className="items-start justify-center px-4">
				<FadeInView className="w-full max-w-2xl">
					<ol className="relative border-border border-l">
						{groups.map((group, i) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: static list
							<GroupItem key={i} group={group} />
						))}
					</ol>
				</FadeInView>
			</Section.Content>
		</Section.Root>
	);
}
