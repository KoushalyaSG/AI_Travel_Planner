import "../styles/SavedTrips.css";

function SavedTrips() {
  const trips = []; // Empty for now

  return (
    <div className="saved-trips">
      <h1>My Trips ✈️</h1>

      {trips.length === 0 ? (
        <div className="empty-state">
          <h2>No Trips Yet</h2>
          <p>
            You haven't planned any trips yet.
            Start creating your first adventure!
          </p>
        </div>
      ) : (
        <div className="trip-list">
          {trips.map((trip, index) => (
            <div key={index} className="trip-card">
              <h3>{trip.destination}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedTrips;