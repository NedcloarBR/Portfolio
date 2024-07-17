import {
	About,
	BackToTop,
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
      <BackToTop/>
			<Start />
			<About />
			<Competencies />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
}
