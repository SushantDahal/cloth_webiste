import { useStateValue } from "../../StateProvider";
const Product_Card = ({ id, img, price, name, cutPrice }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        img: img,
        name: name,
        price: price,
        cutPrice: cutPrice,
      },
    });
  };
  return (
    <div className="bg-white shadow-black shadow-xl">
      <img
        src={img}
        alt=""
        className="max-w-[300px] w-full mx-auto max-h-[200px] object-fill"
      />
      <div className="mx-4 font-bold ">
        <p className="font-bold">{name}</p>
        <div className="flex">
          <h1 className="mr-4">{price}</h1>
          <p className="line-through ">{cutPrice}</p>
        </div>
      </div>
      <div
        className="w-full bg-[red] cursor-pointer text-center font-bold text-white py-1   hover:bg-black duration-300"
        onClick={addToBasket}
      >
        Add to Cart
      </div>
    </div>
  );
};
export default Product_Card;
