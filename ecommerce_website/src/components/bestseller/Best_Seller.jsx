import Bestseller_Card from "./Bestseller_Card";
import bestseller_data from "./bestseller_data";
import line from "../../assets/Line.png";

const Best_Seller = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto ">
        <h1 className="text-5xl text-center font-bold text-[red] py-3 mb-4">
          Best Seller
        </h1>
        <div className="grid md:grid-cols-3 mx-6 py-2 gap-8">
          {bestseller_data.map((arr) => {
            return (
              <Bestseller_Card
                key={arr.id}
                img={arr.img}
                name={arr.name}
                description={arr.description}
                price={arr.price}
              />
            );
          })}
        </div>
      </div>
      <img src={line} alt="" className="my-4 pt-4" />
    </div>
  );
};
export default Best_Seller;
