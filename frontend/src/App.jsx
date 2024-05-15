import { useState } from "react";
import "./App.css";

// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// hooks
import { useAuth } from "./hooks/useAuth";

// Components
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import EditProfile from "./pages/EditProfile/EditProfile";

function App() {
  const { auth, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={auth ? <Home /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/profile"
              element={auth ? <EditProfile /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/login"
              element={!auth ? <Login /> : <Navigate to={"/"} />}
            />
            <Route
              path="/register"
              element={!auth ? <Register /> : <Navigate to={"/"} />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
