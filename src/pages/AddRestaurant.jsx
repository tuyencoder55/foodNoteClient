import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../api"; // import URL backend

export default function AddRestaurant() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    mapUrl: "",
    rating: "Ổn áp",
    note: "",
  });
  const [menuImage, setMenuImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in form) formData.append(key, form[key]);
    if (menuImage) formData.append("menuImage", menuImage);

    try {
      await axios.post(`${API_URL}/api/restaurants`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: false,
      });
      navigate("/");
    } catch (err) {
      console.error("Lỗi khi thêm quán:", err);
      alert("Không thể thêm quán. Kiểm tra console.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        name="name"
        placeholder="Tên quán ăn"
        className="p-2 border rounded"
        onChange={handleChange}
        required
      />
      <input
        name="address"
        placeholder="Địa chỉ"
        className="p-2 border rounded"
        onChange={handleChange}
        required
      />
      <input
        name="mapUrl"
        placeholder="Link Google Map"
        className="p-2 border rounded"
        onChange={handleChange}
        required
      />
      <select
        name="rating"
        className="p-2 border rounded"
        onChange={handleChange}
      >
        <option>Ăn ngon</option>
        <option>Ổn áp</option>
        <option>Tạm được</option>
        <option>Không ngon</option>
      </select>
      <textarea
        name="note"
        placeholder="Ghi chú"
        className="p-2 border rounded"
        onChange={handleChange}
      />
      <input
        type="file"
        onChange={(e) => setMenuImage(e.target.files[0])}
        accept="image/*"
      />
      <button className="p-2 text-white bg-orange-500 rounded">Lưu</button>
    </form>
  );
}
