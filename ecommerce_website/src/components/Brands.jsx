import Adidas from "../assets/Adidas.jpg";
import Nike from "../assets/nike.png";
import Solos from "../assets/solos.webp";
import Huba from "../assets/huba.png";
import Kasa from "../assets/kasa.png";
const Brands = () => {
  return (
    <div className="w-full bg-black mb-8">
      <div className="grid sm:grid-cols-5 gap-4 h-[200px] mx-6">
        <div>
          <img src={Nike} className="w-[200px]" alt="" />
        </div>
        <div>
          <img src={Huba} className="w-[200px]" alt="" />
        </div>
        <div>
          <img src={Adidas} className="w-[170px]" alt="" />
        </div>
        <div>
          <img src={Solos} className="w-[200px]" alt="" />
        </div>
        <div>
          <img src={Kasa} className="w-[200px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
