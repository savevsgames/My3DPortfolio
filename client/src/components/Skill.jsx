const Skill = (skill) => {
  const { id, title, icon2, text } = skill;
  return (
    <article
      key={id}
      className="border-slate-500 border-2 rounded-xl p-4 bg-white hover:bg-slate-200 shadow-xl"
    >
      <span>{icon2}</span>
      <h3 className="text-xl font-bold">{title}</h3>

      <p>{text}</p>
    </article>
  );
};
export default Skill;
