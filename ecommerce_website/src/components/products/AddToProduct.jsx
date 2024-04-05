// import { Link } from "react-router-dom";
// import Logo from "../../assets/Logo.png";

// const AddToProduct = () => {
//   return (
//     <div className="w-full ">
//       <div className="flex justify-center py-2">
//         <Link to="/Dashboard">
//           <img src={Logo} alt="/" className="max-w-[190px] rounded-l-lg" />
//         </Link>
//       </div>
//       <div className="bg-[#e2c8c8]  mx-auto max-w-[1100px] my-20 py-4 min-h-[500px] min-w-[450px] px-5">
//         <h1 className="text-5xl  text-center font-bold mt-8">
//           Add Product Details
//         </h1>
//         <div className="max-w-[900px] mx-auto my-20 ">
//           <form>
//             {/* IMAGE */}
//             <div>
//               <div className="bg-white py-4">
//                 <label htmlFor="" className="mx-8 text-xl font-bold ">
//                   Image
//                 </label>
//                 <input type="file" className="py-2" />
//               </div>
//               {/* NAME */}
//               <div className="bg-white py-4">
//                 <label htmlFor="" className="mx-8 text-xl font-bold">
//                   Name
//                 </label>
//                 <input type="text" className="border-2 py-2" />
//               </div>
//               {/* PRICE */}
//               <div className="bg-white py-4">
//                 <label htmlFor="" className="mx-8 text-xl font-bold ">
//                   Price
//                 </label>
//                 <input type="text" className="border-2 py-2" />
//               </div>
//               {/*Discount PRICE */}
//               <div className="bg-white py-4">
//                 <label
//                   htmlFor=""
//                   className="mx-8 text-xl font-bold min-w-[100px]"
//                 >
//                   Discount Price
//                 </label>
//                 <input type="text" className="border-2 py-2" />
//               </div>
//             </div>

//             <div className="text-center my-4 py-3">
//               <button
//                 type="submit"
//                 className="bg-red-500 w-[200px] py-2 rounded-md font-bold text-xl hover:bg-red-300 duration-200"
//               >
//                 Add to Product
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToProduct;
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const AddToProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    discountPrice: "",
    image: null, // Store the image file
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setProduct({ ...product, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("price", product.price);
      formData.append("discountPrice", product.discountPrice);
      formData.append("image", product.image);

      const response = await fetch("http://localhost:8081/addToCart", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data); // Log the response from the backend
      // You can handle success or failure here
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-center py-2">
        <Link to="/Dashboard">
          <img src={Logo} alt="/" className="max-w-[190px] rounded-l-lg" />
        </Link>
      </div>
      <div className="bg-[#e2c8c8]  mx-auto max-w-[1100px] my-20 py-4 min-h-[500px] min-w-[450px] px-5">
        <h1 className="text-5xl  text-center font-bold mt-8">
          Add Product Details
        </h1>
        <div className="max-w-[900px] mx-auto my-20 ">
          <form onSubmit={handleSubmit}>
            {/* IMAGE */}
            <div>
              <div className="bg-white py-4">
                <label htmlFor="" className="mx-8 text-xl font-bold">
                  Image
                </label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="py-2"
                />
              </div>
              {/* NAME */}
              <div className="bg-white py-4">
                <label htmlFor="" className="mx-8 text-xl font-bold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  className="border-2 py-2"
                />
              </div>
              {/* PRICE */}
              <div className="bg-white py-4">
                <label htmlFor="" className="mx-8 text-xl font-bold">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  className="border-2 py-2"
                />
              </div>
              {/* Discount PRICE */}
              <div className="bg-white py-4">
                <label htmlFor="" className="mx-8 text-xl font-bold">
                  Discount Price
                </label>
                <input
                  type="text"
                  name="discountPrice"
                  value={product.discountPrice}
                  onChange={handleChange}
                  className="border-2 py-2"
                />
              </div>
            </div>

            <div className="text-center my-4 py-3">
              <button
                type="submit"
                className="bg-red-500 w-[200px] py-2 rounded-md font-bold text-xl hover:bg-red-300 duration-200"
              >
                Add to Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToProduct;
