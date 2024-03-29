import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Payment from "./Payment";
import CartItem from "./CartItem";
import { useStateValue } from "../../StateProvider";

const AddToCart = () => {
  const [{ basket }] = useStateValue();
  const itemCount = basket.length;

  return (
    <div className="w-full bg-white ">
      <div className="max-w-[1240px] mx-auto p-10">
        <div className="flex items-center justify-between mx-4">
          <Link to="/Products">
            <h1 className="md:text-3xl text-xl font-bold flex items-center pr-4">
              <IoIosArrowBack />
              Shopping continue
            </h1>
          </Link>
          <div className="flex mx-4 item_basket">
            <FaCartShopping className="mx-2" size={30} />
            <span className="text-xl">{itemCount}</span>
          </div>
        </div>
        <hr className="h-[3px] my-6 bg-[#9e9a9a] w-full" />
        <div className="grid md:grid-cols-3 gap-14 pr-6">
          <div className="lg:col-span-2 p-2 col-span-3">
            <div className="bg-white font-[600] ">
              <h1>Shopping cart</h1>
              <small className="font-mono">
                You have {itemCount} items in your cart
              </small>
            </div>
            {basket.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                img={item.img}
                price={item.price}
                name={item.name}
              />
            ))}
          </div>
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
