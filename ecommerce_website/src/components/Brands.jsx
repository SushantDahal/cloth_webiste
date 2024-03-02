import Adidas from "../assets/Adidas.jpg";
import Nike from "../assets/nike.png";
import Solos from "../assets/solos.webp";
import Huba from "../assets/huba.png";
import Kasa from "../assets/kasa.png";
import line from "../assets/Line.png";
const Brands = () => {
  return (
    <div>
      <div className="w-full bg-black">
        <div className="md:grid md:grid-cols-5 gap-4 items-center flex flex-col min-h-[200px]  ">
          <div>
            <img src={Nike} className="w-[200px] min-w-[170px]" alt="" />
          </div>
          <div>
            <img src={Huba} className="w-[200px] min-w-[170px]" alt="" />
          </div>
          <div>
            <img src={Adidas} className="w-[170px] min-w-[170px]" alt="" />
          </div>
          <div>
            <img src={Solos} className="w-[200px]" alt="" />
          </div>
          <div>
            <img src={Kasa} className="w-[200px] min-w-[170px]" alt="" />
          </div>
        </div>
      </div>
      <img src={line} alt="" className="mt-10 min-w-[170px]" />
    </div>
  );
};

export default Brands;
