import React from "react";
import { Link } from "react-router-dom";

const Restaurant = ({ restaurant }) => {
  return (
    <Link to={`/restaurants/${restaurant._id}`}>
      <div className=" bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer">
        <div
          className="h-48 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${restaurant.restaurantDisplayImage})` }}
        ></div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-gray-800">{restaurant.restaurantName}</h2>
            <span className="text-yellow-500 font-semibold">{restaurant.rating} ★</span>
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

          <div className="text-gray-800 font-semibold">
            📞 {restaurant.contactNumber}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Restaurant;
