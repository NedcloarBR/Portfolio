import {
	About,
	Competencies,
	Contact,
	Footer,
	Projects,
	Top,
} from "@/components";

export default function Home() {
	return (
		<main>
			<Top />
			<About />
			<Competencies />
			<Contact />
			<Projects />
			<Footer />
		</main>
	);
}
