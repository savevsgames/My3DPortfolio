import { motion } from "motion/react";

// Child variants for each Skill
const childVariants = {
  hidden: {
    y: 100,
    opacity: 0,
    scale: 0.9,
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Skill = (skill) => {
  const { id, title, icon2, text } = skill;
  return (
    <motion.article
      // Each Skill uses the child variants
      variants={childVariants}
      style={{ zIndex: "3" }}
      className="border-slate-500 border-2 rounded-xl p-4 bg-white hover:bg-slate-200 shadow-xl flex flex-row justify-start items-center gap-4"
    >
      <div className="flex flex-col items-center">
        <span>{icon2}</span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </motion.article>
  );
};

export default Skill;
