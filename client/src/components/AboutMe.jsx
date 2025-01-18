import AboutCard from "./AboutCard";
import { about } from "../assets/data";

const AboutMe = () => {
  return (
    <section className="bg-sky-100 mx-4">
      <div className="mx-auto max-w-7xl flex flex-col gap-6 mt-8">
        <h3 className="text-3xl text-sky-950 py-4 font-bold tracking-widest mr-auto border-2 border-slate-500 px-8 rounded-xl bg-white shadow-xl">
          About Me
        </h3>
        <article className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
          {about.map((aboutInfo) => {
            return <AboutCard key={aboutInfo.id} {...aboutInfo} />;
          })}
        </article>
      </div>
    </section>
  );
};
export default AboutMe;
