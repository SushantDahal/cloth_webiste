import NewarrivalCard from "./NewarrivalCard";
import newarrival_data from "./newarrival_data";

const Newarivals = () => {
  return (
    <div className="max-w-[1240px] mx-auto  mb-20">
      <h1 className="text-5xl text-center font-bold text-[red] py-3 mb-4">
        New arrival
      </h1>
      <div className="grid md:grid-cols-3 mx-6 py-2 gap-8">
        {newarrival_data.map((arr) => {
          return (
            <NewarrivalCard
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
  );
};
export default Newarivals;
