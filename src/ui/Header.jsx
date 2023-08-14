import { Link } from "react-router-dom";

const menus = (
  <>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/classes">Classes</Link>
    </li>
    <li>
      <Link to="/events">Events</Link>
    </li>
    <li>
      <Link to="/gallery">Gallery</Link>
    </li>
    <li>
      <Link to="/contact">Contact Us</Link>
    </li>
  </>
);

const Header = () => {
  return (
    <div className="navbar bg-base-100">
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
          {/* desktop */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menus}
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl">
          Sohoz School
        </Link>
      </div>

      {/* small */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menus}</ul>
      </div>

      <div className="navbar-end">
        <a className="btn">Admission Now</a>
      </div>
    </div>
  );
};

export default Header;
