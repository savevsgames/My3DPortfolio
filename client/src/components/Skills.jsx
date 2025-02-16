import { motion } from "motion/react";
import Skill from "./Skill";
import { skills } from "../assets/data";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // time
      when: "beforeChildren"
    },
  },
};

const Skills = () => {
  return (
    <section className="bg-sky-100" > 

      {/* Parent motion container */}
      <motion.div
        className="alignment-class bg-sky-100 py-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"        
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill) => {
          return <Skill key={skill.id} {...skill} />;
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
