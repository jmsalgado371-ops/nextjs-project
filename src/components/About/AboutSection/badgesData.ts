export interface BadgeItem {
  id: string;
  name: string;
  issuer: string;
}

const badgesData: BadgeItem[] = [
  {
    id: "html-foundations",
    name: "HTML Foundations",
    issuer: "Web Standards",
  },
  {
    id: "css-responsive",
    name: "CSS Responsive Design",
    issuer: "Frontend Track",
  },
  {
    id: "javascript-core",
    name: "JavaScript Core",
    issuer: "Frontend Track",
  },
  {
    id: "reactjs-development",
    name: "ReactJS Development",
    issuer: "Frontend Track",
  },
  {
    id: "aws-solutions-architect",
    name: "AWS Solutions Architect",
    issuer: "Cloud Track",
  },
];

export default badgesData;