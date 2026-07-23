import { useState } from "react";
import { generateTrip } from "../services/gemini";

function TravelForm({ setTrip }) {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");

  const [travelType, setTravelType] = useState("Solo");
  const [accommodation, setAccommodation] = useState("Hotel");
  const [food, setFood] = useState("Both");
  const [transport, setTransport] = useState("Flight");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      destination,
      days,
      budget,
      travelType,
      accommodation,
      food,
      transport,
    };

    try {
      setLoading(true);

      const trip = await generateTrip(data);

      setTrip(trip);

      setLoading(false);
    } catch  {
      setLoading(false);
      alert("Failed to generate trip.");
    }
  };


  if (loading) {
  return (
    <div className="loading-card">
      <h2>🤖 AI is Planning Your Trip...</h2>

      <p>🔍 Finding tourist attractions...</p>

      <p>🏨 Searching hotels...</p>

      <p>🍴 Finding restaurants...</p>

      <p>🗺 Building itinerary...</p>

      <div className="loader"></div>
    </div>
  );
}

  return (
    <form className="travel-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Number of Days"
        value={days}
        onChange={(e) => setDays(e.target.value)}
        required
      />

      <select
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      >
        <option value="">Select Budget</option>
        <option>₹10,000 - ₹20,000</option>
        <option>₹20,000 - ₹40,000</option>
        <option>₹40,000 - ₹60,000</option>
        <option>₹60,000+</option>
      </select>

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

      <button type="submit" disabled={loading}>
        {loading ? "Generating..." : "Generate AI Trip"}
      </button>

    </form>
  );
}

export default TravelForm;