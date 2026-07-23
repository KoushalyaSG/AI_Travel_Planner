import { useState } from "react";
import "../styles/Profile.css";
import travelImg from "../assets/Travel.jpg";

function Profile() {
  const [profilePic, setProfilePic] = useState(null);
  const [destination, setDestination] = useState("");
  const [albums, setAlbums] = useState([]);

  // Logged-in user
  const user = JSON.parse(localStorage.getItem("loggedInUser")) || {
  name: "Guest",
  email: "guest@example.com",
};

  // Profile initials
  const initials = user.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);

    if (!destination || files.length === 0) {
      alert("Enter destination name and select photos");
      return;
    }

    const newAlbum = {
      id: Date.now(),
      destination,
      photos: files.map((file) => URL.createObjectURL(file)),
    };

    setAlbums([...albums, newAlbum]);
    setDestination("");
  };

  const deleteAlbum = (id) => {
    setAlbums(albums.filter((album) => album.id !== id));
  };

  return (
    <div className="profile-page">
      {/* Hero Banner */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${travelImg})`,
        }}
      >
        <div className="hero-overlay">

          <div className="profile-image-section">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="profile-avatar"
              />
            ) : (
              <div className="profile-avatar">
  {initials}
</div>
            )}

            <label className="upload-profile-btn">
              Change Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleProfileUpload}
                hidden
              />
            </label>
          </div>

          <h1>{user.name}</h1>

          <p className="tagline">
            🌍 Explore • Dream • Discover
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-section">

  <div className="stat-card">
    <h2>{albums.length}</h2>
    <p>Albums</p>
  </div>

  <div className="stat-card">
    <h2>
      {albums.reduce(
        (total, album) => total + album.photos.length,
        0
      )}
    </h2>
    <p>Photos</p>
  </div>

  <div className="stat-card">
    <h2>12</h2>
    <p>Trips</p>
  </div>

  <div className="stat-card">
    <h2>Gold</h2>
    <p>Traveler</p>
  </div>

</div>

      {/* Passport */}
      <div className="card">
        <h2>🛂 Traveler Passport</h2>

        <p>
  <strong>Name:</strong> {user.name}
</p>

<p>
  <strong>Email:</strong> {user.email}
</p>

        <p className="quote">
          ✨ Collect moments, not things.
        </p>
      </div>

      {/* Travel Quote */}
      <div className="card">
        <h2>🌎 Travel Quote</h2>

        <p>
          "The world is a book and those who do not travel read only one page."
        </p>
      </div>

      {/* Achievements */}
      <div className="achievement-section">

        <div className="achievement-card">
          🏆 Explorer Level
          <h3>Gold Traveler</h3>
        </div>

        <div className="achievement-card">
          📸 Memories
          <h3>{albums.length}</h3>
        </div>

        <div className="achievement-card">
          ✈ Countries Goal
          <h3>8 / 20</h3>
        </div>

      </div>

      {/* Upload Destination */}
      <div className="album-section">

        <h2>📸 Travel Albums</h2>

        <div className="upload-box">

          <input
            type="text"
            placeholder="Destination Name"
            value={destination}
            onChange={(e) =>
              setDestination(e.target.value)
            }
          />

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoUpload}
          />

        </div>

        {albums.length === 0 ? (
          <div className="empty-album">
            <h3>No Memories Yet 🌍</h3>

            <p>
              Upload travel photos and create
              beautiful albums.
            </p>
          </div>
        ) : (
          albums.map((album) => (
            <div
              className="destination-card"
              key={album.id}
            >
              <div className="destination-header">
                <h3>
                  📍 {album.destination}
                </h3>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteAlbum(album.id)
                  }
                >
                  Delete Album
                </button>
              </div>

              <div className="photo-grid">
                {album.photos.map(
                  (photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt="travel"
                    />
                  )
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Bucket List */}
      <div className="card">
        <h2>🎯 Dream Destinations</h2>

        <div className="bucket-list">
          <span>🇯🇵 Tokyo</span>
          <span>🇫🇷 Paris</span>
          <span>🇨🇭 Switzerland</span>
          <span>🇮🇹 Rome</span>
          <span>🇳🇴 Norway</span>
          <span>🇬🇷 Greece</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;