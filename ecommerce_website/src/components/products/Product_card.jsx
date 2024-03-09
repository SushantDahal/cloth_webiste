const Product_Card = (props) => {
  return (
    <div className="bg-white shadow-black shadow-xl">
      <img
        src={props.img}
        alt=""
        className="max-w-[300px] w-full mx-auto max-h-[200px] object-fill"
      />
      <div className="mx-4 font-bold ">
        <p className="font-bold">{props.name}</p>
        <div className="flex">
          <h1 className="mr-4">{props.price}</h1>
          <p className="line-through ">{props.cutPrice}</p>
        </div>
      </div>
      <div className="w-full bg-[red] cursor-pointer text-center font-bold text-white py-1   hover:bg-black duration-300">
        Add to Cart
      </div>
    </div>
  );
};
export default Product_Card;
