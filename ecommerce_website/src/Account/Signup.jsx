import LoginImg from "../assets/signUpImg.png";
import Google from "../assets/google.png";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full">
      <Link to="/">
        <img src={Logo} alt="" className="mx-auto px-5  py-2 w-[200px] " />
      </Link>
      <div className="max-w-[1240px] mx-auto bg-white ">
        <div className="grid lg:grid-cols-2 ">
          <div className="lg:mx-5    py-8 lg:pt-20 ">
            <img src={LoginImg} alt="" className="mx-auto" />
          </div>
          <div className="text-black flex flex-col max-w-[1000px] ml-24 lg:my-20 my-10 ">
            <div className="px-2">
              <h1 className="text-2xl md:text-3xl lg:text-3xl text-[red]  pb-6 font-bold   text-center  ">
                Welcome to clothLand
              </h1>
            </div>
            <div className=" w-[100%] p-2 my-2 border-b-2 mx-auto">
              <form>
                <div className="flex flex-col  px-2">
                  <label className="text-xl font-bold py-1">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-white rounded-md py-2 my-1 outline-none border-2 border-red-100 px-4"
                  />
                </div>
                <div className="flex flex-col  px-2">
                  <label className="text-xl font-bold py-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-white rounded-md py-2 my-1 outline-none border-2 border-red-100 px-4"
                  />
                </div>
                <div className="flex flex-col  px-2">
                  <label className="text-xl font-bold py-1">Email</label>
                  <input
                    type="text"
                    placeholder=" Email"
                    className="bg-white rounded-md py-2 my-1 outline-none border-2 border-red-100 px-4"
                  />
                </div>
                <div className="flex flex-col  my-4 px-2">
                  <label className="text-xl font-bold py-1">Passsword</label>
                  <input
                    type="password"
                    placeholder=" Password"
                    className="bg-white rounded-md py-2 my-1 outline-none border-2 border-red-100 px-4"
                  />
                </div>
                <div className="flex flex-col  my-4 px-2">
                  <label className="text-xl font-bold py-1">
                    Confirm Passsword
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-white rounded-md py-2 my-1 outline-none border-2 border-red-100 px-4"
                  />
                </div>
                <div className="w-full text-center ">
                  <button className="w-[240px]  bg-[red] text-white font-bold text-xl rounded-md py-2 my-3 cursor-pointer hover:bg-red-500 duration-150 ">
                    Create Account
                  </button>

                  <p className="text-center text-[10px] py-2">
                    Already have an account?
                    <span className="text-[red] cursor-pointer">Log in</span>
                  </p>
                  <h1 className="text-xl py-1">OR</h1>
                  <div className="w-[180px] border mx-auto font-bold text-xs rounded-md py-2 flex items-center cursor-pointer justify-center hover:bg-red-500 duration-150  ">
                    <img src={Google} alt="" className="w-6 mx-2" />
                    <p>Sign in with Google</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
