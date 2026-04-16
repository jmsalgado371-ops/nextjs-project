import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/Footer/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | AI Tool - Next.js Template for AI Tools",
  description: "Get in touch with us. We'd love to hear from you.",
};

export default function DocsPage() {
  return (
    <>
      <Breadcrumb pageTitle="Contact Us" />
      <ContactSection />
    </>
  );
}
