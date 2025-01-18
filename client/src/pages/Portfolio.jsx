import { projects } from "../assets/data";
import Project from "../components/Project";

const Portfolio = () => {
  return (
    <section className="bg-sky-100 flex flex-col">
      <h2 className="text-3xl alignment-class text-sky-950 py-4 font-bold tracking-widest">
        Some of My Projects
      </h2>

      <div className="alignment-class bg-sky-100 py-4">
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Portfolio;
