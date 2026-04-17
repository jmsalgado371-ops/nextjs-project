"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const logo = "/salgado-logo.svg";
import menuData from "./menuData";

const hasActiveSubmenu = (submenu?: typeof menuData[number]["submenu"], pathUrl?: string) =>
  submenu?.some((subItem) => subItem.path === pathUrl);

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [openSubmenuId, setOpenSubmenuId] = useState<number | null>(null);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);

    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  useEffect(() => {
    setNavigationOpen(false);
    setOpenSubmenuId(null);
  }, [pathUrl]);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-1000 w-full ${
          navigationOpen ? "overflow-visible" : "overflow-hidden"
        } ${
          stickyMenu
            ? "before:features-row-border py-4! shadow-sm backdrop-blur-lg transition duration-100 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full lg:py-0!"
            : "py-7 lg:py-0"
        }`}
        style={{ backgroundColor: '#1a1f2e' }}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(134,70,244,0.18),_transparent_23%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.14),_transparent_30%)]" />
          <div className="absolute left-[-4rem] top-0 h-80 w-80 rounded-full bg-purple-400/30 blur-3xl navbar-blob mix-blend-screen opacity-100" />
          <div className="absolute right-[-4rem] top-6 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl navbar-blob-delay mix-blend-screen opacity-100" />
          <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-400/20 blur-3xl navbar-blob mix-blend-screen opacity-90" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/20 to-transparent" />
        </div>

        <div className="relative mx-auto flex w-full max-w-[1170px] items-center gap-4 px-4 sm:px-8 xl:gap-6 xl:px-0">
          {/* Logo - Far Left */}
          <div className="flex shrink-0 items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="Salgado Logo"
                width={172}
                height={42}
                className="h-auto w-[138px] object-contain opacity-90 saturate-75 brightness-110 drop-shadow-[0_3px_14px_rgba(5,8,20,0.45)] sm:w-[154px] xl:w-[172px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop navbar */}
          <div
            className={`hidden flex-1 items-center justify-center xl:flex ${
              navigationOpen
                ? "visible! relative mt-4 h-auto! max-h-[400px] overflow-y-scroll rounded-md bg-dark p-7.5 shadow-lg"
                : ""
            }`}
          >
            <Menubar className="flex w-full max-w-max items-center justify-center gap-1 border-none bg-transparent">
              {menuData.map((menuItem, key) => (
                <MenubarMenu key={key}>
                  {menuItem.submenu ? (
                    <>
                      <MenubarTrigger className={`hover:nav-gradient relative border border-transparent px-4 py-2 text-sm hover:text-white ${
                        pathUrl === menuItem.path
                          ? "nav-gradient text-white"
                          : "text-white/80"
                      }`}>
                        {menuItem.title}
                      </MenubarTrigger>
                      <MenubarContent>
                        {menuItem.submenu.map((subItem, subKey) => (
                          <MenubarItem key={subKey}>
                            {subItem.path ? (
                              <Link href={subItem.path!} className="w-full">
                                {subItem.title}
                              </Link>
                            ) : (
                              <span>{subItem.title}</span>
                            )}
                          </MenubarItem>
                        ))}
                      </MenubarContent>
                    </>
                  ) : (
                    <MenubarTrigger asChild>
                      <Link
                        href={`${menuItem.path}`}
                        className={`hover:nav-gradient relative border border-transparent px-4 py-2 text-sm hover:text-white ${
                          pathUrl === menuItem.path
                            ? "nav-gradient text-white"
                            : "text-white/80"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    </MenubarTrigger>
                  )}
                </MenubarMenu>
              ))}
            </Menubar>
          </div>

          <div className="relative ml-auto shrink-0 xl:hidden">
            <button
              onClick={() => setNavigationOpen(!navigationOpen)}
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
              aria-expanded={navigationOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-0 duration-200 ease-in-out ${
                      !navigationOpen ? "w-full! delay-300" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-150 duration-200 ease-in-out ${
                      !navigationOpen ? "delay-400 w-full!" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-200 duration-200 ease-in-out ${
                      !navigationOpen ? "w-full! delay-500" : "w-0"
                    }`}
                  ></span>
                </span>
                <span className="du-block absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-white delay-300 duration-200 ease-in-out ${
                      !navigationOpen ? "h-0! delay-0" : "h-full"
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-white duration-200 ease-in-out ${
                      !navigationOpen ? "h-0! delay-200" : "h-0.5"
                    }`}
                  ></span>
                </span>
              </span>
            </button>

            {navigationOpen && (
              <div className="absolute right-0 top-full mt-4 w-[min(18rem,calc(100vw-2rem))] rounded-2xl border border-white/10 bg-dark/95 p-3 shadow-2xl backdrop-blur-xl">
                <nav className="flex flex-col gap-1">
                  {menuData.map((menuItem) => {
                    const isActive = pathUrl === menuItem.path || hasActiveSubmenu(menuItem.submenu, pathUrl);
                    const submenuOpen = openSubmenuId === menuItem.id;

                    if (menuItem.submenu) {
                      return (
                        <div key={menuItem.id} className="rounded-xl border border-white/8 bg-white/[0.03]">
                          <button
                            type="button"
                            onClick={() =>
                              setOpenSubmenuId(submenuOpen ? null : menuItem.id)
                            }
                            className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition hover:bg-white/5 ${
                              isActive ? "text-white" : "text-white/80"
                            }`}
                          >
                            <span>{menuItem.title}</span>
                            <svg
                              className={`h-3 w-3 fill-current transition ${
                                submenuOpen ? "rotate-180" : ""
                              }`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                          </button>

                          {submenuOpen && (
                            <div className="flex flex-col gap-1 px-2 pb-2">
                              {menuItem.submenu.map((subItem) => (
                                <Link
                                  key={subItem.id}
                                  href={subItem.path || "#"}
                                  className={`rounded-lg px-3 py-2 text-sm transition hover:bg-white/5 hover:text-white ${
                                    pathUrl === subItem.path ? "text-white" : "text-white/70"
                                  }`}
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={menuItem.id}
                        href={menuItem.path || "#"}
                        className={`rounded-xl px-4 py-3 text-sm transition hover:bg-white/5 hover:text-white ${
                          isActive ? "nav-gradient text-white" : "text-white/80"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
