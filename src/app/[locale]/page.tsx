import { About, Contact, Footer, Header, Projects, Start } from "@/components";
import { FadeInView } from "@/components/fade-in-view";
import { Skills } from "@/components/skills";
import { Suspense } from "react";

export default function Home() {
	return (
		<main>
			<Header.Root />
			<Start />
			<About />
			<Skills />
			<FadeInView>
				<Suspense fallback={<Projects.Skeleton />}>
					<Projects.Section />
				</Suspense>
			</FadeInView>
			<Contact />
			<Footer />
		</main>
	);
}
