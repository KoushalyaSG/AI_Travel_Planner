function TravelResult({ trip }) {
  return (
    <div className="result-card">
      <h2>{trip.destination}</h2>

      <p>
        <strong>Days:</strong> {trip.days}
      </p>

      <p>
        <strong>Budget:</strong> ₹{trip.budget}
      </p>

      <h3>Suggested Itinerary</h3>

      <ul>
        {trip.itinerary.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TravelResult;