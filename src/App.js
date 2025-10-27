import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddRestaurant from "./pages/AddRestaurant";

function App() {
  return (
    <Router>
      <nav className="p-3 flex justify-between bg-orange-100">
        <Link to="/" className="font-bold text-lg text-orange-600">
          🍜 Food Notes
        </Link>
        <Link to="/add" className="bg-orange-500 text-white px-3 py-1 rounded">
          + Thêm quán
        </Link>
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddRestaurant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
