import {
  About,
  Contact,
  Footer,
  Header,
  Projects,
  Start,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Header.Root />
      <Start />
      <About.Root />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
