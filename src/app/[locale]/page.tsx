import {
	About,
	Competencies,
	Contact,
	Footer,
	Header,
	Projects,
	Start,
} from "@/components";

export default function Home() {
	return (
		<main>
			<Header />
			<Start />
			<About />
			<Competencies />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
}
