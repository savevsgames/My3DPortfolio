const Project = (project) => {
  const { id, img, url, github, title, text } = project;
  console.log(img);

  return (
    <article
      id="projects-div"
      style={{
        position: "relative",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: "2",
        flexBasis: "auto",
        minHeight: "700px",
        borderRadius: "0.5rem",
        border: "3px solid #082F49",
        boxShadow: "0 0 10px 5px rgba(8, 47, 73, 0.5)",
      }}
      key={id}
      className="border-slate-500 border-2 rounded-xl p-4 bg-white shadow-xl hover:bg-slate-200"
    >
      <div
        id={id}
        style={{
          position: "absolute",
          borderRadius: "0.5rem",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(256, 256, 256, 0.9)",
          zIndex: "-1",
        }}
      ></div>

      <img
        src={img}
        alt={title}
        className="border-slate-500 border-2 rounded-xl my-4 p-4 mx-auto"
        style={{ width: "80%", height: "auto" }}
      />
      <h3
        className="text-2xl font-bold underline-offset-1 underline text-center my-2"
        style={{ color: "#082F49" }}
      >
        {title}
      </h3>

      <div
        style={{
          backgroundColor: "#DFF2FE",
          border: "2px solid",
          borderRadius: "0.5rem",
          color: "#082F49",
          boxShadow: "0 0 2px 2px rgba(8, 47, 73, 0.5)",
        }}
      >
        <p className="p-2 text-wrap">
          <span className="font-bold text-wrap">GitHub:</span>{" "}
          <a
            className="text-wrap hover:bg-slate-500 hover:text-sky-100 p-1 rounded-md"
            href={github}
          >
            {github.substring(0, 30)}...
          </a>
        </p>
        <p className="p-2">
          <span className="font-bold text-wrap">Deployed Project:</span>{" "}
          <a
            href={url}
            className="hover:bg-slate-500 hover:text-sky-100 p-1 rounded-md"
          >
            {url.substring(0, 40)}...
          </a>
        </p>
        <p className="p-2 text-wrap">
          <span className="font-bold text-wrap">About:</span> {text}
        </p>
      </div>
    </article>
  );
};
export default Project;
