import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Brands from "./components/Brands";
import Newarivals from "./components/newarrivals/New_Arrivals";
import Best_Seller from "./components/bestseller/Best_Seller";
import Newsletter from "./components/Newsletter";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import Login from "./Account/Login";
import Signup from "./Account/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Loginpage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}
function Homepage() {
  return (
    <>
      <Navbar />
      <Home />
      <Brands />
      <Newarivals />
      <Best_Seller />
      <Offers />
      <Newsletter />
      <Footer />
    </>
  );
}

function Loginpage() {
  return (
    <>
      <Login />
    </>
  );
}
function SignUpPage() {
  return (
    <>
      <Signup />
    </>
  );
}
export default App;
