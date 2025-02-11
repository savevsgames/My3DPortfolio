const Skill = (skill) => {
  const { id, title, icon2, text } = skill;
  return (
    <article
      key={id}
      className="border-slate-500 border-2 rounded-xl p-4 bg-white hover:bg-slate-200 shadow-xl flex flex-row justify-start items-center gap-4"
    >
      <div className="flex flex-col items-center">
        <span>{icon2}</span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </article>
  );
};
export default Skill;
