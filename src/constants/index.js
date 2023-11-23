import { meta, shopify, starbucks, tesla } from "../assets/images";
import tef from "../assets/images/tef.png";
import nzbike from "../assets/images/NZBike_logo.png";
import bank from "../assets/images/Logo_BancoEstado.png";
import university from "../assets/images/university_chile.png";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    id: "1",
    title: "Project Coordinator (Network PILA project)  ",
    company_name: "Intellectual Property Department at University of Chile ",
    icon: university,
    iconBg: "#accbe1",
    date: "2010 - 2011",
    points: [
      "Established collaborative network among Latin American universities and IP specialists, conducted national benchmarking, managed budget, and formed partnerships for impactful seminars with 14 Chilean universities and government entities.",
      "Positioned PILA project through strategic planning and dissemination activities, organizing 4 successful seminars",
    ],
  },
  {
    id: "2",
    title: "Project Coordinator ",
    company_name: "National Bank of Chile ",
    icon: bank,
    iconBg: "#b7e4c7",
    date: "2011 - 2013",
    points: [
      "Lead limited scope projects using  Agile principles with strict timeframes and budget, particularly in commercial platform triggered by legislation changes or commercial requests like modifications and data capture requirements.",
    ],
  },
  {
    id: "3",
    title: "B2B Sales Digital Services",
    company_name: "Telefonica Company",
    icon: tef,
    iconBg: "#fbc3bc",
    date: "2013 - 2016",
    points: [
      "Collaborated with technology partners to promote digital services, trained sales forces, and collaborated with technology partners and tech teams on custom solutions in Cloud Computing, InfoSec, CCTV, SaaS, and IT Financial Services.",
    ],
  },
  {
    id: "4",
    title: "Senior IT Sales",
    company_name: "Telefonica Company",
    icon: tef,
    iconBg: "#b7e4c7",
    date: "2016 -  2018",
    points: [
      "Drove sales growth and transformed retail operations in Latin America through customized IT services and collaborations with top brands like SAP, Cisco, HP, Microsoft, Huawei, and other.",
    ],
  },
  {
    id: "5",
    title: "Shopify Developer and MKT Lead",
    company_name: "NZBike.co.nz",
    icon: nzbike,
    iconBg: "#a2d2ff",
    date: "Ago 2023 - Present",
    points: [
      "Design, Strategic planning and implementation eCommerce integrated with 4 supplier for one of the brand of the business.",
      "Ensure smooth connection with the Shopify Apps, Marketing Tools, and Platform APIs.",
      "Modify and update current sites to incorporate new features and enhance UI/UX design",
      "Developing, monitoring, writing and updating content contained on eCommerce websites and social media.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/mariaale2023",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/maria-vasquez-nz/",
  },
];

export const projects = [
  {
    iconUrl: shopify,
    // imgURL: nzbike,
    theme: "btn-back-red",
    name: "NZBike Store",
    description:
      "Developed a shopify web store that is an extension of the renowned New Zealand Motorcycle Rentals and Tours, we bring you a comprehensive range of motorcycle gear, accessories, parts, clothing, and more.",
    link: "https://nzbike.co.nz/",
  },
  {
    iconUrl: threads,
    // imgURL: nzbike,
    theme: "btn-back-green",
    name: "Shortflix -Full Stack Netflix Clone",
    description:
      "The Shortflix Blog is a web application that allows users to share and discover information about their favorite movies. Users can create accounts, browse through a collection of movies, read and write reviews, and interact with other movie enthusiasts through comments and likes.",
    link: "https://github.com/mariaale2023/Shortflix",
  },
  {
    iconUrl: summiz,
    // imgURL: nzbike,
    theme: "btn-back-yellow",
    name: "Touch the Grass Store",
    description:
      "Touch the Grass is an innovative store that seamlessly blends fashion and home décor with the timeless beauty of grass. Our unique approach to retailing offers a curated collection of clothing and furniture, all adorned with high-quality, sustainable grass materials.",
    link: "https://touchthegrass.onrender.com/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Cat-ia Chatbox",
    description:
      "Designed a Cat-chatbot that help you to alleviate frustration and wasted time searching your misplaced items in your home. This will provide you with step-by-step directions on where to locate the item within the house..",
    link: "https://chatbot-detective-cat.onrender.com/",
  },
  {
    iconUrl: snapgram,
    // imgURL: nzbike,
    theme: "btn-back-pink",
    name: "Guess The South America Country",
    description:
      "Guess The South America Country is a simple web project that challenges your knowledge about the 12 countries in South America. In this game, you will have three chances to guess the correct country. The project includes three files: index.html, style.css, and script.js. You can check out the live demo of the project.",
    link: "https://guess-southamerica-country.netlify.app/",
  },
  {
    iconUrl: estate,
    // imgURL: nzbike,
    theme: "btn-back-black",
    name: "Ricky Morty App",
    description:
      "The Ricky Morty App is a web application that allows users to explore characters from the popular animated TV show Rick and Morty. Users can view details about each character, search for specific characters, and access a shop for Ricky Morty merchandise. This App is connected with Ricky and Morty API and Higrogen Shopify framework.",
    link: "https://github.com/mariaale2023/Ricky-Morty-App",
  },
  {
    iconUrl: summiz,
    // imgURL: nzbike,
    theme: "btn-back-yellow",
    name: "TrustBankApp",
    description:
      "Built a Bank application enables users to deposit and request funds across a range of predetermined accounts. It leverages JavaScript principles such as manipulating the Document Object Model (DOM), utilizing functions, and primarily employing arrays and array methods.",
    link: "https://github.com/mariaale2023/TrustBankApp",
  },
  {
    iconUrl: summiz,
    // imgURL: nzbike,
    theme: "btn-back-yellow",
    name: "Google Clone",
    description:
      "Built Google is a clone of Google Search Engine with HTML, CSS and JS.",
    link: "https://google-clone-mariavasquez.netlify.app/#",
  },
];
