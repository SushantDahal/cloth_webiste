import { FaLongArrowAltRight } from "react-icons/fa";
const NewarrivalCard = (props) => {
  return (
    <div className="bg-white shadow-[#181616] shadow-xl hover:translate-y-1 cursor-pointer duration-200 rounded-md">
      <img
        src={props.img}
        alt="/"
        className="object-contain max-h-[230px]  min-h-[230px] mx-auto"
      />
      <div className=" bg-black text-white px-4 rounded-md">
        <div className=" min-h-24 ">
          <h3 className="text-xl font-bold pt-2">{props.name}</h3>
          <small className=" py-2 ">{props.description}</small>
        </div>
        <div>
          <h2 className="text-xl font-bold ">{props.price}</h2>
          <div className="flex items-center ">
            <h1>Read More</h1> <FaLongArrowAltRight className="mx-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewarrivalCard;
