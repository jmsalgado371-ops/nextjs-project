export interface BadgeItem {
  id: string;
  name: string;
  issuer: string;
  image: string;
}

const badgesData: BadgeItem[] = [
  {
    id: "html-foundations",
    name: "HTML Foundations",
    issuer: "Web Standards",
    image: "/badges/html-css-web-designer.png",
  },
  {
    id: "css-responsive",
    name: "CSS Responsive Design",
    issuer: "Frontend Track",
    image: "/badges/html-css-web-designer.png",
  },
  {
    id: "javascript-core",
    name: "JavaScript Core",
    issuer: "Frontend Track",
    image: "/badges/javascript-professional-developer.png",
  },
  {
    id: "reactjs-development",
    name: "ReactJS Development",
    issuer: "Frontend Track",
    image: "/badges/javascript-professional-developer.png",
  },
  {
    id: "aws-solutions-architect",
    name: "AWS Solutions Architect",
    issuer: "Cloud Track",
    image: "/badges/aws-certified-solutions-architect-associate.png",
  },
];

export default badgesData;