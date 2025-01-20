import { hero } from "../assets/data";
import PortalEntry from "./PortalEntry";
import { socials } from "../assets/data";

const HeroImg = () => {
  return (
    <div className="bg-sky-100 mx-4 mt-4">
      <div className="flex items-center justify-around flex-row flex-nowrap">
        <article className="my-4 border-2 border-black border-opacity-50 rounded-xl shadow-black shadow-xl">
          <PortalEntry />
        </article>
        <article className="flex items-center justify-center flex-col">
          <img
            src={hero.img}
            alt="Web Developer Station"
            className="w-[15vw] h-auto sm:w-[15vw] sm:h-auto lg:w-[20vw] 2xl:w-[20vw] flex items-center justify-center border-2 border-black border-opacity-50 rounded-xl shadow-black shadow-xl"
          />
          <div className="flex gap-2 w-full py-2 xs:flex-col s:flex-col md:flex-row justify-center items-center align-center">
            <ul className="flex xs:flex-col gap-2 flex-wrap basis-3/4 mt-8 w-full py-4 md:flex-row justify-center items-center align-center">
              {socials.map((social) => {
                const { id, icon } = social;
                return (
                  <a href={social.url} key={id} className="text-sky-900">
                    <li key={id} className="text-sky-900">
                      <span>{icon}</span>
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};
export default HeroImg;
