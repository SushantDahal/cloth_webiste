import { IoIosArrowBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import image1 from "../../assets/product1.webp";
import { useState } from "react";
const AddTocart = () => {
  const [isHovered, setIsHovered] = useState(false);
  const item = 3;
  const price = 2000;
  return (
    <div className="w-full bg-white ">
      <div className="max-w-[1240px] mx-auto  p-10">
        <h1 className="md:text-3xl text-xl font-bold flex items-center pr-4">
          <IoIosArrowBack />
          Shopping continue
        </h1>
        <hr className="h-[3px] my-6 bg-[#9e9a9a] max-w-[760px]" />
        <div className="grid md:grid-cols-3 gap-14 px-4">
          <div className=" col-span-2 p-2  ">
            <div className="bg-white font-[600] ">
              <h1>Shopping cart</h1>
              <small className="bg-red-100 font-mono">
                You have {item} item in your cart
              </small>
            </div>
            {/* cart card */}
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
          <div className="bg-red-800 col-span-1 max-h-[460px] min-h-[460px]">
            cart
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddTocart;
