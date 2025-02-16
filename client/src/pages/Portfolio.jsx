import { projects } from "../assets/data";
import Project from "../components/Project";
import Typewriter from "typewriter-effect";

const Portfolio = () => {
  return (
    <section className="bg-sky-100 flex flex-col">
      <div className="sm:text-md md:text-lg lg:text-xl xl:text-2xl "
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "70%",
          height: "150px",
          zIndex: 3,
          marginBottom: "10px",
          marginTop: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          padding: "10px",
          borderRadius: "1rem",
          color: "#082F49",
        }}
      >
        <Typewriter
          options={{
            strings: [
              "Friends Without Benefits is a multiplayer scavenger hunt game that uses webcam object recognition with a custom TensorFlow model. It delivers real-time video feeds, chat, and competitive scoring.",
              "CAT-GPT (Tomogatch.ai) is a virtual pet application powered by GPT-based AI for interactive chat and pet evolution. It integrates robust databases to manage user accounts and in-app currency.",
              "Shadowtide Island (JS RPG V2) is a browser-based RPG built with TypeScript, Phaser, and Ink.js. It is being adapted into an immersive interactive storytelling experience based on the novel I am writing.",
              "GitHub README Generator is a Node.js CLI tool that dynamically creates polished README files from user prompts. It streamlines documentation with automated badge and content generation.",
              "Multi-Search Dashboard is a collaborative project that unifies multiple search engines into one interface. It integrates geolocation, weather, and image APIs to improve user experience.",
              "Gregging Algorithms JS implements and explains algorithm concepts in JavaScript. It serves as a practical exploration of data structures and computational problem-solving.",
            ],
            autoStart: true,
            loop: true,
            delay: 22,
            deleteSpeed: 10,
            pauseFor: 2500,
          }}
        />
      </div>

      <div className="alignment-class bg-sky-100 py-4">
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Portfolio;
