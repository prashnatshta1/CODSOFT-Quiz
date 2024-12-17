import { Link } from "react-router-dom";
import useQuestionStore from "../../store/zustand";

function NavBar() {
  const { auth, logoutUser } = useQuestionStore();

  return (
    <nav className="w-full bg-white shadow-md text-neutral-900 px-5 md:px-10 flex items-center justify-between py-4 sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-orange-500 text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-1 hover:opacity-90 transition-opacity">
        Quick<span className="text-neutral-900">Quiz</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4 md:space-x-6">
        {/* Conditional Login/Logout/Register Buttons */}
        {auth?.email ? (
          <button
            onClick={logoutUser}
            className="py-2 px-5 text-sm md:text-base font-semibold text-white bg-red-500 hover:bg-red-600 rounded-full shadow transition-all duration-300"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="py-2 px-5 text-sm md:text-base text-orange-500 font-semibold border border-orange-500 hover:bg-orange-500 hover:text-white rounded-full transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="py-2 px-5 text-sm md:text-base text-white font-semibold bg-orange-500 hover:bg-orange-600 rounded-full shadow transition-all duration-300"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
