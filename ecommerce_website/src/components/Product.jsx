import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useStateValue } from "../StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        title: title,
        rating: rating,
      },
    });
  };
  return (
    <div>
      <div className="product mx-2 myb-5 pt-4 px-4  bg-white z-1">
        <div className="product_info text-center ">
          <p className="text-xs py-2">{title}</p>
          <small>$</small>
          <strong>{price}</strong>
          <div className="flex py-2 justify-center">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <AiFillStar className="text-[yellow] " />
              ))}
          </div>
          <div className="flex flex-col items-center  ">
            <img
              src={image}
              alt=""
              className="max-h-[230px] mx-auto w-[100%] object-contain"
            />
            <button
              onClick={addToBasket}
              className="bg-yellow-700 w-[150px] my-2 border-black border-2 hover:text-white duration-200"
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
