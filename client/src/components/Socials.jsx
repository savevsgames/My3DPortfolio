import { socials } from "../assets/data";

const Socials = () => {
  return (
    <div className="flex gap-4 mt-8">
      <ul className="flex flex-row gap-2 flex-wrap basis-3/4 mt-8">
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
  );
};
export default Socials;
