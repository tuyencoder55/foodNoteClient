import { useEffect, useState } from "react";
import axios from "axios";
import RestaurantCard from "../components/RestaurantCard";
import { API_URL } from "../api"; // import URL backend

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/restaurants`)
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.error("Lỗi load danh sách quán:", err));
  }, []);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Danh sách quán ăn 🍴</h1>
      <div className="grid gap-4">
        {restaurants.map((r) => (
          <RestaurantCard key={r._id} data={r} />
        ))}
      </div>
    </div>
  );
}
