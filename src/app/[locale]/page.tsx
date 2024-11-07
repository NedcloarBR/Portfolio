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
      <Header.Root />
      <BackToTop />
      <Start />
      <About.Root />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
