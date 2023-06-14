import Footer from "./Footer";

export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <div className="projects">
        <a
          href="https://tech-blog-2023-app.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="project1"
        >
          <div></div>
        </a>

        <a
          href="https://github.com/mjlynch123/Employee_Tracker"
          target="_blank"
          rel="noreferrer"
          className="project2"
        >
          <div></div>
        </a>

        <a
          href="https://mjlynch123.github.io/Landing_Page_FEM/"
          target="_blank"
          rel="noreferrer"
          className="project3"
        >
          <div></div>
        </a>

        <a
          href="https://mjlynch123.github.io/Advice_Generator/"
          target="_blank"
          rel="noreferrer"
          className="project4"
        >
          <div></div>
        </a>
      </div>

      <div className="btn">
        <a
          href="https://github.com/mjlynch123"
          className="more"
          target="_blank"
          rel="noreferrer"
        >
          Find more on my github!
        </a>
      </div>
      <Footer />
    </>
  );
}
