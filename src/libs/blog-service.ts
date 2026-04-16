import { Blog } from "@/types/blog";

export async function getPosts(): Promise<Blog[]> {
  return [];
}

export async function getPost(_slug: string): Promise<Blog | null> {
  return null;
}

export async function getPostsByAuthor(_slug: string): Promise<Blog[]> {
  return [];
}

export const imageBuilder = (_source: unknown) => ({
  url: () => "",
  width: (_w: number) => ({
    height: (_h: number) => ({
      url: () => "",
    }),
  }),
});
