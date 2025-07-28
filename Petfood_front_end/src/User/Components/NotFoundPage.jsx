import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-gray-500">404</h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-500">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 text-white bg-gray-400 rounded-lg hover:bg-gray-600 transition duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
