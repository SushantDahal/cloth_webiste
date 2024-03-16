import Logo from "../assets/Logo.png";
import Sushant from "../assets/sushant .jpeg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoPencil } from "react-icons/go";
import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { BsShop } from "react-icons/bs";
import { GiFlowerPot } from "react-icons/gi";

const Dashboard = () => {
  const [profile, setProfile] = useState(false);
  function HandleProfile() {
    setProfile(!profile);
  }
  return (
    <div className="w-full bg-white h-full ">
      <div className="flex justify-between mx-10 py-4 rounded-md">
        <div>
          <img src={Logo} alt="/" className="max-w-[190px] rounded-l-lg" />
        </div>

        <div
          className={
            !profile
              ? "sm:flex hidden   ease-out  items-center gap-4 duration-700  "
              : "items-center gap-4 flex-col absolute top-1 right-8  flex mr-4 ease-in duration-700 bg-red-200"
          }
        >
          <button className="w-[90px] bg-[red] rounded-md py-1">Create</button>
          <IoMdNotificationsOutline size={30} />
          <GoPencil size={30} />
          <img
            src={Sushant}
            alt=""
            className="w-[40px] rounded-[100%] object-cover h-[40px]"
          />
        </div>
        <MdArrowBackIos
          onClick={HandleProfile}
          size={35}
          className="sm:hidden flex justify-end absolute top-6 right-1"
        />
      </div>

      {/*  */}
      <div className="flex">
        <div className="bg-red-500 w-1/5 h-screen">
          <div className="flex flex-col items-center justify-center pt-10">
            <ul className="w-full">
              <li className="flex px-10 py-6 cursor-pointer hover:bg-gray-200">
                <IoHomeOutline className="mx-2 size-8" />
                <span className="text-xl">Home</span>
              </li>
              <li className="flex px-10 py-6 cursor-pointer hover:bg-gray-200">
                <MdProductionQuantityLimits className="mx-2 size-8" />
                <span className="text-xl">Products</span>
              </li>
              <li className="flex px-10 py-6 cursor-pointer hover:bg-gray-200">
                <FaPeopleRoof className="mx-2 size-8" />
                <span className="text-xl">Customers</span>
              </li>
              <li className="flex px-10 py-6 cursor-pointer hover:bg-gray-200">
                <BsShop className="mx-2 size-8" />
                <span className="text-xl">Shop</span>
              </li>
              <li className="flex px-10 py-6 cursor-pointer hover:bg-gray-200">
                <GiFlowerPot className="mx-2 size-8" />
                <span className="text-xl">Income</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Dashboard */}
        <div className=" mx-2 w-[75%] px-4 bg-[#bdbbbb]">
          <h1 className="text-3xl my-4 mx-4 text-[red] font-bold">DASHBOARD</h1>
          <div className="w-[80%] bg-white px-4 py-2">
            <div className="flex justify-between  ">
              <h1 className="text-xl font-bold ">Overview</h1>
              <select className="bg-[#bdbbbb] py-3 px-4 outline-none rounded-md">
                <option>All Time</option>
                <option>This Month</option>
                <option>Last 3 Month</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;