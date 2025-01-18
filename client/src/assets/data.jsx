import {
  FaHtml5,
  FaJs,
  FaReact,
  FaPython,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss3Alt, FaGithub } from "react-icons/fa6";

export const hero = {
  img: "/images/gregwebavatar_angled.png",
};

export const defaultImg = {
  img: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export const skills = [
  {
    id: 1,
    title: "HTML&CSS",
    icon: (
      <span className="flex flex-row">
        <FaHtml5 className="text-slate-500 h-8 w-8" />
        <FaCss3Alt className="text-slate-500 h-8 w-8" />
      </span>
    ),
    icon2: (
      <span className="flex flex-row">
        <FaHtml5 className="text-sky-950 h-16 w-16" />
        <FaCss3Alt className="text-sky-950 h-16 w-16" />
      </span>
    ),
    text: "Artistic and creative design skills, with a focus on responsive web design and a strong understanding of web standards and best practices",
  },
  {
    id: 2,
    title: "Javascript",
    icon: <FaJs className="text-slate-500 h-8 w-8" />,
    icon2: <FaJs className="text-sky-950 h-16 w-16" />,
    text: "I love JavaScript, and I have a strong understanding of the language. I enjoy making the web interactive and dynamic in creative ways.",
  },
  {
    id: 3,
    title: "Typescript",
    icon: <SiTypescript className=" text-slate-500 h-8 w-8" />,
    icon2: <SiTypescript className=" text-sky-950 h-16 w-16" />,
    text: "I have a strong understanding of TypeScript, and I enjoy using it to write clean, maintainable code with fewer bugs.",
  },
  {
    id: 4,
    title: "React",
    icon: <FaReact className=" text-slate-500 h-8 w-8" />,
    icon2: <FaReact className=" text-sky-950 h-16 w-16" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: 5,
    title: "Python",
    icon: <FaPython className=" text-slate-500 h-8 w-8" />,
    icon2: <FaPython className=" text-sky-950 h-16 w-16" />,
    text: "I enjoy writing algorithms and coding arduino projects in Python. I have a strong understanding of the language and its libraries.",
  },
  {
    id: 6,
    title: "PostgreSQL",
    icon: <BiLogoPostgresql className="text-slate-500 h-8 w-8" />,
    icon2: <BiLogoPostgresql className="text-sky-950 h-16 w-16" />,
    text: "I have experience with PostgreSQL, and cloud-based databases. I enjoy 3NF database design and writing efficient queries.",
  },
  {
    id: 7,
    title: "Github",
    icon: <FaGithub className="text-slate-500 h-8 w-8" />,
    icon2: <FaGithub className="text-sky-950 h-16 w-16" />,
    text: "I use GitHub for version control and collaboration. I enjoy contributing to open-source projects and the idea of sharing my code with the community.",
  },
];

export const projects = [
  {
    id: 1,
    img: "/images/rpg2-screenshot.png",
    url: "https://savevsgames.itch.io/js-rpg2",
    github: "https://github.com/savevsgames/js_rpg2",
    title: "JavaScript RPG V2",
    text: "JS_RPG2 is a learning project built using TypeScript, Phaser, Ink.js and Vite. This project is part of my ongoing journey to deepen my understanding of game development. I am adapting the story of a novel I was writing called Shadowtide Island into a browswer-based game that will be also be playable on mobile. This is my current passion project. I enjoy creating and running TTRPGs and this project is a way to bring that experience to a wider audience and engage with the community online.",
  },
  {
    id: 2,
    img: "/images/sportsweather-screenshot.png",
    url: "https://gameplanning-sportsweatherannouncer.onrender.com/",
    github:
      "https://github.com/savevsgames/GamePlanning---SportsWeatherAnnouncer",
    title: "Game Planning - Sports Weather Announcer",
    text: "The Game Planning - Sports Weather Announcer is a web application that combines data from the OpenWeather API with OpenAI's API to produce a 5-day weather forecast, delivered in the style of a baseball radio announcer. It provides a fun and engaging way to present weather information, making it perfect for use in game planning scenarios where weather plays a role in outdoor activities.",
  },
  {
    id: 3,
    img: "/images/readmegenerator-screenshot.png",
    url: "https://github.com/savevsgames/GitHub-README-Generator",
    github: "https://github.com/savevsgames/GitHub-README-Generator",
    title: "GitHub README Generator",
    text: "The GitHub README Generator is a command-line application that dynamically generates a professional README.md file based on user input. This tool streamlines the process of creating comprehensive project documentation, ensuring that developers can quickly produce high-quality READMEs for their GitHub repositories. I have personally used it to create my README files since I coded it and I plan to continue to develop it, adding GPT functionality to help with the writing process, as well as other quality of life improvements. I especially like the badge generator.",
  },
  {
    id: 4,
    img: "/images/greggingalgorithms-screenshot.png",
    url: "https://github.com/savevsgames/Gregging-Algorithms-JS",
    github: "https://github.com/savevsgames/Gregging-Algorithms-JS",
    title: "Gregging Algorithms JS",
    text: "This repository is a learning project that aims to interpret and re-explain the concepts and code found in the book 'Grokking Algorithms' by Aditya Bhargava. The code examples from the book have been translated into JavaScript as I learn and explore the algorithms presented in the book. The purpose of this project is to solidify my understanding of the algorithms by implementing them in JavaScript and providing my own explanations and examples. It serves as a personal learning resource and a way to share my journey with others who may be interested in learning about algorithms and data structures.",
  },
  {
    id: 5,
    img: "/images/employeemanagementdb-screenshot.png",
    url: "https://github.com/savevsgames/EmployeeManagmentDB",
    github: "https://github.com/savevsgames/EmployeeManagmentDB",
    title: "Employee Management System CLI",
    text: "The Employee Management System CLI is a command-line application that enables users to manage employees, roles, and departments within a company. This tool provides an interactive experience for viewing, adding, and updating employee information, roles, and departments in a PostgreSQL database.",
  },
  {
    id: 6,
    img: "/images/multisearchdashboard-screenshot.png",
    url: "https://soibun-sol.github.io/multi-search-dashboard/",
    github: "https://github.com/soibun-sol/multi-search-dashboard/",
    title: "Multi-Search Dashboard",
    text: "Multi-Search Dashboard was an idea I had to pull together all the search engines I use into one place. I worked with a team to create this project. I was responsible for the overall structure of the project, the search engine API calls to the Geolocation API, the Pexels API and the OpenWeather API",
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
