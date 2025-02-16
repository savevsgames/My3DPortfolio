import Wave from "./Wave";
import Skills from "../components/Skills";
import Typewriter from "typewriter-effect";

const WaveBounds = () => {
  return (
    <div style={{ position: "relative", top: "0px", left: "0px" }}>
      <Wave />
      <div
        className="sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold text-center sm:h-60 md:h-48 lg:h-36 xl:h-36"
        style={{
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          top: "20px",
          width: "70%",
          zIndex: 3,
          margin: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          padding: "20px",
          borderRadius: "1rem",
          color: "#082F49",
        }}
      >
        <Typewriter
          options={{
            strings: [
              "Versatile full-stack development expertise integrating React, Next.js, Node.js, and AI-driven tools produces dynamic, scalable web solutions for e-commerce and digital marketing.",
              "Advanced frontend proficiency with JavaScript, TypeScript, HTML, CSS, Tailwind CSS, and Three.js creates immersive, interactive user experiences.",
              "Robust backend skills in Node.js, Python, Flask, and Express.js support the development of secure, efficient systems for modern applications.",
              "Comprehensive DevOps and CI/CD knowledge using Docker, GitHub Actions, AWS, and Azure ensures streamlined deployments and continuous integration.",
              "Proven project success—including innovative e-commerce sites, interactive 3D portfolios, and AI-powered chat applications—demonstrates the ability to merge creative design with technical excellence.",
            ],
            autoStart: true,
            loop: true,
            delay: 22,
            deleteSpeed: 10,
          }}
        />
      </div>
      <Skills />
    </div>
  );
};
export default WaveBounds;
