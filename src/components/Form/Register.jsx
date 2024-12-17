import React, { useState } from "react";
import { Link, Form } from "react-router-dom";
import spinner from "../../assets/spinner.svg";

function Register({ isSubmitting: loading }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Toggle Password Visibility
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 w-full max-w-md">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Create an Account
        </h1>
        <p className="text-gray-500 text-sm text-center mb-8">
          Let's improve your knowledge by signing up!
        </p>

        {/* Registration Form */}
        <Form method="post" action="/register" className="flex flex-col space-y-5">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 placeholder:text-gray-400 pr-20"
            />
            {/* Show/Hide Text */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-10 right-3 text-sm font-semibold text-orange-500 hover:text-orange-600 focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <label
              htmlFor="confirmPw"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPw"
              required
              placeholder="Confirm your password"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 placeholder:text-gray-400 pr-20"
            />
            {/* Show/Hide Text */}
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute top-10 right-3 text-sm font-semibold text-orange-500 hover:text-orange-600 focus:outline-none"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-full text-white font-semibold transition-all duration-300 ${
              loading
                ? "bg-orange-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 shadow-md"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <img
                  src={spinner}
                  alt="Loading"
                  className="w-5 h-5 mr-2 animate-spin"
                />
                <span>Signing Up...</span>
              </div>
            ) : (
              "Register"
            )}
          </button>
        </Form>

        {/* Footer */}
        <p className="text-gray-600 text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
