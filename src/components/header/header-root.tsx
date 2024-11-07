import { ChangeLanguage, Header, Theme } from "@/components";

export function HeaderRoot() {
  return (
    <section
      id="header"
      className="fixed w-screen h-[100px] flex bg-zinc-400 dark:bg-zinc-900 border-b-4 border-green-700"
    >
      <nav className="px-4 flex items-center justify-between w-full">
        <div className="flex-1"></div>
        <div className="flex justify-center items-center w-full gap-4 ml-28">
          <Header.Anchor target="about" />
          <Header.Anchor target="projects" />
          <Header.Anchor target="contact" />
        </div>
        <div className="flex gap-2 mr-8">
          <Theme.Toggle />
          <ChangeLanguage />
        </div>
      </nav>
    </section>
  );
}
