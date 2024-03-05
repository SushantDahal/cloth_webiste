import HomeImage from "../assets/Homeimg.jpg";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  return (
    <div className="w-full h-auto mt-16 " id="Home">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-6 overflow-hidden">
        <div className=" mx-auto md:my-20 my-0 text-center  px-3 text-[black] font-bold md:py-8 py-2 md:mb-0 mb-8">
          <div className=" h-[100px] w-full uppercase md:text-5xl text-3xl ">
            <Typewriter
              words={[
                " Discover a World of Style",
                "Explore and Shop Diverse",
                " Collections Leading Brands",
              ]}
              loop={""}
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </div>
          <div className=" md:mt-6 mt-1 md:pt-2">
            <h1 className="text-[18px] md:text-xl">
              clothLand: Where Style Meets <br /> Adventure Threads & Trends
              Explore Cloth Land
            </h1>
          </div>
          <button className="w-[140px] bg-[red] text-white font-bold text-xl rounded-md py-1 mt-3">
            Shop Now
          </button>
        </div>
        <div className=" mx-2 md:py-8 py-2">
          <img src={HomeImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
