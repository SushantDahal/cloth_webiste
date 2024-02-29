import line from "../assets/Line.png";
const Newsletter = () => {
  return (
    <div className="w-full  ">
      <img src={line} alt="" className="w-full" />
      <h1 className="text-5xl text-center font-bold text-[red] py-3 mb-6">
        Newsletter
      </h1>
      <div className="flex flex-col items-center bg-black text-white">
        <div className="bg-red">
          <h1 className="font-[1000] text-5xl md:text-3xl mx-2 pt-10  text-center leading-[70px] tracking-wide">
            JOIN SHOPPING COMMUNITY TO GET <br />
            MONTHLY PROMO
          </h1>
          <p className="pt-6 pb-3 text-center text-xl tracking-wider">
            Type your email down below and be young wild generation
          </p>
        </div>
        <div className="bg-white text-black flex my-4 min-w-[30%] justify-between py-1 rounded-sm mb-8">
          <input
            type="text"
            placeholder="Add your email Here"
            className=" py-2 mx-2 w-[80%] outline-none text-xl px-2"
          />
          <button className="w-[130px] bg-black text-[red] text-xl font-bold  mr-2 rounded-md hover:bg-[#222121]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
