import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Brands from "./components/Brands";
import Newarivals from "./components/newarrivals/New_Arrivals";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Brands />
      <Newarivals />
    </div>
  );
}

export default App;
