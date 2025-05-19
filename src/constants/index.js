import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  java,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  GitGallery,
  DevFinder,
  StreamGPT,
  Foodylicious,
  threejs,
  wipro,
  tcs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Node.js Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "TCS",
    icon: tcs,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "Leading the development and maintenance of user interfaces with React, ensuring robust, efficient, and visually appealing applications.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Enhancing application performance through optimization and implemented responsive design for improved accessibility and user engagement across devices, while also collaborating with cross-functional teams to troubleshoot issues and translate requirements into technical specifications.",
    ],
  },
  {
    title: "Big Data Engineer",
    company_name: "Wipro",
    icon: wipro,
    iconBg: "#E6DEDD",
    date: "Dec 2020 - Dec 2022",
    points: [
      "Designed and implemented efficient data pipelines using Hive and BigQuery for managing and analyzing large datasets, ensuring data integrity reducing data processing time by 22% and increasing reliability.",
      "Collaborated with data scientists to develop data models for business intelligence, optimized data storage for cost savings and improved access, and ensured system efficiency through performance tuning and troubleshooting.",
      "Optimizing data storage solutions, achieving significant cost savings and improved data retrieval times.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GitGallery",
    description:
      "The best way to share your github repositories and projects with recruiters.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressJS",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
    ],
    image: GitGallery,
    source_code_link: "https://gitgallery-frontend.onrender.com/",
  },
  {
    name: "DevFinder",
    description:
      "Web-based platform that allows users to send/recieve/accept/ignore friend requests from other users and chat with friends.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
    ],
    image: DevFinder,
    source_code_link: "https://dev-finder-j6pv.onrender.com/",
  },
  {
    name: "StreamGPT",
    description:
      "Web application that shows the latest trending movies also allowing the user to search for movies based on their prompt.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: StreamGPT,
    source_code_link: "https://gpt-flix.vercel.app/",
  },
  {
    name: "Foodylicious",
    description:
      "A comprehensive food ordering platform that allows users to order foods from hotels in their area.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Foodylicious,
    source_code_link: "https://github.com/Manish270698/foodylicious",
  },
];

export { services, technologies, experiences, testimonials, projects };
