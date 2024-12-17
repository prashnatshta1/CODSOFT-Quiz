import { Link, Form } from "react-router-dom";
import spinner from "../../assets/spinner.svg";
import { useState } from "react";

function Login({ loading }) {
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 w-full max-w-md">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Sign In
        </h1>
        <p className="text-gray-500 text-sm text-center mb-8">
          Enter your credentials to access your account.
        </p>

        <Form method="post" action="/login" className="flex flex-col space-y-5">
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
              placeholder="Enter your email"
              required
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
              placeholder="Enter your password"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 placeholder:text-gray-400 pr-10"
            />
            {/* Toggle Button */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-9 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? (
                <span className="text-sm font-semibold">Hide</span>
              ) : (
                <span className="text-sm font-semibold">Show</span>
              )}
            </button>
          </div>

          {/* Login Button */}
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
                <span>Signing In...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </Form>

        {/* Footer */}
        <p className="text-gray-600 text-center mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-orange-500 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
