import { FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaBrain, FaLock, FaGithub, FaSyncAlt, FaMicrophone, FaCube, FaProjectDiagram, FaCogs } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { FaAws } from "react-icons/fa6";
import { SiTypescript, SiRedux, SiPostgresql, SiSequelize, SiMongodb, SiGraphql, SiDocker, SiMicrosoftazure, SiGithubactions, SiCypress, SiSocketdotio, SiRedis, SiDart, SiShopify, SiAdobe, SiObsstudio, SiBlender, SiThreedotjs } from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import { TbDroplet, TbLayout } from 'react-icons/tb';


export const hero = {
  img: "/images/gregwebavatar_angled.png",
};

export const defaultImg = {
  img: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};


export const skills = [
  {
    id: 1,
    title: "JavaScript & TypeScript",
    icon: (
      <span className="flex flex-row">
        <FaJsSquare className="text-slate-500 h-8 w-8 mr-2" />
        <SiTypescript className="text-slate-500 h-8 w-8" />
      </span>
    ),
    icon2: (
      <span className="flex flex-row">
        <FaJsSquare className="text-sky-950 h-16 w-16 mr-4" />
        <SiTypescript className="text-sky-950 h-16 w-16" />
      </span>
    ),
    text: "I love using JavaScript to bring interactive experiences to the web, from dynamic front-end features to server-side logic. By adding TypeScript’s strong typing, I write cleaner, more maintainable code and catch errors early.",
  },
  {
    id: 2,
    title: "React & Redux/Zustand",
    icon: (
      <span className="flex flex-row">
        <FaReact className="text-slate-500 h-8 w-8 mr-2" />
        <SiRedux className="text-slate-500 h-8 w-8" />
      </span>
    ),
    icon2: (
      <span className="flex flex-row">
        <FaReact className="text-sky-950 h-16 w-16 mr-4" />
        <SiRedux className="text-sky-950 h-16 w-16" />
      </span>
    ),
    text: "I have advanced proficiency in React for building modular UIs. Pairing it with Redux or Zustand streamlines state management, ensuring predictable data flow and a smooth user experience.",
  },
  {
    id: 3,
    title: "Node.js",
    icon: <FaNodeJs className="text-slate-500 h-8 w-8" />,
    icon2: <FaNodeJs className="text-sky-950 h-16 w-16" />,
    text: "Node.js is my go-to for building scalable, high-performance back-end applications in JavaScript, thanks to its event-driven, non-blocking I/O model.",
  },
  {
    id: 4,
    title: "HTML & CSS",
    icon: (
      <span className="flex flex-row">
        <FaHtml5 className="text-slate-500 h-8 w-8 mr-2" />
        <FaCss3Alt className="text-slate-500 h-8 w-8" />
      </span>
    ),
    icon2: (
      <span className="flex flex-row">
        <FaHtml5 className="text-sky-950 h-16 w-16 mr-4" />
        <FaCss3Alt className="text-sky-950 h-16 w-16" />
      </span>
    ),
    text: "I blend artistic design with semantic HTML and modern CSS to create responsive, accessible, and visually appealing web pages.",
  },
  {
    id: 5,
    title: "Database Management",
    icon: <FaDatabase className="text-slate-500 h-8 w-8" />,
    icon2: <FaDatabase className="text-sky-950 h-16 w-16" />,
    text: "I design and optimize database schemas for scalability, focusing on data normalization, indexing, and efficient queries across different systems.",
  },
  {
    id: 6,
    title: "PostgreSQL & Sequelize",
    icon: (
      <span className="flex flex-row">
        <SiPostgresql className="text-slate-500 h-8 w-8 mr-2" />
        <SiSequelize className="text-slate-500 h-8 w-8" />
      </span>
    ),
    icon2: (
      <span className="flex flex-row">
        <SiPostgresql className="text-sky-950 h-16 w-16 mr-4" />
        <SiSequelize className="text-sky-950 h-16 w-16" />
      </span>
    ),
    text: "PostgreSQL’s robustness paired with Sequelize’s ORM features speeds up development while still allowing custom, optimized SQL when needed.",
  },
  {
    id: 7,
    title: "MongoDB & GraphQL",
    icon: (
      <span className="flex flex-row">
        <SiMongodb className="text-slate-500 h-8 w-8 mr-2" />
        <SiGraphql className="text-slate-500 h-8 w-8" />
      </span>
    ),
    icon2: (
      <span className="flex flex-row">
        <SiMongodb className="text-sky-950 h-16 w-16 mr-4" />
        <SiGraphql className="text-sky-950 h-16 w-16" />
      </span>
    ),
    text: "MongoDB’s flexible, document-based structure coupled with GraphQL simplifies data fetching, enabling efficient and highly adaptable APIs.",
  },
  {
    id: 8,
    title: "APIs",
    icon: <MdApi className="text-slate-500 h-8 w-8" />,
    icon2: <MdApi className="text-sky-950 h-16 w-16" />,
    text: "I develop RESTful and GraphQL APIs with clear documentation, security best practices, and performance in mind for seamless integration.",
  },
  {
    id: 9,
    title: "Docker & DevOps",
    icon: (
      <span className="flex flex-row">
        <SiDocker className="text-slate-500 h-8 w-8 mr-2" />
        <FaCogs className="text-slate-500 h-8 w-8" />
      </span>
    ),
    icon2: (
      <span className="flex flex-row">
        <SiDocker className="text-sky-950 h-16 w-16 mr-4" />
        <FaCogs className="text-sky-950 h-16 w-16" />
      </span>
    ),
    text: "Containerizing apps with Docker ensures consistent environments. Adopting DevOps practices helps me automate builds, tests, and deployments.",
  },
  {
    id: 10,
    title: "AWS, Azure & Render",
    icon: (
      <span className="flex flex-row">
        {/* If no Render icon: just AWS + Azure */}
        <FaAws className="text-slate-500 h-8 w-8 mr-2" />
        <SiMicrosoftazure className="text-slate-500 h-8 w-8" />
      </span>
    ),
    icon2: (
      <span className="flex flex-row">
        <FaAws className="text-sky-950 h-16 w-16 mr-4" />
        <SiMicrosoftazure className="text-sky-950 h-16 w-16" />
      </span>
    ),
    text: "I deploy and scale full-stack applications on AWS, Azure, and Render, leveraging various cloud services to ensure reliability and high availability.",
  },
  {
    id: 11,
    title: "GitHub & GitHub Actions",
    icon: (
      <span className="flex flex-row">
        <FaGithub className="text-slate-500 h-8 w-8 mr-2" />
        <SiGithubactions className="text-slate-500 h-8 w-8" />
      </span>
    ),
    icon2: (
      <span className="flex flex-row">
        <FaGithub className="text-sky-950 h-16 w-16 mr-4" />
        <SiGithubactions className="text-sky-950 h-16 w-16" />
      </span>
    ),
    text: "GitHub is my hub for collaboration and version control. With GitHub Actions, I automate tests, builds, and deployments for smoother workflows.",
  },
  {
    id: 12,
    title: "CI/CD",
    icon: <FaSyncAlt className="text-slate-500 h-8 w-8" />,
    icon2: <FaSyncAlt className="text-sky-950 h-16 w-16" />,
    text: "I set up continuous integration and delivery pipelines to automate builds, tests, and deployments, ensuring rapid iteration and high code quality.",
  },
  {
    id: 13,
    title: "Cypress (Testing)",
    icon: <SiCypress className="text-slate-500 h-8 w-8" />,
    icon2: <SiCypress className="text-sky-950 h-16 w-16" />,
    text: "I use Cypress to run end-to-end tests that simulate real-user interactions, helping me catch regressions early and maintain reliability in complex apps.",
  },
  {
    id: 14,
    title: "Socket.IO",
    icon: <SiSocketdotio className="text-slate-500 h-8 w-8" />,
    icon2: <SiSocketdotio className="text-sky-950 h-16 w-16" />,
    text: "Socket.IO powers my real-time apps—like chat platforms and live dashboards—providing instant, bi-directional communication for engaging experiences.",
  },
  {
    id: 15,
    title: "Prompt Engineering, LangChain & LangGraph",
    icon: <FaBrain className="text-slate-500 h-8 w-8" />,
    icon2: <FaBrain className="text-sky-950 h-16 w-16" />,
    text: "I craft prompts that optimize AI outputs, building sophisticated language pipelines with tools like LangChain and LangGraph for deeper text analysis.",
  },
  {
    id: 16,
    title: "Authentication & Security",
    icon: <FaLock className="text-slate-500 h-8 w-8" />,
    icon2: <FaLock className="text-sky-950 h-16 w-16" />,
    text: "I integrate secure auth flows with OAuth, JWT, and MFA. I'm vigilant about encryption, XSS, SQL injection, and other vulnerabilities.",
  },
  {
    id: 17,
    title: "Redis",
    icon: <SiRedis className="text-slate-500 h-8 w-8" />,
    icon2: <SiRedis className="text-sky-950 h-16 w-16" />,
    text: "I use Redis for caching and session management. Its in-memory data store excels at real-time analytics and high-throughput operations.",
  },
  {
    id: 18,
    title: "Liquid",
    icon: <TbDroplet className="text-slate-500 h-8 w-8" />,
    icon2: <TbDroplet className="text-sky-950 h-16 w-16" />,
    text: "I use Liquid templating (especially in Shopify) for dynamic content rendering, offering straightforward syntax for reusable layouts and themes.",
  },
  {
    id: 19,
    title: "Dart",
    icon: <SiDart className="text-slate-500 h-8 w-8" />,
    icon2: <SiDart className="text-sky-950 h-16 w-16" />,
    text: "I leverage Dart for cross-platform development (e.g., Flutter), combining strong typing and modern syntax for smooth mobile and web deployments.",
  },
  {
    id: 20,
    title: "Shopify",
    icon: <SiShopify className="text-slate-500 h-8 w-8" />,
    icon2: <SiShopify className="text-sky-950 h-16 w-16" />,
    text: "I customize Shopify stores, leveraging its APIs and Liquid templates to create seamless e-commerce experiences with standout design.",
  },
  {
    id: 21,
    title: "Adobe",
    icon: <SiAdobe className="text-slate-500 h-8 w-8" />,
    icon2: <SiAdobe className="text-sky-950 h-16 w-16" />,
    text: "I use Adobe tools (Photoshop, Illustrator, XD) to design wireframes, edit graphics, and maintain a professional aesthetic in my projects.",
  },
  {
    id: 22,
    title: "Digital Audio Recording & OBS Streaming",
    icon: (
      <span className="flex flex-row">
        <FaMicrophone className="text-slate-500 h-8 w-8 mr-2" />
        <SiObsstudio className="text-slate-500 h-8 w-8" />
      </span>
    ),
    icon2: (
      <span className="flex flex-row">
        <FaMicrophone className="text-sky-950 h-16 w-16 mr-4" />
        <SiObsstudio className="text-sky-950 h-16 w-16" />
      </span>
    ),
    text: "I record and edit audio for podcasts, music, and video projects. OBS allows me to stream live demos, events, and tutorials with professional polish.",
  },
  {
    id: 23,
    title: "Blender, Three.js & React Three/Fiber",
    icon: (
      <span className="flex flex-row">
        <SiBlender className="text-slate-500 h-8 w-8 mr-2" />
        <SiThreedotjs className="text-slate-500 h-8 w-8 mr-2" />
        <FaCube className="text-slate-500 h-8 w-8" />
      </span>
    ),
    icon2: (
      <span className="flex flex-row">
        <SiBlender className="text-sky-950 h-16 w-16 mr-4" />
        <SiThreedotjs className="text-sky-950 h-16 w-16 mr-4" />
        <FaCube className="text-sky-950 h-16 w-16" />
      </span>
    ),
    text: "I create 3D assets in Blender and bring them to the web with Three.js and React Three/Fiber, delivering rich, interactive 3D experiences.",
  },
  {
    id: 24,
    title: "Wireframing & ERD",
    icon: (
      <span className="flex flex-row">
        <TbLayout className="text-slate-500 h-8 w-8 mr-2" />
        <FaProjectDiagram className="text-slate-500 h-8 w-8" />
      </span>
    ),
    icon2: (
      <span className="flex flex-row">
        <TbLayout className="text-sky-950 h-16 w-16 mr-4" />
        <FaProjectDiagram className="text-sky-950 h-16 w-16" />
      </span>
    ),
    text: "I plan application flows with wireframes for intuitive usability. Entity Relationship Diagrams (ERDs) help me build clear, scalable data models.",
  },
];



