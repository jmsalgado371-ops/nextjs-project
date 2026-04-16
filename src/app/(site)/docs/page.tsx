import ContactSection from "@/components/Footer/ContactSection";
import Hero from "@/components/Home/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | AI Tool - Next.js Template for AI Tools",
  description: "Get in touch with us. We'd love to hear from you.",
};

export default function DocsPage() {
  return (
    <>
      <Hero />
      <section className="relative z-20 px-4 pb-6 pt-10 sm:px-8 lg:pt-14 xl:px-0">
        <div className="mx-auto max-w-[1170px] text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-300/90">
            Let&apos;s Connect
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
            Reach out via email or GitHub, or send a message below.
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
