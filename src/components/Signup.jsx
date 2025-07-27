import React from "react";
import { motion } from "framer-motion";

const Signup = ({ onClose, onSwitchToSignin }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <motion.div
        className="bg-white rounded-2xl shadow-2xl w-[95%] max-w-3xl p-8 relative overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-xl"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">
          Create Your Account
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Row 1: Name & Email */}
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Row 2: Phone & Role */}
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                placeholder="10-digit number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <label className="block text-gray-700 mb-1">Select Role</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="pgowner">PG Owner</option>
              </select>
            </div>
          </div>

          {/* Row 3: Password & Confirm Password */}
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <label className="block text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Switch to Sign In */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={onSwitchToSignin}
              className="text-orange-500 hover:underline focus:outline-none"
            >
              Sign in here
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
