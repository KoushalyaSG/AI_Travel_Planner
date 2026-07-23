import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>AI Travel Planner</h2>

      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/tripplanner">Trip Planner</Link>
        <Link to="/savedtrips">Saved Trips</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;