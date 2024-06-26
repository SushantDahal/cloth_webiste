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
import { Link } from "react-router-dom";

import { Spiral as Hamburger } from "hamburger-react";

const Dashboard = () => {
  var income = 120000;
  var customers = 120;
  const [profile, setProfile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  function HandleProfile() {
    setProfile(!profile);
  }
  function HandleSidebar() {
    setSidebar(!sidebar);
  }
  return (
    <div className="w-full bg-white h-full ">
      <div className="flex justify-between mx-10 py-4 rounded-md">
        <Link to="/">
          <img src={Logo} alt="/" className="max-w-[190px] rounded-l-lg" />
        </Link>
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

      {/*  sidebar*/}
      <div className="flex">
        <div
          className={
            !sidebar
              ? "bg-[#f8f3f3] lg:w-1/5 w-0 h-screen duration-200"
              : "min-w-1/5 bg-[#bb2626ce]  h-screen duration-200"
          }
        >
          <div className="flex flex-col items-center justify-center pt-10">
            <ul className="w-full">
              <Link to="/">
                <li className="flex px-10 py-6 cursor-pointer hover:bg-gray-200">
                  <IoHomeOutline className="mx-2 size-8" />
                  <span className="text-xl">Home</span>
                </li>
              </Link>
              <Link to="/AddToProduct">
                <li className="flex px-10 py-6 cursor-pointer hover:bg-gray-200">
                  <MdProductionQuantityLimits className="mx-2 size-8" />
                  <span className="text-xl">Products</span>
                </li>
              </Link>
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
        <div className=" absolute lg:hidden py-2">
          <Hamburger
            size={30}
            toggled={sidebar}
            toggle={setSidebar}
            className="text-black"
          />
        </div>
        {/* Dashboard */}
        <div className=" mx-2 w-[100%] min-w-[300px] px-4 bg-[#e8e1e1]">
          <h1 className="text-3xl my-4 ml-8 text-[red] font-bold">Dashboard</h1>
          <div className="md:w-[80%] w-full bg-white px-4 py-2">
            <div className="">
              <div className="flex justify-between  ">
                <h1 className="text-xl font-bold ml-4 ">Overview</h1>
                <select className="bg-[#bdbbbb] py-3 md:px-4 sm:px-2 px-0 outline-none rounded-md">
                  <option>All Time</option>
                  <option>This Month</option>
                  <option>Last 3 Month</option>
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 w-full font-bold gap-10 bg-[#e6e4e4] pr-10 px-2 mt-8 py-2">
              <div className="bg-white  px-10 py-6 rounded-md">
                <h1 className="text-2xl">Customers</h1>
                <h2 className="text-xl py-1">{customers}</h2>
              </div>
              <div className=" px-10 py-6 rounded-md">
                <h1 className="text-2xl">Income</h1>
                <h2 className="text-xl py-1">NPR {income}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
