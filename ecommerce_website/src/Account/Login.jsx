import LoginImg from "../assets/Loginimg.png";
import Google from "../assets/google.png";

const Login = () => {
  return (
    <div className="w-full bg-black ">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="text-white bg-red-800 flex items-center flex-col max-w-[700px] mx-10">
          <h1>Welcome Back</h1>
          <small>Welcome back! Please enter your details.</small>
          <div className="w-[70%] bg-blue-900 p-2">
            <form>
              <div className="flex flex-col bg-red-300 px-2">
                <label className="text-xl font-bold">Email</label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="bg-white rounded-md py-2 my-1"
                />
              </div>
              <div className="flex flex-col bg-red-300 my-4 px-2">
                <label className="text-xl font-bold">Passsword</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="bg-white rounded-md py-2 my-1"
                />
              </div>
              <div className="flex justify-between mx-2">
                <div>
                  <input type="checkbox" className="mr-3" />
                  Remember Me
                </div>
                <p>Forgot Password</p>
              </div>
              <button className="w-full bg-[red] text-white font-bold text-xl rounded-md py-1 my-3">
                Sign In
              </button>
              <div className="w-full bg-[red] text-white font-bold text-xs rounded-md py-1 flex items-center justify-center ">
                <img src={Google} alt="" className="w-6 mx-2" />
                <p>Sign in with Google</p>
              </div>
              <p className="text-center text-[10px] py-2">
                Don’t have an account? Sign up fo free!
              </p>
            </form>
          </div>
        </div>
        <div className="bg-blue-800">
          <img src={LoginImg} alt="" className="" />
        </div>
      </div>
    </div>
  );
};
export default Login;
