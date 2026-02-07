import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminAnalytics = () => {
  const [stats, setStats] = useState({
    totalRestaurants: 0,
    totalUsers: 0,
    averageRating: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [restaurantsRes, usersRes] = await Promise.all([
        axios.get("http://localhost:5000/restaurants"),
        axios.get("http://localhost:5000/users"),
      ]);

      let avgRating = 0;
      if (restaurantsRes.data.success && restaurantsRes.data.data.length > 0) {
        const totalRating = restaurantsRes.data.data.reduce(
          (sum, r) => sum + (r.rating || 0),
          0
        );
        avgRating = (totalRating / restaurantsRes.data.data.length).toFixed(2);
      }

      setStats({
        totalRestaurants: restaurantsRes.data.data?.length || 0,
        totalUsers: usersRes.data.data?.length || 0,
        averageRating: avgRating,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching stats:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen pt-24 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-base-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 mt-8">Analytics & Statistics</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Restaurants */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 font-semibold mb-2">Total Restaurants</p>
                <p className="text-4xl font-bold text-blue-600">{stats.totalRestaurants}</p>
              </div>
              <div className="text-5xl">🍽️</div>
            </div>
          </div>

          {/* Total Users */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 font-semibold mb-2">Total Users</p>
                <p className="text-4xl font-bold text-green-600">{stats.totalUsers}</p>
              </div>
              <div className="text-5xl">👥</div>
            </div>
          </div>

          {/* Average Rating */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 font-semibold mb-2">Average Rating</p>
                <p className="text-4xl font-bold text-yellow-600">
                  {stats.averageRating} ⭐
                </p>
              </div>
              <div className="text-5xl">📊</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
