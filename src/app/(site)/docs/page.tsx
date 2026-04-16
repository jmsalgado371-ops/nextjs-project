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
      <ContactSection />
    </>
  );
}