// export const projects = [
//   {
//     id: 1,
//     img: "/images/rpg2-screenshot.png",
//     url: "https://savevsgames.itch.io/js-rpg2",
//     github: "https://github.com/savevsgames/js_rpg2",
//     title: "JavaScript RPG V2",
//     text: "JS_RPG2 is a learning project built using TypeScript, Phaser, Ink.js and Vite. This project is part of my ongoing journey to deepen my understanding of game development. I am adapting the story of a novel I was writing called Shadowtide Island into a browswer-based game that will be also be playable on mobile. This is my current passion project. I enjoy creating and running TTRPGs and this project is a way to bring that experience to a wider audience and engage with the community online.",
//   },
//   {
//     id: 2,
//     img: "/images/sportsweather-screenshot.png",
//     url: "https://gameplanning-sportsweatherannouncer.onrender.com/",
//     github:
//       "https://github.com/savevsgames/GamePlanning---SportsWeatherAnnouncer",
//     title: "Game Planning - Sports Weather Announcer",
//     text: "The Game Planning - Sports Weather Announcer is a web application that combines data from the OpenWeather API with OpenAI's API to produce a 5-day weather forecast, delivered in the style of a baseball radio announcer. It provides a fun and engaging way to present weather information, making it perfect for use in game planning scenarios where weather plays a role in outdoor activities.",
//   },
//   {
//     id: 3,
//     img: "/images/readmegenerator-screenshot.png",
//     url: "https://github.com/savevsgames/GitHub-README-Generator",
//     github: "https://github.com/savevsgames/GitHub-README-Generator",
//     title: "GitHub README Generator",
//     text: "The GitHub README Generator is a command-line application that dynamically generates a professional README.md file based on user input. This tool streamlines the process of creating comprehensive project documentation, ensuring that developers can quickly produce high-quality READMEs for their GitHub repositories. I have personally used it to create my README files since I coded it and I plan to continue to develop it, adding GPT functionality to help with the writing process, as well as other quality of life improvements. I especially like the badge generator.",
//   },
//   {
//     id: 4,
//     img: "/images/greggingalgorithms-screenshot.png",
//     url: "https://github.com/savevsgames/Gregging-Algorithms-JS",
//     github: "https://github.com/savevsgames/Gregging-Algorithms-JS",
//     title: "Gregging Algorithms JS",
//     text: "This repository is a learning project that aims to interpret and re-explain the concepts and code found in the book 'Grokking Algorithms' by Aditya Bhargava. The code examples from the book have been translated into JavaScript as I learn and explore the algorithms presented in the book. The purpose of this project is to solidify my understanding of the algorithms by implementing them in JavaScript and providing my own explanations and examples. It serves as a personal learning resource and a way to share my journey with others who may be interested in learning about algorithms and data structures.",
//   },
//   {
//     id: 5,
//     img: "/images/employeemanagementdb-screenshot.png",
//     url: "https://github.com/savevsgames/EmployeeManagmentDB",
//     github: "https://github.com/savevsgames/EmployeeManagmentDB",
//     title: "Employee Management System CLI",
//     text: "The Employee Management System CLI is a command-line application that enables users to manage employees, roles, and departments within a company. This tool provides an interactive experience for viewing, adding, and updating employee information, roles, and departments in a PostgreSQL database.",
//   },
//   {
//     id: 6,
//     img: "/images/multisearchdashboard-screenshot.png",
//     url: "https://soibun-sol.github.io/multi-search-dashboard/",
//     github: "https://github.com/soibun-sol/multi-search-dashboard/",
//     title: "Multi-Search Dashboard",
//     text: "Multi-Search Dashboard was an idea I had to pull together all the search engines I use into one place. I worked with a team to create this project. I was responsible for the overall structure of the project, the search engine API calls to the Geolocation API, the Pexels API and the OpenWeather API",
//   },
// ];
export const projects = [
  {
    id: 1,
    img: "/images/rpg2-screenshot.png",
    url: "https://savevsgames.itch.io/js-rpg2", 
    github: "https://github.com/savevsgames/js_rpg2",
    title: "JavaScript RPG V2",
    text: "JS_RPG2 is an ongoing passion project built with TypeScript, Phaser, and Ink.js. I'm adapting my novel, 'Shadowtide Island,' into a browser-based game that’s also playable on mobile. It merges my love of TTRPGs with coding to create an immersive storytelling experience.",
  },
  {
    id: 2,
    img: "/images/readmegenerator-screenshot.png", 
    url: "https://github.com/savevsgames/GitHub-README-Generator",
    github: "https://github.com/savevsgames/GitHub-README-Generator",
    title: "GitHub README Generator",
    text: "A Node.js CLI tool that dynamically generates a polished README.md based on user prompts. It streamlines project documentation by handling badges, descriptions, and more, with plans to integrate GPT for improved writing assistance.",
  },
  {
    id: 3,
    img: "/image/FWOB.png", 
    url: "https://friends-without-benefits.onrender.com/", 
    github: "https://github.com/savevsgames/friends-without-benefits",
    title: "friends-without-benefits",
    text: "FRIENDS WITHOUT BENEFITS is a multiplayer scavenger hunt game where you use your webcam to find common objects, score points, and climb the leaderboard. We trained our own custom TensorFlow model to recognize objects in real‐time. Now you can play against friends, share video feeds, chat, and see who can spot items fastest!",
  },
  {
    id: 4,
    img: "/image/CATGPT.png", 
    url: "", // TODO: Add render live demo link and change URL of github when swapped to render paid
    github: "https://github.com/OccultParrot/Tomogatch.ai",
    title: "Tomogatch.ai (CAT-GPT)",
    text: "CAT-GPT is a playful virtual pet application built with React on the client side and Node.js + Express on the server. It uses GPT-based AI for real-time chat interactions, allowing the pet to evolve based on user behavior. A document database stores conversation summaries for the OpenAI API, while a SQL database handles user accounts, yarn currency, and transactions. Yarn can be spent feeding and playing with the pet, adding a fun, gamified layer. Designed for scalability and ongoing updates, CAT-GPT grows with user feedback.",
  },
  {
    id: 5,
    img: "/images/multisearchdashboard-screenshot.png",
    url: "https://soibun-sol.github.io/multi-search-dashboard/",
    github: "https://github.com/soibun-sol/multi-search-dashboard/",
    title: "Multi-Search Dashboard",
    text: "A collaborative project unifying various search engines in one convenient interface. I managed the core structure and integrated geolocation, weather, and image APIs, creating a central hub for diverse search needs.",
  },
  {
    id: 6,
    img: "/images/greggingalgorithms-screenshot.png", // Placeholder path
    url: "https://github.com/savevsgames/Gregging-Algorithms-JS",
    github: "https://github.com/savevsgames/Gregging-Algorithms-JS",
    title: "Gregging Algorithms JS",
    text: "My personal journey through 'Grokking Algorithms' by implementing and re-explaining its concepts in JavaScript. This helps me deepen my understanding of data structures and algorithms—and share insights with fellow learners.",
  },
];

