import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black to-zinc-900 text-white p-4">
      <div className="text-center bg-zinc-800 border border-zinc-700 rounded-2xl p-10 shadow-[0_0_20px_#ff0044] max-w-xl">
        <h1 className="text-4xl font-extrabold mb-4 text-red-500 animate-pulse">
          🚫 Unauthorized Access
        </h1>
        <p className="text-lg mb-8 text-zinc-300">
          You don’t have permission to view this page. This route is reserved for <span className="text-pink-400 font-semibold">admins only</span>.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
        >
          🔙 Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
