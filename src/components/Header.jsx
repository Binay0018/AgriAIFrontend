import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wider drop-shadow-md">
        AgriAI
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-4 md:space-x-6">
        <li>
          <Link
            to="/"
            className="px-4 py-2 rounded-lg hover:bg-green-700 hover:text-yellow-300 transition-all duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Weather"
            className="px-4 py-2 rounded-lg hover:bg-green-700 hover:text-yellow-300 transition-all duration-300"
          >
            Weather
          </Link>
        </li>
        <li>
          <Link
            to="/features"
            className="px-4 py-2 rounded-lg hover:bg-green-700 hover:text-yellow-300 transition-all duration-300"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-lg hover:bg-green-700 hover:text-yellow-300 transition-all duration-300"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/explore"
            className="px-4 py-2 rounded-lg hover:bg-green-700 hover:text-yellow-300 transition-all duration-300"
          >
            Explore
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
