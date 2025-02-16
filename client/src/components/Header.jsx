import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-7xl px-8 py-2 flex flex-col justify-between md:flex-row sm-gap-x-8 sm:items-center md:py-8 md-gap-x-16">
        <h2 className="font-bold sm:text-2xl text-3xl my-2">
          <span className="text-sky-900">FULL-STACK </span> web-dev
        </h2>
        <Navbar />
      </div>
    </header>
  );
};
export default Header;
