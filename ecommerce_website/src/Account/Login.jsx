import LoginImg from "../assets/Loginimg.png";
import Google from "../assets/google.png";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full">
      <Link to="/">
        <img src={Logo} alt="" className="mx-auto px-5  py-2 w-[200px] " />
      </Link>
      <div className="w-full bg-white ">
        <div className="grid lg:grid-cols-2 ">
          <div className="text-black flex flex-col max-w-[1000px] ml-24 lg:my-20 my-10 px-6">
            <div className="px-2">
              <h1 className=" text-3xl lg:text-3xl  pt-2 font-bold px-2  ">
                Welcome Back
              </h1>
              <small className="p-2 ">
                Welcome back! Please enter your details.
              </small>
            </div>
            <div className="w-[70%]  p-2 my-2 border-b-2">
              <form>
                <div className="flex flex-col  px-2">
                  <label className="text-xl font-bold py-1">Email</label>
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="bg-white rounded-md py-2 my-1 outline px-4"
                  />
                </div>
                <div className="flex flex-col  my-4 px-2">
                  <label className="text-xl font-bold py-1">Passsword</label>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="bg-white rounded-md py-2 my-1 px-4 outline"
                  />
                </div>
                <div className="flex md:flex-row justify-between mx-2 my-2  items-center">
                  <div>
                    <input
                      type="checkbox"
                      className="mr-3  md:text-xs text-[12px]"
                    />
                    <label className="md:text-xs text-[12px]">
                      Remember Me
                    </label>
                  </div>
                  <p className="md:text-xs text-[12px] cursor-pointer">
                    Forgot Password
                  </p>
                </div>
                <button className="w-full bg-[red] text-white font-bold text-xl rounded-md py-2 my-3 cursor-pointer hover:bg-red-500 duration-150 ">
                  Sign In
                </button>
                <div className="w-full bg-[red] text-white font-bold text-xs rounded-md py-2 flex items-center cursor-pointer justify-center hover:bg-red-500 duration-150  ">
                  <img src={Google} alt="" className="w-6 mx-2" />
                  <p>Sign in with Google</p>
                </div>
                <p className="text-center text-[10px] py-2">
                  Don’t have an account?{" "}
                  <span className="text-[red] cursor-pointer">
                    {" "}
                    sign up fo free!
                  </span>
                </p>
              </form>
            </div>
          </div>
          <div className="mx-auto lg:mx-5">
            <img src={LoginImg} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
