import HomeImage from "../assets/Homeimg.jpg";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  return (
    <div className="w-full h-auto mt-16 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-6 overflow-hidden">
        <div className=" mx-auto my-20 text-center text-5xl text-[black] font-bold py-8">
          <div className=" h-[100px] w-full uppercase">
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
          <div className=" mt-6 pt-2">
            <h1 className="text-xl">
              clothLand: Where Style Meets <br /> Adventure Threads & Trends
              Explore Cloth Land clothLand: Where Style Meets <br /> Adventure
              Threads & Trends Explore Cloth Land
            </h1>
          </div>
          <button className="w-[140px] bg-[red] text-white font-bold text-xl rounded-md py-1">
            Shop Now
          </button>
        </div>
        <div className=" mx-2 py-8">
          <img src={HomeImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
