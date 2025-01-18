const Project = (project) => {
  const { id, img, url, github, title, text } = project;
  console.log(img);

  const removeBackgroundImage = (e) => {
    const target = e.target;
    target.style.backgroundColor = "rgba(256, 256, 256, 1.0)";
  };

  const restoreBackgroundImage = (e) => {
    const target = e.target;
    target.style.backgroundColor = "rgba(256, 256, 256, 0.9)";
  };

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
      }}
      key={id}
      className="border-slate-500 border-2 rounded-xl p-4 bg-white shadow-xl hover:bg-slate-200"
    >
      <div
        id={id}
        onMouseEnter={removeBackgroundImage}
        onMouseLeave={restoreBackgroundImage}
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
      <h3 className="text-xl font-bold text-wrap">{title}</h3>

      <img
        src={img}
        alt={title}
        className="border-slate-500 border-2 rounded-xl my-4 mx-auto w-3/5"
      />
      <p className="p-2 text-wrap">
        <span className="font-bold text-wrap">GitHub:</span>{" "}
        <a className="text-wrap" href={github}>
          {github.substring(0, 30)}...
        </a>
      </p>
      <p className="p-2">
        <span className="font-bold text-wrap">Deployed Project:</span>{" "}
        <a href={url}>{url.substring(0, 30)}...</a>
      </p>
      <p className="p-2 text-wrap">
        <span className="font-bold text-wrap">About:</span> {text}
      </p>
    </article>
  );
};
export default Project;
