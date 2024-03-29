import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useStateValue } from "../../StateProvider";

const CartItem = ({ id, img, price, name }) => {
  const [{ basket }, dispatch] = useStateValue();
  const [isHovered, setIsHovered] = useState(false);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="flex my-4 py-2 mr-6 md:mr-0 gap-4 justify-between rounded-md border bg-[#f5e9e9] shadow-black shadow-md">
      <img src={img} alt="" className="max-w-[120px] max-h-[100px]  my-auto" />
      <div className="py-4 max-w-[25%] ">
        <h1 className="font-semibold md:text-xl  uppercase mt-5 ">{name}</h1>
      </div>
      <div className="py-4 flex items-center max-w-[50%] w-full justify-around">
        <h1 className="md:text-xl text-[14px] font-bold px-4">{price}</h1>
        <MdDelete
          className="lg:text-5xl md:text-3xl text-2xl cursor-pointer"
          onClick={removeFromBasket}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            color: isHovered ? "red" : "",
            transition: !isHovered ? "color o.3s" : "",
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
