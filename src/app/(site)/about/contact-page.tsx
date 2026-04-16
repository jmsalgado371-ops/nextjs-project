import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | AI Tool - Next.js Template for AI Tools",
  description: "Get in touch with us. We'd love to hear from you.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Contact Us" />
      <section className="relative z-10 overflow-hidden px-4 py-20 sm:px-8 lg:py-25 xl:px-0">
        <div className="mx-auto max-w-[1170px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Contact Information */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h2 className="mb-6 text-2xl font-bold text-white">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/80">
                    Email
                  </h3>
                  <p className="text-white">
                    <a
                      href="mailto:jmsalgado371@gmail.com"
                      className="hover:text-opacity-75 transition duration-200"
                    >
                      jmsalgado371@gmail.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/80">
                    GitHub
                  </h3>
                  <p className="text-white">
                    <a
                      href="https://github.com/jmsalgado371-ops"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-opacity-75 transition duration-200"
                    >
                      github.com/jmsalgado371-ops
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/80">
                    Address
                  </h3>
                  <p className="text-white">
                    123 Main Street<br />
                    City, State 12345<br />
                    Country
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/80">
                    Hours
                  </h3>
                  <p className="text-white">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h2 className="mb-6 text-2xl font-bold text-white">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-white/50 transition duration-200 focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-white/50 transition duration-200 focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-white/50 transition duration-200 focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-white/50 transition duration-200 focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="button-border-gradient hover:button-gradient-hover relative flex w-full items-center justify-center rounded-lg px-6 py-2.5 text-sm font-medium text-white shadow-button transition duration-200 hover:shadow-none"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
