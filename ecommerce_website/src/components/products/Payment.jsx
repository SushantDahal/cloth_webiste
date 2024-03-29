import esewa from "../../assets/esewa.jpeg";
import khalti from "../../assets/khalti.jpeg";

const Payment = () => {
  const shippingPrice = 3000;
  const vat = 300;
  const subTotal = 2700;
  return (
    <div className="bg-[#565ABB] lg:col-span-1 col-span-3 mx-auto   max-h-[460px] min-h-[460px] p-4 rounded-3xl text-white  shadow-[#1b1a1a] shadow-xl">
      <h1 className="text-2xl font-bold">Card Details</h1>
      <h2 className="pt-2  pb-3 text-[16px]">Payment Type</h2>
      {/* esewa img */}
      <div className=" grid grid-cols-3 gap-4">
        <div>
          <img
            src={esewa}
            alt=""
            className="w-20 h-10 rounded-md object-cover"
          />
        </div>
        <div>
          <img
            src={khalti}
            alt=""
            className="w-20 h-10 rounded-md object-fill"
          />
        </div>
        <div className="text-center bg-[#7f82e2] text-white font-bold rounded-md hover:bg-[#bfc1f7] cursor-pointer">
          <h1 className="py-2 ">see all</h1>
        </div>
      </div>
      {/* esewa img end*/}
      {/* Id section */}
      <div className="mt-6 ">
        <div>
          <label htmlFor="" className="text-[15px] ">
            ID
          </label>
          <input
            type="text"
            className="w-full py-1 px-2 bg-transparent outline-none border rounded-md my-1"
            placeholder="Enter Id"
          />
        </div>
        <div className="my-3">
          <label htmlFor="" className="text-[15px]">
            PIN
          </label>
          <input
            type="text"
            maxLength={4}
            className="w-full py-1 px-2 bg-transparent outline-none border rounded-md "
            placeholder="Pin"
          />
        </div>
      </div>
      {/* id section end */}
      {/* Subtotal section */}
      <div className=" mt-10 px-4">
        <div className="flex justify-between">
          <h1>Shipping</h1>
          <p>NPR {shippingPrice}</p>
        </div>
        <div className="flex justify-between my-1">
          <h1>Total (Tax incl.)</h1>
          <p>NPR {vat}</p>
        </div>
        <hr className="w-full h-[1px]" />
        <div className="flex justify-between pt-2">
          <h1>Subtotal</h1>
          <p>NPR {subTotal}</p>
        </div>
      </div>

      {/* Subtotal section end*/}
    </div>
  );
};

export default Payment;
