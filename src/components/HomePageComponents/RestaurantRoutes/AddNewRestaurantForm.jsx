import React, { useState } from "react";

const AddNewRestaurantForm = () => {
  const [error, setError] = useState("");

  const handleAddRestaurant = (e) => {
    e.preventDefault();

    const form = e.target;
    const restaurantData = {
      name: form.name.value,
      restaurantProfile: form.restaurantProfile.value,
      location: form.location.value,
      contactNumber: form.contactNumber.value,
      description: form.description.value,
      foodLists: form.foodLists.value.split(",").map(food => food.trim()),
    };

    console.log(restaurantData);
    form.reset();
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
            {/* Restaurant Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Restaurant Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Restaurant Name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
            </div>

            {/* Restaurant Profile */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Restaurant Profile (Image URL)
              </label>
              <input
                type="url"
                name="restaurantProfile"
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
                placeholder="City, Area"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                placeholder="+8801XXXXXXXXX"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
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

            {/* Food Lists */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Food Lists
              </label>
              <input
                type="text"
                name="foodLists"
                placeholder="Burger, Pizza, Pasta"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Separate items with commas
              </p>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button className="w-full bg-orange-600 text-white py-2.5 rounded-lg font-semibold hover:bg-orange-700 transition">
              Add Restaurant
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewRestaurantForm;
