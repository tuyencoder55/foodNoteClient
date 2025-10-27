//import { API_URL } from "../api";

export default function RestaurantCard({ data }) {
  const openMap = () => window.open(data.mapUrl, "_blank");

  return (
    <div className="flex gap-3 p-3 bg-white border shadow-sm rounded-xl">
      {data.menuImage && (
        <img
          // load menuImage từ server Render
          src={data.menuImage}
          alt="menu"
          className="object-cover w-20 h-20 rounded-lg"
        />
      )}
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{data.name}</h2>
        <p
          onClick={openMap}
          className="text-sm text-blue-600 underline cursor-pointer"
        >
          {data.address}
        </p>
        <p className="mt-1 text-sm">Đánh giá: {data.rating}</p>
        {data.note && <p className="mt-1 text-sm text-gray-500">{data.note}</p>}
      </div>
    </div>
  );
}
