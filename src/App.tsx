import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact, Footer } from "./components/Contact";
import { LinkDialog, type DialogKind } from "./components/LinkDialog";

export function App() {
  const [dialog, setDialog] = useState<DialogKind | null>(null);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <Hero onLinkedIn={() => setDialog("linkedin")} />
        <Projects />
        <About />
        <Contact onContact={() => setDialog("contact")} />
      </main>
      <Footer onLinkedIn={() => setDialog("linkedin")} />
      <LinkDialog kind={dialog} onClose={() => setDialog(null)} />
    </>
  );
}
