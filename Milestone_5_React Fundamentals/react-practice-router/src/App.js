import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <h1>React Router Practice</h1>

        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;