import {
  About,
  Contact,
  Footer,
  Header,
  Projects,
  Start,
} from "@/components";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main>
      <Header.Root />
      <Start />
      <About.Root />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
