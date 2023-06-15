import Footer from "./Footer";

// Exporting the function that holds resume section
export default function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <div className="resume"></div>

      <div className="resume-btn">
        <a
          href="https://drive.google.com/file/d/1aqiAZWZh398m4vjnPp4ESwzkAs0W5LBa/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="resume-link"
        >
          Resume
        </a>
      </div>
      <Footer />
    </>
  );
}
