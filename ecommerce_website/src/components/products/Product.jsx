import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import Product_Card from "./Product_card";
import product_data from "./product_data";
import { FaCartShopping } from "react-icons/fa6";

const product = () => {
  return (
    <div className="w-full bg-white">
      <Link to="/">
        <img src={Logo} alt="" className="mx-auto px-5  py-2 w-[200px] " />
      </Link>
      <div className="max-w-[1240px] bg-blue-200 mx-auto">
        <div className="flex justify-between items-center px-4">
          <h1 className="bg-red text-4xl font-bold text-[red] py-3 pb-6 px-4 ">
            Available Products
          </h1>
          <Link to="/Addtocart">
            <div className=" flex  mx-4  item_basket">
              <FaCartShopping className="mx-2 " size={30} />
              <span className="text-xl">0</span>
            </div>
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-8 py-4 mx-4 ">
          {product_data.map((arr) => {
            return (
              <Product_Card
                key={arr.id}
                img={arr.img}
                name={arr.name}
                cutPrice={arr.cutPrice}
                price={arr.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default product;
