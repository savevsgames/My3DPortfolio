import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const currentPage = useLocation().pathname;
  return (
    <nav className="flex gap-3">
      <ul className="flex flex-row gap-4 text-sky-950 font-bold">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            About Me
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={
              currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={
              currentPage === "/Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={
              currentPage === "/Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
