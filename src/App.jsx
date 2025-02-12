import NavBar from "./components/NavBar";
import Pfp from "./assets/pic.png";

function App() {
  return (
    <div className="h-screen bg-primary">
      <div className="container mx-auto">
        {/* Navigation bar */}
        <NavBar />
        {/* Main content */}
        <div className="flex flex-row gap-10 my-30 mx-11">
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
        </div>
        <hr className="w-full" />
      </div>

      {/* footer */}
    </div>
  );
}

export default App;
