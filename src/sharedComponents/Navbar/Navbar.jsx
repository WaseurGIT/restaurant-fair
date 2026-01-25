import { Link } from "react-router-dom";
import navLogo from "../../assets/navLogo-removebg-preview.png";
import ToggleTheme from "../ToggleTheme";
import { FiLogOut, FiUser } from "react-icons/fi";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/restaurants">Restaurants</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed top-0 z-20 w-full bg-black backdrop-blur-xl shadow-md px-6">
      <div className="navbar bg-transparent">
        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow z-[100]"
            >
              {links}
            </ul>
          </div>

          <Link
            to="/"
            className="flex items-center gap-1 text-orange-500 font-semibold text-lg sm:text-xl"
          >
            Restaurant
            <img src={navLogo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            Fair
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 text-white">{links}</ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-2">
          <ToggleTheme />

          {user ? (
            <div className="flex items-center gap-2 text-white group relative">
              <FiUser className="text-lg cursor-pointer" />

              {/* Name on hover */}
              <span className="absolute top-8 right-0 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {user.displayName}
              </span>

              <button
                onClick={handleLogOut}
                className="btn btn-sm btn-error"
                title="Logout"
              >
                <FiLogOut className="cursor-pointer" />
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-sm sm:btn-md cursor-pointer">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
