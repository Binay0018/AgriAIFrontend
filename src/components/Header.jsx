import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-gray-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">AgriAI</div>
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Weather
          </Link>
        </li>
        <li>
          <Link
            to="/Home"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/features"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/explore"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Explore
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
