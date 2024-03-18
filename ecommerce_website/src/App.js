import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Brands from "./components/Brands";
import Newarivals from "./components/newarrivals/New_Arrivals";
import Best_Seller from "./components/bestseller/Best_Seller";
import Newsletter from "./components/Newsletter";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Product from "./components/products/Product";
import Login from "./Account/Login";
import Signup from "./Account/Signup";
import AddTocart from "./components/products/AddToCart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Loginpage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/Products" element={<ProductSection />} />
          <Route path="/Dashboard" element={<DashboardSection />} />
          <Route path="/Addtocart" element={<AddcartSection />} />
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
function ProductSection() {
  return (
    <>
      <Product />
    </>
  );
}
function DashboardSection() {
  return (
    <>
      <Dashboard />
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

function AddcartSection() {
  return (
    <>
      <AddTocart />
    </>
  );
}
export default App;
