import {
	About,
	Competencies,
	Contact,
	Footer,
	Header,
	Projects,
} from "@/components";

export default function Home() {
	return (
		<main>
			<Header />
			<About />
			<Competencies />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
}
