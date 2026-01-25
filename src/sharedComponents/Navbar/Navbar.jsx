import { Link } from "react-router-dom";
import navLogo from "../../assets/navLogo-removebg-preview.png";
import ToggleTheme from "../ToggleTheme";
import "./Navbar.css";

const Navbar = () => {
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

  return (
    <div className="w-full px-4 sm:px-6 lg:px-16">
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
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
            className="flex items-center gap-1 text-orange-500 font-semibold text-lg sm:text-xl momo-signature-regular"
          >
            Restaurant
            <img src={navLogo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            Fair
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">{links}</ul>
        </div>

        <div className="navbar-end">
          <ToggleTheme></ToggleTheme>
          <Link to="/login" className="btn btn-sm sm:btn-md ml-2">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
