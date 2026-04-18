"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import badgesData from "./badgesData";

const technicalSkills = [
  {
    title: "HTML",
    description: "Semantic structure and accessibility-focused page markup.",
  },
  {
    title: "CSS",
    description: "Responsive layouts, component styling, and modern UI polish.",
  },
  {
    title: "JavaScript",
    description: "Interactive behavior and scalable frontend logic patterns.",
  },
  {
    title: "ReactJS",
    description: "Reusable component architecture and state-driven interfaces.",
  },
  {
    title: "AWS Solutions Architect",
    description: "Cloud architecture fundamentals and deployment planning.",
  },
];

const AboutSection = () => {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    const startAutoplay = () => {
      if (!mediaQuery.matches) {
        return undefined;
      }

      return window.setInterval(() => {
        setActiveSkillIndex((currentIndex) =>
          currentIndex === technicalSkills.length - 1 ? 0 : currentIndex + 1,
        );
      }, 3200);
    };

    let intervalId = startAutoplay();

    const handleChange = () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }

      intervalId = startAutoplay();
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }

      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const showPreviousSkill = () => {
    setActiveSkillIndex((currentIndex) =>
      currentIndex === 0 ? technicalSkills.length - 1 : currentIndex - 1,
    );
  };

  const showNextSkill = () => {
    setActiveSkillIndex((currentIndex) =>
      currentIndex === technicalSkills.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <section className="overflow-hidden" id="resume">
      <div className="relative mx-auto max-w-[1170px] px-4 py-20 sm:px-8 lg:py-25 xl:px-0">
        <div className="about-divider-gradient absolute bottom-0 left-0 h-[1px] w-full"></div>

        <div className="flex flex-wrap justify-between gap-11 xl:flex-nowrap">
          <div className="wow fadeInLeft w-full max-w-[620px]">
            <span className="hero-subtitle-text mb-5 block font-semibold">
              Professional Resume
            </span>

            <h2 className="mb-5 text-2xl font-extrabold text-white sm:text-4xl xl:text-heading-2">
              Full Stack Developer with expertise in modern web applications.
            </h2>
            <p className="mb-9 font-medium">
              Beginner software developer building hands-on experience with
              React, Next.js, TypeScript, Node.js, and cloud fundamentals.
              I focus on creating clean, accessible, and maintainable projects
              while continuously improving through real-world practice.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="mb-2 text-sm uppercase tracking-[0.24em] text-slate-300">
                  Experience
                </p>
                <p className="text-3xl font-bold text-white">5+ years</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="mb-2 text-sm uppercase tracking-[0.24em] text-slate-300">
                  Projects Shipped
                </p>
                <p className="text-3xl font-bold text-white">20+</p>
              </div>
            </div>
          </div>

          <div className="wow fadeInRight relative hidden aspect-556/401 w-full xl:block">
            <Image src="/images/about/about.svg" alt="resume" fill />
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-5 sm:p-7 lg:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white">Technical Skill Highlights</h3>
              <p className="mt-2 text-white/70">
                Swipe through technical highlights on mobile and review credential badges below.
              </p>
            </div>

            <div className="mb-6">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-3">
                <div
                  className="flex min-w-0 transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(-${activeSkillIndex * 100}%)` }}
                >
                  {technicalSkills.map((skill, index) => (
                    <div key={skill.title} className="w-full min-w-0 flex-none">
                      <div className="mb-3 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1.5 sm:p-2">
                        <Image
                          src={badgesData[index % badgesData.length].image}
                          alt={badgesData[index % badgesData.length].name}
                          width={420}
                          height={220}
                          unoptimized
                          className="h-[140px] w-full rounded-lg object-contain sm:h-[190px]"
                        />
                      </div>
                      <p className="text-xs uppercase tracking-[0.16em] text-sky-300">{skill.title}</p>
                      <p className="mt-2 text-sm text-white/80 sm:text-base">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={showPreviousSkill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white transition hover:bg-white/10 sm:text-sm"
                  aria-label="Show previous technical skill"
                >
                  Prev
                </button>
                <div className="order-3 flex w-full items-center justify-center gap-2">
                  {technicalSkills.map((skill, index) => (
                    <button
                      key={skill.title}
                      type="button"
                      onClick={() => setActiveSkillIndex(index)}
                      className={`h-2.5 rounded-full transition ${
                        activeSkillIndex === index
                          ? "w-8 bg-sky-300"
                          : "w-2.5 bg-white/25 hover:bg-white/45"
                      }`}
                      aria-label={`Show ${skill.title} skill card`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={showNextSkill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white transition hover:bg-white/10 sm:text-sm"
                  aria-label="Show next technical skill"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-300">Footer Badges</p>
              <div className="flex flex-wrap gap-2">
                {badgesData.map((badge) => (
                  <span
                    key={`${badge.id}-pill`}
                    className="rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200"
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 sm:p-8">
            <h3 className="mb-6 text-2xl font-semibold text-white">Selected Experience</h3>
            <div className="space-y-6 text-white/80">
              <div>
                <p className="font-semibold text-white">Wheeled Vehicle Mechanic</p>
                <p className="text-sm text-slate-400">US Army Reserve, PR | 2021 – Present</p>
                <p className="mt-2">
                  Managed maintenance of vehicles and helped operators troubleshoot vehicle issues.
                  Managed cross-functional teams to implement technology solutions.
                  Oversaw inventory planning and timeline execution for major projects.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Sales Representative</p>
                <p className="text-sm text-slate-400">Cutco, Remote | 2021</p>
                <p className="mt-2">
                  Conducted phone jam sessions to schedule sales presentations for clients.
                  Developed and presented value-based product proposals to prospective customers.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Era Solutions Classes</p>
                <p className="text-sm text-slate-400">Remote | 2023 – Present</p>
                <p className="mt-2">
                  Created websites alongside professionals using HTML, CSS, JavaScript, and React.
                  Completed AWS cloud development coursework focused on solutions architecture.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 sm:p-8">
            <h3 className="mb-6 text-2xl font-semibold text-white">Featured Projects</h3>
            <div className="space-y-6 text-white/80">
              <div>
                <p className="font-semibold text-white">Team Collaboration Platform</p>
                <p className="mt-2">
                  Built a responsive Next.js app with real-time collaboration,
                  authentication, and analytics integrations for cross-team
                  productivity.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">E-commerce Dashboard</p>
                <p className="mt-2">
                  Developed a scalable admin dashboard supporting order
                  management, reporting, and payments using TypeScript and APIs.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 sm:p-8">
            <h3 className="mb-6 text-2xl font-semibold text-white">Contact</h3>
            <div className="space-y-5 text-white/80">
              <div id="contact">
                <p className="font-semibold text-white">Contact</p>
                <p className="mt-2">
                  Email: <a href="mailto:jmsalgado371@gmail.com" className="text-sky-400 hover:text-sky-300">jmsalgado371@gmail.com</a>
                </p>
                <p className="mt-2">
                  GitHub: <a href="https://github.com/jmsalgado371-ops" target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-300">github.com/jmsalgado371-ops</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
