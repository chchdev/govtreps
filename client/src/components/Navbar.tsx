import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <h1 className="text-xl font-bold">MyApp</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
        <Link to="/login" className="text-gray-700 hover:text-blue-500">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
