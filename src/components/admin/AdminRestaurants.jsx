import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const AdminRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get("http://localhost:5000/restaurants");
      if (response.data.success) {
        setRestaurants(response.data.data);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      Swal.fire("Error!", "Failed to load restaurants.", "error");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
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
        await axios.delete(`http://localhost:5000/restaurants/${id}`);
        Swal.fire("Deleted!", "Restaurant has been deleted.", "success");
        setRestaurants(restaurants.filter((r) => r._id !== id));
      } catch (error) {
        console.error("Error deleting restaurant:", error);
        Swal.fire("Error!", "Failed to delete restaurant.", "error");
      }
    }
  };

  if (loading) {
    return <div className="min-h-screen pt-24 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-base-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8 mt-8">
          <h1 className="text-4xl font-bold">Manage Restaurants</h1>
          <Link
            to="/addNewRestaurantForm"
            className="btn btn-primary"
          >
            + Add New Restaurant
          </Link>
        </div>

        {restaurants.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No restaurants found</p>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Location</th>
                  <th className="px-6 py-4 text-left">Rating</th>
                  <th className="px-6 py-4 text-left">Contact</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {restaurants.map((restaurant) => (
                  <tr key={restaurant._id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">{restaurant.restaurantName}</td>
                    <td className="px-6 py-4">{restaurant.location}</td>
                    <td className="px-6 py-4">⭐ {restaurant.rating}</td>
                    <td className="px-6 py-4">{restaurant.contactNumber}</td>
                    <td className="px-6 py-4 text-center flex gap-2 justify-center">
                      <Link
                        to={`/restaurants/${restaurant._id}`}
                        className="btn btn-sm btn-info"
                      >
                        View
                      </Link>
                      <Link
                        to={`/restaurants/update/${restaurant._id}`}
                        className="btn btn-sm btn-warning"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(restaurant._id)}
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminRestaurants;
