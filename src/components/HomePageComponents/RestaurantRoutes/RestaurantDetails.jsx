import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/restaurants/${id}`).then((res) => {
      setRestaurant(res.data.data);
    });
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/restaurants/${id}/comments`)
      .then((res) => setComments(res.data.comments));
  }, [id]);

  const handleAddComments = () => {
    if (!newComment.trim()) return;
    axios
      .post(`http://localhost:5000/restaurants/${id}/comments`, {
        comment: newComment,
      })
      .then(() => {
        setComments((prev) => [...prev, newComment]);
        setNewComment("");
      });
  };

  if (!restaurant) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className=" mx-20 my-30 bg-white rounded-xl shadow-lg overflow-hidden p-6">
      <div
        className="h-64 w-full bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${restaurant.restaurantDisplayImage})` }}
      ></div>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {restaurant.restaurantName}
          </h1>
          <span className="text-yellow-500 font-semibold text-xl">
            {restaurant.rating} ★
          </span>
        </div>

        <p className="text-gray-600 text-lg">📍 {restaurant.location}</p>
        <p className="text-gray-700 text-base leading-relaxed">
          {restaurant.description}
        </p>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Menu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {restaurant.availableFoodName.map((food, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-4 rounded-md border border-gray-200"
              >
                <h3 className="font-semibold text-gray-900">{food}</h3>
                <p className="text-gray-700">
                  Price:{" "}
                  <span className="font-medium">
                    ${restaurant.foodPrice[idx]}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold text-gray-800 text-lg">Contact</h2>
          <p className="text-gray-700">📞 {restaurant.contactNumber}</p>
        </div>

        <div className="mt-6">
          <h1 className="font-semibold text-gray-800 text-lg mb-2">Comments</h1>

          <div className="space-y-3 mb-4">
            {comments.length === 0 && (
              <p className="text-gray-500">No comments yet</p>
            )}
            {comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-100 p-3 rounded-md text-gray-800"
              >
                💬 {comment}
              </div>
            ))}
          </div>

          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="border border-gray-400 w-full text-black px-3 py-2 rounded-md"
            rows={4}
            placeholder="Write your comment..."
          ></textarea>

          <button
            onClick={handleAddComments}
            className="mt-2 text-white px-6 py-2 bg-accent rounded-md"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
