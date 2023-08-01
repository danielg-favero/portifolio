"use client";

import { Footer } from "@/components";
import { About, Experience, Hero, Projects } from "./containers";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <main className="overflow-x-hidden [&>*:nth-child(odd)]:bg-primary-100 [&>*:nth-child(even)]:bg-primary-95 flex flex-col items-center justify-between min-h-screen bg-primary-100 relative">
      <Hero />
      <About />
      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Experience />
      </Suspense>
      <Footer />
    </main>
  );
}
