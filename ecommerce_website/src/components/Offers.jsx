import OfferImg from "../assets/offerimg.png";
import { useState, useEffect } from "react";

const Offers = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  return (
    <div className="w-full bg-white" id="Offers">
      <h1 className="text-5xl text-[red] font-bold text-center mb-4 py-3">
        OFFERS
      </h1>
      <div className="max-w-[1240px] mx-auto h-[960px] md:h-[620px]">
        <div className="grid md:grid-cols-2 gap-4 h-[200px]">
          <div className="">
            <img src={OfferImg} alt="" />
          </div>
          <div className="bg-black flex flex-col px-4  items-center md:items-start">
            <h1 className="font-bold text-[red] pt-4 text-2xl md:mt-20 mt-8">
              PROMOTION
            </h1>
            <h1 className="text-5xl text-white font-extrabold py-3 text-center">
              Hurry up! 40% OFF
            </h1>
            <small className="font-bold  py-2 text-[red]">
              Thousands of high tech are waiting for you
            </small>

            <h2 className="font-semibold pt-4 text-white">Offer expires in:</h2>
            <div className="flex gap-2 font-bold">
              <div className="py-2">
                <h1 className="bg-white text-black py-2 px-3 ">2</h1>
                <small className="mx-1 text-[10px] text-white">days</small>
              </div>
              <div className="py-2">
                <h1 className="bg-white text-black py-2 px-3 ">{hours}</h1>
                <small className="mx-2 text-[10px] text-white">hours</small>
              </div>
              <div className="py-2">
                <h1 className="bg-white text-black py-2 px-3 ">{minutes}</h1>
                <small className="mx-1 text-[10px] text-white">minutes</small>
              </div>
              <div className="py-2">
                <h1 className="bg-white text-black py-2 px-3 ">{seconds}</h1>
                <small className="mx-1 text-[10px] text-white">seconds</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
