import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-base-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 mt-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Manage Restaurants Card */}
          <Link
            to="/admin/restaurants"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            <div className="text-4xl mb-4">🍽️</div>
            <h2 className="text-2xl font-bold mb-2">Manage Restaurants</h2>
            <p className="text-gray-600">View, add, update, and delete restaurants</p>
          </Link>

          {/* Users Card */}
          <Link
            to="/admin/users"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            <div className="text-4xl mb-4">👥</div>
            <h2 className="text-2xl font-bold mb-2">Manage Users</h2>
            <p className="text-gray-600">View and manage user accounts</p>
          </Link>

          {/* Analytics Card */}
          <Link
            to="/admin/analytics"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-2xl font-bold mb-2">Analytics</h2>
            <p className="text-gray-600">View statistics and reports</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
