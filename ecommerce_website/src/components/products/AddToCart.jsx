import { IoIosArrowBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import image1 from "../../assets/product1.webp";
import esewa from "../../assets/esewa.jpeg";
import khalti from "../../assets/khalti.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";
const AddTocart = () => {
  const shippingPrice = 3000;
  const vat = 300;
  const subTotal = 2700;
  const [isHovered, setIsHovered] = useState(false);
  const item = 3;
  const price = 2000;
  return (
    <div className="w-full bg-white ">
      <div className="max-w-[1240px] mx-auto  p-10">
        <Link to="/Products">
          <h1 className="md:text-3xl text-xl font-bold flex items-center pr-4">
            <IoIosArrowBack />
            Shopping continue
          </h1>
        </Link>
        <hr className="h-[3px] my-6 bg-[#9e9a9a] w-full" />
        <div className="grid md:grid-cols-3 gap-14 pr-6">
          {/* cart card */}
          <div className=" lg:col-span-2 p-2 col-span-3  ">
            <div className="bg-white font-[600] ">
              <h1>Shopping cart</h1>
              <small className=" font-mono">
                You have {item} item in your cart
              </small>
            </div>

            <div className="flex my-4 py-2 mr-6 md:mr-0 gap-4 justify-between rounded-md border bg-[#f5e9e9] shadow-black shadow-md">
              <img
                src={image1}
                alt=""
                className="max-w-[120px] max-h-[100px]  my-auto"
              />
              <div className="py-4 max-w-[25%] ">
                <h1 className="font-semibold md:text-[16px] text-[12px] pb-2 ">
                  Printing Tshirt
                </h1>
                <p className="md:text-[13px] text-[11px]">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="py-4 flex items-center max-w-[50%] w-full justify-around">
                <h1 className="md:text-xl text-[14px] font-bold px-4">
                  NPR{price}
                </h1>
                <MdDelete
                  className="lg:text-5xl md:text-3xl text-2xl"
                  onClick={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    color: isHovered ? "red" : "",
                    transition: !isHovered ? "color 1s" : "",
                  }}
                />
              </div>
            </div>

            {/* end */}
          </div>
          <div className="bg-[#565ABB] lg:col-span-1 col-span-3 mx-auto   max-h-[460px] min-h-[460px] p-4 rounded-3xl text-white  shadow-[#1b1a1a] shadow-xl">
            <h1 className="text-2xl font-bold">Card Details</h1>
            <h2 className="pt-2  pb-3 text-[16px]">Payment Type</h2>
            {/* esewa img */}
            <div className=" grid grid-cols-3 gap-4">
              <div>
                <img
                  src={esewa}
                  alt=""
                  className="w-20 h-10 rounded-md object-cover"
                />
              </div>
              <div>
                <img
                  src={khalti}
                  alt=""
                  className="w-20 h-10 rounded-md object-fill"
                />
              </div>
              <div className="text-center bg-[#7f82e2] text-white font-bold rounded-md hover:bg-[#bfc1f7] cursor-pointer">
                <h1 className="py-2 ">see all</h1>
              </div>
            </div>
            {/* esewa img end*/}
            {/* Id section */}
            <div className="mt-6 ">
              <div>
                <label htmlFor="" className="text-[15px] ">
                  ID
                </label>
                <input
                  type="text"
                  className="w-full py-1 px-2 bg-transparent outline-none border rounded-md my-1"
                  placeholder="Enter Id"
                />
              </div>
              <div className="my-3">
                <label htmlFor="" className="text-[15px]">
                  PIN
                </label>
                <input
                  type="text"
                  maxLength={4}
                  className="w-full py-1 px-2 bg-transparent outline-none border rounded-md "
                  placeholder="Pin"
                />
              </div>
            </div>
            {/* id section end */}
            {/* Subtotal section */}
            <div className=" mt-10 px-4">
              <div className="flex justify-between">
                <h1>Shipping</h1>
                <p>NPR {shippingPrice}</p>
              </div>
              <div className="flex justify-between my-1">
                <h1>Total (Tax incl.)</h1>
                <p>NPR {vat}</p>
              </div>
              <hr className="w-full h-[1px]" />
              <div className="flex justify-between pt-2">
                <h1>Subtotal</h1>
                <p>NPR {subTotal}</p>
              </div>
            </div>

            {/* Subtotal section end*/}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddTocart;
