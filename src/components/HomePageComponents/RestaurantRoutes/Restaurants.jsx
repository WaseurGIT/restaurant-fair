import axios from "axios";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../../sharedComponents/SectionTitle/SectionTitle";
import Restaurant from "./Restaurant";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("./RestaurantData.json")
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.error("Failed to load restaurants:", err));
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <SectionTitle title={"Restaurants"} />

      <div className="flex items-center justify-end">
        <Link className="px-12 bg-accent py-2 rounded-md">
          Add New Restaurant
        </Link>
      </div>

      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
