import SidebarLink from "@/components/Docs/SidebarLink";
import { getAllPosts } from "@/libs/markdown";
import type { PropsWithChildren } from "react";

type DocsLayoutProps = PropsWithChildren & {
  params: Promise<{ slug?: string }>;
};

export default async function DocsLayout({ children, params }: DocsLayoutProps) {
  const routeParams = await params;
  const showSidebar = Boolean(routeParams?.slug);

  getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  if (!showSidebar) {
    return <>{children}</>;
  }

  return (
    <div className={`mx-auto grid max-w-[1170px] gap-x-8 gap-y-4 pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 lg:grid-cols-[auto_1fr]`}>
      <aside className='max-h-fit lg:sticky lg:top-[80px]'>
        <SidebarLink />
      </aside>

      <main className='prose prose-invert rounded-lg bg-white/5 px-8 py-11 sm:p-[55px] lg:px-8 xl:p-[55px]'>
        {children}
      </main>
    </div>
  );
}
