import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center text-white max-w-lg p-8 bg-black bg-opacity-70 rounded-lg mx-4">
        <h1 className="text-7xl font-extrabold mb-4">404</h1>
        <p className="text-2xl mb-4">Oops — Page Not Found!</p>
        <p className="mb-6">
          It looks like this dish doesn’t exist on the menu 🍔. Try heading back
          to where the real flavor is! 😄
        </p>

        <Link
          to="/"
          className="px-6 py-3 bg-red-500 hover:bg-red-600 transition text-white font-semibold rounded"
        >
          Go To Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
