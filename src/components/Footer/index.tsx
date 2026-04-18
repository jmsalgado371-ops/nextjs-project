import Image from "next/image";
import Link from "next/link";
import badgesData from "../About/AboutSection/badgesData";

const logo = "/salgado-logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 pb-17.5 text-white lg:pb-22.5 xl:pb-27.5">
        {/* <!-- bg shapes --> */}
        <div className="absolute bottom-0 left-0 -z-1 flex w-full flex-col gap-3 opacity-50">
          <div className="footer-bg-gradient h-[1.24px] w-full"></div>
          <div className="footer-bg-gradient h-[2.47px] w-full"></div>
          <div className="footer-bg-gradient h-[3.71px] w-full"></div>
          <div className="footer-bg-gradient h-[4.99px] w-full"></div>
          <div className="footer-bg-gradient h-[6.19px] w-full"></div>
          <div className="footer-bg-gradient h-[7.42px] w-full"></div>
          <div className="footer-bg-gradient h-[8.66px] w-full"></div>
          <div className="footer-bg-gradient h-[9.90px] w-full"></div>
          <div className="footer-bg-gradient h-[13px] w-full"></div>
        </div>

        <div className="relative mx-auto max-w-[1170px] px-4 pt-17.5 sm:px-8 xl:px-0">
          <div className="footer-divider-gradient absolute left-0 top-0 h-[1px] w-full"></div>

          <div className="flex justify-center">
            <div className="w-full max-w-[520px] text-center">
              <Link href="/" className="mb-8.5 inline-block">
                <Image
                  src={logo}
                  alt="Salgado Logo"
                  width={164}
                  height={36}
                  className="h-auto w-[164px] object-contain opacity-95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.28)]"
                />
              </Link>

              <div className="mb-6 flex items-center justify-center gap-6">
                <a
                  href="mailto:jmsalgado371@gmail.com"
                  aria-label="Email"
                  className="duration-300 ease-in hover:text-white"
                >
                  <svg
                    className="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6.75C2 5.7835 2.7835 5 3.75 5H20.25C21.2165 5 22 5.7835 22 6.75V17.25C22 18.2165 21.2165 19 20.25 19H3.75C2.7835 19 2 18.2165 2 17.25V6.75ZM4.9 7L12 12.1125L19.1 7H4.9ZM20 8.2875L12.5105 13.6785C12.2071 13.8967 11.7929 13.8967 11.4895 13.6785L4 8.2875V17H20V8.2875Z"
                      fill=""
                    />
                  </svg>
                </a>

                <a
                  href="https://github.com/jmsalgado371-ops"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="duration-300 ease-in hover:text-white"
                >
                  <svg
                    className="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.6125 21.5251C16.4625 21.5251 21.2625 14.2126 21.2625 7.87509C21.2625 7.72509 21.2625 7.46259 21.225 7.23759C22.1625 6.56259 22.9875 5.70009 23.625 4.76259C22.725 5.17509 21.825 5.40009 20.8875 5.51259C21.9 4.91259 22.65 3.97509 22.9875 2.8501C22.05 3.3751 21.075 3.78759 19.9125 4.01259C19.0125 3.0751 17.8125 2.4751 16.425 2.4751C13.7625 2.4751 11.5875 4.65009 11.5875 7.31259C11.5875 7.68759 11.625 8.06259 11.7 8.43759C7.8375 8.17509 4.3125 6.26259 1.9125 3.3751C1.5 4.12509 1.275 4.91259 1.275 5.77509C1.275 7.46259 2.1375 8.88759 3.45 9.75009C2.6625 9.71259 1.9125 9.48759 1.275 9.15009C1.275 9.18759 1.275 9.18759 1.275 9.18759C1.275 11.4751 2.925 13.4626 5.1 13.9126C4.6875 14.0251 4.2375 14.0626 3.9 14.0626C3.6 14.0626 3.2625 14.0251 3 13.9501C3.6375 15.8626 5.4 17.2501 7.5 17.2876C5.85 18.5626 3.7875 19.3501 1.575 19.3501C1.125 19.4251 0.75 19.3501 0.375 19.3126C2.4 20.7376 4.9125 21.5251 7.6125 21.5251Z"
                      fill=""
                    />
                  </svg>
                </a>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-300">Highlights</p>
                <div className="grid max-w-[460px] grid-cols-2 gap-2 sm:grid-cols-3">
                  {badgesData.slice(0, 3).map((badge) => (
                    <div
                      key={`footer-${badge.id}`}
                      className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-1.5"
                    >
                      <Image
                        src={badge.image}
                        alt={badge.name}
                        width={180}
                        height={96}
                        unoptimized
                        className="h-auto w-full rounded object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
