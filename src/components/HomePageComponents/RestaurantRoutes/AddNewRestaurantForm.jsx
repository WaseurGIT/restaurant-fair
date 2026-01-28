import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddNewRestaurantForm = () => {
  const [error, setError] = useState("");

  const handleAddRestaurant = (e) => {
    e.preventDefault();

    const form = e.target;
    const restaurantData = {
      id: Number(form.id.value),
      restaurantName: form.restaurantName.value,
      restaurantDisplayImage: form.restaurantDisplayImage.value,
      location: form.location.value,
      rating: Number(form.rating.value),
      availableFoodName: form.availableFoodName.value
        .split(",")
        .map((food) => food.trim()),
      foodPrice: form.foodPrice.value
        .split(",")
        .map((price) => Number(price.trim())),
      description: form.description.value,
      contactNumber: form.contactNumber.value,
      comments: form.comments.value
        ? form.comments.value.split(",").map((c) => c.trim())
        : [],
    };

    axios
      .post("http://localhost:5000/restaurants", restaurantData)
      .then((res) => {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Restaurant added successfully!",
          showConfirmButton: false,
          timer: 2000,
        });
        form.reset();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response?.data?.message || err.message,
        });
        console.error("Error adding restaurant:", err);
        setError("Failed to add restaurant");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-center">
          <h2 className="text-3xl font-bold text-white">Add New Restaurant</h2>
          <p className="text-orange-100 text-sm mt-1">
            Fill in restaurant details
          </p>
        </div>

        <div className="p-8">
          <form onSubmit={handleAddRestaurant} className="space-y-5">
            {/* ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ID
              </label>
              <input
                type="number"
                name="id"
                placeholder="1"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
            </div>

            {/* Restaurant Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Restaurant Name
              </label>
              <input
                type="text"
                name="restaurantName"
                placeholder="Izumi"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
            </div>

            {/* Restaurant Display Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Restaurant Image URL
              </label>
              <input
                type="url"
                name="restaurantDisplayImage"
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="Gulshan‑2, Dhaka, Bangladesh"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                name="rating"
                placeholder="4.4"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
            </div>

            {/* Available Food Names */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Available Food Names
              </label>
              <input
                type="text"
                name="availableFoodName"
                placeholder="Salmon Sushi Platter, Tempura, Miso Soup"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Separate food items with commas
              </p>
            </div>

            {/* Food Prices */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Food Prices
              </label>
              <input
                type="text"
                name="foodPrice"
                placeholder="32, 18, 7"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Prices should match the food items order, separated by commas
              </p>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                rows="3"
                placeholder="Short description about the restaurant"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
                required
              ></textarea>
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                placeholder="+880 1711-123456"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
            </div>

            {/* Comments */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Comments (optional)
              </label>
              <input
                type="text"
                name="comments"
                placeholder="Amazing sushi, Nice ambiance"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
              />
              <p className="text-xs text-gray-500 mt-1">
                Separate comments with commas
              </p>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button className="w-full bg-orange-600 text-white py-2.5 rounded-lg font-semibold hover:bg-orange-700 transition cursor-pointer">
              Add Restaurant
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewRestaurantForm;
