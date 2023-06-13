export default function About() {
  return (
    <>
      <div className="avatar">
        <img
          src="https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png"
          alt="avatar"
        />
      </div>
      <div className="intro">
        <h1>Welcome To My Portfolio</h1>
        <p>
          Hello there! My name is Martin Lynch, I am a full stack web developer
          from Northern Illinois. At the age of 13 I fell in love with the art
          of coding and like many who are starting out I started with HTML and
          CSS. I perfected this skill but I gave it up to join the U.S. Army
          where I spent 6 month in Fort Leonardwood, Missouri for basic training
          and then spent 3 week in Fort Benning, Georgia where I went through
          Basic Airborne Training. After that I was stationed in Fort Bragg,
          North Carolina for just over year before I was medically retired. Upon
          exit of the Military, I began picking up where I left off years prior.
          Not only did I get better at web design, I also found a love for
          Python where I spent months working on Machine Learning algorithms and
          other personal projects.
        </p>
        <a
          href="https://www.linkedin.com/in/martin-lynch-838976123/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://github.com/mjlynch123"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-github"></i>
        </a>

        <a
          href="https://codepen.io/mjlynch123"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-codepen"></i>
        </a>
      </div>
    </>
  );
}
