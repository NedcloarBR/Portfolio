import { About, Contact, Footer, Header, Projects, Start } from "@/components";
import { Skills } from "@/components/skills";
import { Suspense } from "react";

export default function Home() {
	return (
		<main>
			<Header.Root />
			<Start />
			<About />
			<Skills />
			<Suspense fallback={<Projects.Skeleton />}>
				<Projects.Section />
			</Suspense>
			<Contact />
			<Footer />
		</main>
	);
}
