import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateRestaurantForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    id: "",
    restaurantName: "",
    restaurantDisplayImage: "",
    location: "",
    rating: "",
    availableFoodName: "",
    foodPrice: "",
    description: "",
    contactNumber: "",
  });

  // Fetch restaurant data
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/restaurants/${id}`)
        .then((res) => {
          console.log("Fetched restaurant data:", res.data);
          if (res.data.success && res.data.data) {
            const data = res.data.data; // <-- extract the actual restaurant object

            setRestaurant(data);

            setFormData({
              id: data._id || "",
              restaurantName: data.restaurantName || "",
              restaurantDisplayImage: data.restaurantDisplayImage || "",
              location: data.location || "",
              rating: data.rating || "",
              availableFoodName: Array.isArray(data.availableFoodName)
                ? data.availableFoodName.join(", ")
                : "",
              foodPrice: Array.isArray(data.foodPrice)
                ? data.foodPrice.join(", ")
                : "",
              description: data.description || "",
              contactNumber: data.contactNumber || "",
            });

            setLoading(false);
          } else {
            setError("Restaurant not found");
            setLoading(false);
          }
        })
        .catch((err) => {
          console.error("Error fetching restaurant:", err);
          setError("Failed to load restaurant data");
          setLoading(false);
        });
    }
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleUpdateRestaurant = (e) => {
    e.preventDefault();

    const updatedData = {
      id: Number(formData.id),
      restaurantName: formData.restaurantName,
      restaurantDisplayImage: formData.restaurantDisplayImage,
      location: formData.location,
      rating: Number(formData.rating),
      availableFoodName: formData.availableFoodName
        .split(",")
        .map((food) => food.trim()),
      foodPrice: formData.foodPrice
        .split(",")
        .map((price) => Number(price.trim())),
      description: formData.description,
      contactNumber: formData.contactNumber,
    };

    axios
      .put(`http://localhost:5000/restaurants/${id}`, updatedData)
      .then(() => {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Restaurant updated successfully!",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/restaurants");
      })
      .catch((err) => {
        console.error("Error updating restaurant:", err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to update restaurant",
        });
      });
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 text-black">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-center">
          <h2 className="text-3xl font-bold text-white">Update Restaurant</h2>
          <p className="text-orange-100 text-sm mt-1">
            Update restaurant details
          </p>
        </div>

        <div className="p-8">
          <form onSubmit={handleUpdateRestaurant} className="space-y-5">
            {/* ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ID
              </label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
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
                value={formData.restaurantName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Restaurant Image URL
              </label>
              <input
                type="url"
                name="restaurantDisplayImage"
                value={formData.restaurantDisplayImage}
                onChange={handleChange}
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
                value={formData.location}
                onChange={handleChange}
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
                value={formData.rating}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
            </div>

            {/* Available Food Names */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Available Food Names (comma-separated)
              </label>
              <input
                type="text"
                name="availableFoodName"
                value={formData.availableFoodName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
            </div>

            {/* Food Prices */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Food Prices (comma-separated)
              </label>
              <input
                type="text"
                name="foodPrice"
                value={formData.foodPrice}
                onChange={handleChange}
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
                value={formData.description}
                onChange={handleChange}
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
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
            </div>

            <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
              Update Restaurant
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateRestaurantForm;
