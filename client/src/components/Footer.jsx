import { socials } from "../assets/data";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-sky-100 text-center w-full py-4 flex flex-row justify-center items-center align-center">
      <div className="flex gap-2 w-full py-2 flex flex-col justify-center items-center align-center">
        <ul className="flex flex-row gap-2 flex-wrap basis-3/4 mt-8 w-full py-4 flex flex-row justify-center items-center align-center">
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
        <p className="font-bold">© {year} Greg Barker</p>
      </div>
    </footer>
  );
};
export default Footer;
