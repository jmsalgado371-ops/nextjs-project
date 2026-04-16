"use client";

import { ArrowRight } from "lucide-react";
import { useState, Suspense, lazy } from "react";
import Link from "next/link";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({
    default: mod.Dithering,
  }))
);

export function HeroDitheringCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full flex justify-center items-center px-4 md:px-6 pt-35 md:pt-40 xl:pt-45">
      <div
        className="w-full max-w-7xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-dark shadow-sm min-h-[600px] md:min-h-[640px] flex flex-col items-center justify-center duration-500">
          {/* Dithering background shader */}
          <Suspense fallback={<div className="absolute inset-0 bg-white/5" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-30 mix-blend-screen">
              <Dithering
                colorBack="#00000000"
                colorFront="#3B82F6"
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          {/* Content */}
          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </span>
              Open to Developer Opportunities
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-8 leading-[1.05]">
              Jose Salgado <br />
              <span className="text-white/70">Developer.</span>
            </h1>

            {/* Description */}
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              Results-driven Army veteran certified in HTML, CSS, JavaScript,
              and ReactJS for front-end development — and AWS Solutions
              Architect for cloud back-end development.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/about"
                className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-blue-600 px-12 text-base font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-blue-400/20"
              >
                <span className="relative z-10">View Resume</span>
                <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-10 text-base font-medium text-white transition-all duration-300 hover:bg-white/10"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
