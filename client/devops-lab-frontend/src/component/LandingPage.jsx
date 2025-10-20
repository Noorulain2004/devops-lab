import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Web App</h1>
      <p className="text-lg text-gray-700 mb-6">
        This is a simple landing page built with React and TailwindCSS.
      </p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
