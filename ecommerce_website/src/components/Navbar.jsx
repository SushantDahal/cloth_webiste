import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="w-full  h-18 sticky  top-[-12px]">
      <div className="w-[1240px] mx-auto bg-white flex justify-between items-center py-1 ">
        <img src={Logo} className="w-[200px] md" alt="" />
        <div className="">
          <ul className="flex mr-10 font-bold cursor-pointer">
            <li className="mx-6 text-xl  px-4 rounded-md">Home</li>
            <li className="mx-6 text-xl  px-4 rounded-md">Offers</li>
            <li className="mx-6 text-xl  px-4 rounded-md">Sign In</li>
            <li className="mx-6 text-xl  px-4 rounded-md">Sign Up</li>
          </ul>
        </div>
      </div>
      <div className="bg-black text-center text-white font-bold">
        <h1>
          "Unlock Your Style Potential! Enjoy 15% off Your First Purchase!"
        </h1>
      </div>
    </div>
  );
};
export default Navbar;
