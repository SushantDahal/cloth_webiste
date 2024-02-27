import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Brands from "./components/Brands";
import Newarivals from "./components/newarrivals/New_Arrivals";
import Best_Seller from "./components/bestseller/Best_Seller";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Brands />
      <Newarivals />
      <Best_Seller />
    </div>
  );
}

export default App;
