import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { generateTrip } from "../services/gemini";
import TravelResult from "../components/TravelResult";

function TripPlanner() {
  const { state } = useLocation();
  

  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const result = await generateTrip(state);
        setTrip(result);
      } catch (error) {
        console.error(error);
        alert("Failed to generate trip.");
      } finally {
        setLoading(false);
      }
    };

    if (state) {
      fetchTrip();
    
    }
  }, [state]);

  if (loading) {
  return (
    <div className="loading-page">

      <div className="loading-box">

        <h1>🤖 AI Travel Planner</h1>

        <h2>Planning Your Dream Trip...</h2>

        <div className="loading-step">
          🔍 Finding Tourist Attractions...
        </div>

        <div className="loading-step">
          🏨 Searching Best Hotels...
        </div>

        <div className="loading-step">
          🍽 Finding Restaurants...
        </div>

        <div className="loading-step">
          🗺 Optimizing Travel Routes...
        </div>

        <div className="loading-step">
          💰 Calculating Budget...
        </div>

        <div className="loader"></div>

        <p>Almost Ready...</p>

      </div>

    </div>
  );
}

  return (
    <div className="container">
      <h1>Your AI Travel Plan ✈️</h1>

      {trip ? (
        <TravelResult trip={trip} />
      ) : (
        <p>No trip data available.</p>
      )}
    </div>
  );
}

export default TripPlanner;