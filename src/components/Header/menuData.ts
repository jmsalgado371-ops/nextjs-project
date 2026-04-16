import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Resume",
    newTab: false,
    path: "/about",
  },
  {
    id: 3,
    title: "Contact",
    newTab: false,
    path: "/docs",
  },
  // {
  // //   id: 4,
  // //   title: "Blog",
  // //   newTab: false,
  // //   path: "/blog",
  // // },
 //
 // },
  //   {
  //     id: 6,
  //     title: "OpenAI Examples",
  //     newTab: false,
  //     path: "/ai-examples",
  //     submenu: [
  //       {
  //         id: 66,
  //         title: "Content Writing Tool",
  //         newTab: false,
  //         path: "/ai-examples/content-writing-tool",
  //       },
  //       {
  //         id: 67,
  //         title: "Business Name Generator",
  //         newTab: false,
  //         path: "/ai-examples/business-name-generator",
  //       },
  //       {
  //         id: 69,
  //         title: "Product Name Generator",
  //         newTab: false,
  //         path: "/ai-examples/product-name-generator",
  //       },
  //       {
  //         id: 68,
  //         title: "Article Title Generator",
  //         newTab: false,
  //         path: "/ai-examples/article-title-generator",
  //       },
  //       {
  //         id: 70,
  //         title: "Spreadsheet Generator",
  //         newTab: false,
  //         path: "/ai-examples/spreadsheet-generator",
  //       },
  //       {
  //         id: 71,
  //         title: "Interview Question Generator",
  //         newTab: false,
  //         path: "/ai-examples/interview-question-generator",
  //       },
  //     ],
  //   },
];

export default menuData;
