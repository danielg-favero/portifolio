import { Footer } from "@/components";
import { About, Experience, Hero, Projects } from "./containers";

export default function Home() {
  return (
    <main className="[&>*:nth-child(odd)]:bg-primary-100 [&>*:nth-child(even)]:bg-primary-95 flex flex-col items-center justify-between min-h-screen bg-primary-100">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}
