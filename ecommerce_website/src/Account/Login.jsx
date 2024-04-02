import LoginImg from "../assets/Loginimg.png";
import Google from "../assets/google.png";
import Logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Validation from "./LoginValidation";
import axios from "axios";

const Login = () => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/");
          } else {
            alert("No data exist");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value, // Update value without wrapping in array
    }));
  };
  return (
    <div className="w-full">
      <Link to="/">
        <img
          src={Logo}
          alt=""
          className="mx-auto px-5  pt-2 w-[200px] animate-bounce duration-1000 "
        />
      </Link>
      <div className="max-w-[1240px] mx-auto bg-white ">
        <div className="grid lg:grid-cols-2  ">
          <div className="text-black flex flex-col max-w-[900px] mx-14 my-5 px-4">
            <div className="px-2 lg:mx-2 mx-auto py-4">
              <h1 className=" text-3xl lg:text-3xl  font-bold px-2  ">
                Welcome Back
              </h1>
              <small className="p-2 ">
                Welcome back! Please enter your details.
              </small>
            </div>
            <div className=" w-[100%]  p-2 my-2 border-b-2 mx-auto lg:mx-0">
              <form action="" onSubmit={handleSubmit}>
                <div className="flex flex-col  px-2">
                  <label className="text-xl font-bold py-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="Enter Your Email"
                    onChange={handleInput}
                    className="bg-white rounded-md py-2 my-1 outline-none px-4 border-2 border-red-100"
                  />
                  {errors.email && (
                    <span className="text-[red] text-xs">{errors.email}</span>
                  )}
                </div>
                <div className="flex flex-col  my-4 px-2">
                  <label className="text-xl font-bold py-1" htmlFor="password">
                    Passsword
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                    onChange={handleInput}
                    className="bg-white rounded-md py-2 my-1 px-4 outline-none border-2 border-red-100"
                  />
                  {errors.password && (
                    <span className="text-[red] text-xs">
                      {errors.password}
                    </span>
                  )}
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
                    Forgot Password?
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[red] text-white font-bold text-xl rounded-md py-2 my-3 cursor-pointer hover:bg-red-500 duration-150 "
                >
                  Sign In
                </button>
                <div className="w-full bg-[red] text-white font-bold text-xs rounded-md py-2 flex items-center cursor-pointer justify-center hover:bg-red-500 duration-150  ">
                  <img src={Google} alt="" className="w-6 mx-2" />
                  <p>Sign in with Google</p>
                </div>
                <p className="text-center text-[18px] pt-4 py-2">
                  Don’t have an account ?
                  <Link to="/SignUp">
                    <span className="text-[red] text-[16px] px-4  cursor-pointer">
                      sign up fo free!
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="mx-auto lg:mx-5 px-5">
            <img src={LoginImg} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
