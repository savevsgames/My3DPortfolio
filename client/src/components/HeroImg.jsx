import { hero } from "../assets/data";
import PortalEntry from "./PortalEntry";

const HeroImg = () => {
  return (
    <div className="bg-sky-100 mx-4 my-4" >
      <div className="flex items-center justify-around">
        <article className="my-4 border-2 border-black border-opacity-50 rounded-xl shadow-black shadow-xl">
          <PortalEntry />
        </article>
        <article className="flex items-center justify-center">
          <img
            src={hero.img}
            alt="Web Developer Station"
            className="rounded-xl shadow-black shadow-xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm my-8"
          />
        </article>
      </div>
    </div>
  );
};
export default HeroImg;
