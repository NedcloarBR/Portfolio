import {
	About,
	BackToTop,
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
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
}
