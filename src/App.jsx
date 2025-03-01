import NavBar from "./components/NavBar";
import Pfp from "./assets/pic.png";
import Icons from "./components/Icons";
import { AiOutlineCaretRight } from "react-icons/ai";
import ImageSlider from "./components/ImageSlider";
function App() {
  const iconLogo = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
    },
    {
      src: "https://play-lh.googleusercontent.com/ekpyJiZppMBBxCR5hva9Zz1pr3MYlFP-vWTYR3eIU7HOMAmg3jCJengHJ1GFgFMyyYc",
      alt: "Flask",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      alt: "Python",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
      alt: "Bootstrap",
    },
    {
      src: "https://www.svgrepo.com/show/374118/tailwind.svg",
      alt: "Tailwind CSS",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
      alt: "Flutter",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      alt: "HTML5",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      alt: "CSS3",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      alt: "PHP",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      alt: "C++",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      alt: "C#",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      alt: "MySQL",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      alt: "Express.js",
    },
  ];

  return (
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto">
        {/* Navigation bar */}
        <NavBar />

        {/* Head section */}
        <section className="flex flex-row gap-10 my-30 mx-11">
          <h1 className=" text-8xl [writing-mode:sideways-lr] font-primary text-center font-black">
            PORTFOLIO
          </h1>
          <img src={Pfp} alt="Profile" className="h-[600px]" />
          <div className="flex flex-col">
            <div className="my-auto text-black text-start justify-center item-center">
              <h1 className="text-6xl font-light">Hi There!👋 I am</h1>
              <h1 className="text-9xl font-black">Denzel Quilatan</h1>
              <h1 className="text-3xl text-red-500 font-bold pt-10">
                ASPIRING WEB DEVELOPER
              </h1>
              <h1 className="text-2xl text-black text-justify mr-20 pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </h1>
            </div>
          </div>
        </section>
      </div>
      {/* <hr className="border-2 border-black w-full" /> */}
      <section className="bg-zinc-800">
        {/* About me section */}
        <div className="flex flex-row justify-between gap-10 container mx-auto items-center text-white">
          <div className="flex flex-col gap-2 flex-1">
            <h1 className="text-7xl font-black font-primary mb-10 ">
              ABOUT ME
            </h1>
            <div className="text-xl text-justify">
              <p>
                I’m a <strong>Full-Stack Developer</strong> specializing in
                building dynamic, responsive, and user-friendly web
                applications. My main focus is on the <strong>MERN</strong>{" "}
                stack{" "}
                <strong>(MongoDB, Express.js, React.js, and Node.js)</strong>{" "}
                but I’m always exploring new technologies to expand my skill
                set.
              </p>
              <p className="pt-5">
                Ever since I wrote my first line of code, I’ve been{" "}
                <strong>captivated </strong>
                by the way programming allows me to solve real-world problems
                through <strong>creativity</strong> and <strong>logic.</strong>{" "}
                Over the years, I’ve honed my skills, turning ideas into fully
                functional digital products.
              </p>
            </div>
          </div>

          <div className="my-10 h-[500px] min-h-[1em] w-0.5 bg-white"></div>
          <div className="flex flex-col text-xl text-center">
            <h3 className="text-5xl mb-10 font-bold">EXPERIENCE</h3>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-5">
                <AiOutlineCaretRight color="red" size={30} />
                <div>
                  <b>2023</b> SPECIAL PROGRAM FOR EMPLOYMENT OF STUDENTS (SPES)
                  <ul className="text-left">
                    <li> - Web Developer</li>
                    <li> - City Government of Naga</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <AiOutlineCaretRight color="red" size={30} />
                <div>
                  <b>2023</b> SPECIAL PROGRAM FOR EMPLOYMENT OF STUDENTS (SPES)
                  <ul className="text-left">
                    <li> - Web Developer</li>
                    <li> - City Government of Naga</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-center text-white mb-10">
          SKILL SET
        </h1>
        <Icons icons={iconLogo} />
        <ImageSlider />
      </section>
    </div>
  );
}

export default App;