export const about = [
  {
    id: 1,
    heading: `Hi, I'm Greg Barker. I am a motivated and enthusiastic web designer, dedicated to delivering high-quality websites and development projects.`,
    content: [
      `I am able to communicate effectively with clients and team members, ensuring a productive and consistent workflow.`,
      `I am eager to collaborate with skilled and dedicated professionals to further enhance technical skills and industry practices.`,
    ],
    image: "/images/gregwebavatar_portrait.png",
    imageInfo: "AI version of Me - Greg Barker",
  },
  {
    id: 2,
    heading: `Coding has become a gateway that is helping me bridge the gap between my creative and technical skills.`,
    content: [
      `I started coding in high school but did not pursue it as a career. Instead I followed a path that led me to becoming a Master Electrician and running projects. I have always enjoyed learning systems and how they work. I am a natural problem solver and as technology advanced I found myself drawn to learning to code again. I started independently by doing online tutorials in hopes that I would be able to create a game. I caught the coding bug and took on the challenge of designing a website for a friend to replace their Shopify page. When things started to click I decided to take the plunge and enroll in the EdX Full-Stack Developer Coding Bootcamp. I am excited to see where this journey takes me.`,
    ],
    image: "/images/gregwebavatar_electrician.png",
    imageInfo:
      "Becoming a Master Electrician was a journey that taught me a lot; about people and systems. I am grateful for the experience.",
  },
  {
    id: 3,
    heading: `Creativity and Technology have always been a part of my life.`,
    content: [
      `I am a musician and have played guitar for over 25 years now. I ran a recording studio for a few years and recorded songs for local artists and bands and live shows. In 2018 I released an album called 'Love, Hope, Time & Soul' with my band 'The Heartwarming Skeletons'.`,
      `I am an amateur commercial photographer and have successfully created profitable Amazon listings with my photos. I enjoy using Abode Creative cloud programs to craft visually intriguing images and add them to my digital projects. I have created advertisements for social media and websites for local businesses.`,
    ],
    image: "/images/gregwebavatar_recording.png",
    imageInfo:
      "Before AI could make pictures like this and fix poor musicianship, I was a self-taught recording engineer.",
  },
  {
    id: 4,
    heading: `I am a World Builder.`,
    content: [
      `I am an amateur writer and working on a novel that has slowly adapted itself into becoming a game instead. I call it Shadowtide Island and when I have extra time, or need a recharge, I work on it. I am eager to share it with people.`,
      `I have many ideas and interests, and I am always looking for new ways to learn and grow. I am excited for the journey ahead and all the advancements in technology that I will be able to harness. The future is now.`,
    ],
    image: "/images/gregwebavatar_coffeeandcode.png",
    imageInfo:
      "I love to write and code. Caffeine makes the perfect companion.",
  },
];

export const socials = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/savevsgames",
    icon: <FaGithub className="sm:h-8 sm:w-8 md:h-16 md:w-16" />,
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/greg-barker-savevsgames",
    icon: <FaLinkedin className="sm:h-8 sm:w-8 md:h-16 md:w-16" />,
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://www.instagram.com/savevsgames/",
    icon: <FaInstagramSquare className="sm:h-8 sm:w-8 md:h-16 md:w-16" />,
  },
];
