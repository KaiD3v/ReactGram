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
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MobileTabBar from "./components/MobileTabBar/MobileTabBar";

// pages
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import EditProfile from "./pages/EditProfile/EditProfile";
import Profile from "./pages/Profile/Profile";
import Photo from "./pages/Photo/Photo";
import Search from "./pages/Search/Search";

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
              path="/users/:id"
              element={auth ? <Profile /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/login"
              element={!auth ? <Login /> : <Navigate to={"/"} />}
            />
            <Route
              path="/register"
              element={!auth ? <Register /> : <Navigate to={"/"} />}
            />
            <Route
              path="/photos/:id"
              element={auth ? <Photo /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/search"
              element={auth ? <Search /> : <Navigate to={"/login"} />}
            />
          </Routes>
        </div>
        <MobileTabBar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
