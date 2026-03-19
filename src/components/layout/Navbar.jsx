import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-200">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/temple">Temple</NavLink>
      <NavLink to="/visit">Visit</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navbar;