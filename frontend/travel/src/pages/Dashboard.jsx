import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import kashiImage from "../assets/kashiImage.jpg";

function Dashboard() {
  const navigate = useNavigate();


  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");

  const [travelType, setTravelType] = useState("Solo");
  const [accommodation, setAccommodation] = useState("Hotel");
  const [food, setFood] = useState("Both");
  const [transport, setTransport] = useState("Flight");

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/");
  };

  const generateTrip = () => {
    if (!destination || !days || !budget) {
      alert("Please fill all required fields.");
      return;
    }

    navigate("/planner", {
      state: {
        destination,
        days,
        budget,
        travelType,
        accommodation,
        food,
        transport,
      },
    });
  };

  return (
    <div className="dashboard">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">AI Travel Planner ✈️</h2>

        <div className="nav-links">
          <Link to="/dashboard">Home</Link>
          <Link to="/saved-trips">My Trips</Link>
          <Link to="/profile">Profile</Link>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

    
      {/* Hero */}
      <div className="hero">
        <h1>🌍 Discover Your Next Adventure</h1>

        <p>
          Plan personalized trips with AI and create unforgettable memories.
        </p>
      </div>

      <div className="dashboard-info">

  

  

</div>



      {/* Planner */}

      <div className="trip-planner">

        <h2>Plan Your Next Adventure</h2>

        <div className="form-group">

          <input
            type="text"
            placeholder="📍 Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />

          <input
            type="number"
            placeholder="⏳ Number of Days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />

          <input
            type="number"
            placeholder="💰 Enter Budget (₹)"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />

          <select
            value={travelType}
            onChange={(e) => setTravelType(e.target.value)}
          >
            <option>Solo</option>
            <option>Couple</option>
            <option>Family</option>
            <option>Friends</option>
          </select>

          <select
            value={accommodation}
            onChange={(e) => setAccommodation(e.target.value)}
          >
            <option>Hotel</option>
            <option>Resort</option>
            <option>Hostel</option>
            <option>Homestay</option>
          </select>

          <select
            value={food}
            onChange={(e) => setFood(e.target.value)}
          >
            <option>Veg</option>
            <option>Non-Veg</option>
            <option>Both</option>
          </select>

          <select
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
          >
            <option>Flight</option>
            <option>Train</option>
            <option>Bus</option>
            <option>Car</option>
          </select>

          <button onClick={generateTrip}>
            Generate AI Trip ✈️
          </button>

        </div>

      </div>











      

      <div className="weather-card">
    <h2>☀ Weather</h2>

    <h1>28°C</h1>

    <p>Bangalore</p>

    <span>Sunny</span>

  </div>

      {/* Popular Destinations */}

      <div className="destinations">

        <h2>Popular Destinations</h2>

        <div className="cards">

          <div className="card">
            <img src={kashiImage} alt="Kashi" />
            <h3>Kashi</h3>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2"
              alt="Goa"
            />
            <h3>Goa</h3>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23"
              alt="Manali"
            />
            <h3>Manali</h3>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
              alt="Paris"
            />
            <h3>Paris</h3>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;