import Skill from "./Skill";
import { skills } from "../assets/data";

const Skills = () => {
  return (
    <section className="bg-sky-100">
      <h2 className="text-3xl alignment-class text-sky-950 py-4 font-bold tracking-widest">
        My Development Toolkit
      </h2>

      <div className="alignment-class bg-sky-100 py-4">
        {skills.map((skill) => {
          return <Skill key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
