import { FaFileDownload } from "react-icons/fa";
import { saveAs } from "file-saver";

const Downloadable = () => {
  const handleDownload = () => {
    saveAs(
      "/resume/Greg_Barker-Resume_2025.pdf",
      "Greg_Barker-Resume_2025.pdf"
    );
  };

  return (
    <div className="alignment-class h-100 flex flex-col bg-sky-100">
      
      <section className="border-2 border-slate-500 p-4 rounded-xl w-full bg-white shadow-xl hover:bg-slate-200 flex flex-row justify-between items-center">
        <h3 className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold tracking-wide p-4">
          Download Resume
        </h3>
        <p className="flex flex-row gap-4 justify-start items-center font-semibold text-lg border-2 p-4 bg-sky-100 border-slate-500 rounded-xl">
          <span className="sm:text-sm md:text-md lg:text-lg">Download my resume here:</span>
          <button
            className="flex flex-row gap-2 border-2 p-4 bg-white border-slate-500 rounded-xl items-center sm:text-sm md:text-md lg:text-lg xl:text-xl font-bold" 
            onClick={handleDownload}
          >
            {" "}
            Greg Barker&apos;s Resume
            <span>
              <FaFileDownload className="w-8 h-8 text-sky-950" />
            </span>
          </button>
        </p>
      </section>
    </div>
  );
};
export default Downloadable;
