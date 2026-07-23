import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"; 
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Dashboard from "./pages/Dashboard";
import TripPlanner from "./pages/TripPlanner";

import Profile from "./pages/Profile";
import SavedTrips from "./pages/SavedTrips";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/planner" element={<TripPlanner />} />
        <Route path="/saved-trips" element={<SavedTrips />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;