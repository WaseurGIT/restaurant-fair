import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Restaurant = ({ restaurant, onDelete }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(
          `http://localhost:5000/restaurants/${restaurant._id}`,
        );
        Swal.fire("Deleted!", "Restaurant has been deleted.", "success");
        if (onDelete) onDelete(restaurant._id); // remove it from parent state
      } catch (error) {
        console.error("Error deleting restaurant:", error);
        Swal.fire("Error!", "Failed to delete restaurant.", "error");
      }
    }
  };

  return (
    <div
      onClick={() => navigate(`/restaurants/${restaurant._id}`)}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
    >
      <div
        className="h-48 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${restaurant.restaurantDisplayImage})` }}
      ></div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-gray-800">
            {restaurant.restaurantName}
          </h2>
          <span className="text-yellow-500 font-semibold">
            {restaurant.rating} ★
          </span>
        </div>

        <p className="text-gray-500 text-sm mb-3">{restaurant.location}</p>

        <div className="mb-3">
          <h3 className="font-semibold text-gray-700 mb-1">Menu:</h3>
          <ul className="list-disc list-inside text-gray-600 text-sm">
            {restaurant.availableFoodName.map((food, idx) => (
              <li key={idx}>
                {food} - ${restaurant.foodPrice[idx]}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-gray-700 text-sm mb-3">{restaurant.description}</p>

        <div className="text-gray-800 font-semibold mb-4">
          📞 {restaurant.contactNumber}
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <Link
            to={`/restaurants/update/${restaurant._id}`}
            onClick={(e) => e.stopPropagation()}
            className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Update
          </Link>
          <button
            className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
