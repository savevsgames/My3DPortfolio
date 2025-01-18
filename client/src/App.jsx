import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="bg-sky-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default App;
