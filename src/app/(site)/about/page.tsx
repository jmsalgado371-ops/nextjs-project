import AboutSection from "@/components/About/AboutSection";
import Hero from "@/components/Home/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Resume | Software Engineer",
  description: "Professional resume presentation for a developer role built with Next.js.",
};

const AboutPage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
    </>
  );
};

export default AboutPage;
