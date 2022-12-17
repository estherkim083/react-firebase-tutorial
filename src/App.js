import "./App.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// page components
import Create from "./pages/create/Create";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Project from "./pages/project/Project";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useAuthContext } from "./hooks/useAuthContext";
import OnlineUsers from "./components/OnlineUsers";

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Sidebar />
          <div className="container">
            <Navbar />
            <Routes>
              {!user && (
                <Route
                  exact
                  path="/"
                  element={<Navigate replace to="/login" />}
                />
              )}
              {user && <Route exact path="/" element={<Dashboard />} />}
              {!user && (
                <Route
                  path="/create"
                  element={<Navigate replace to="/login" />}
                />
              )}
              {user && <Route path="/create" element={<Create />} />}
              {!user && (
                <Route
                  path="/projects/:id"
                  element={<Navigate replace to="/login" />}
                />
              )}
              {user && <Route path="/projects/:id" element={<Project />} />}
              {!user && <Route path="/login" element={<Login />} />}
              {user && (
                <Route path="/login" element={<Navigate replace to="/" />} />
              )}
              {!user && <Route path="/signup" element={<Signup />} />}
              {user && (
                <Route path="/signup" element={<Navigate replace to="/" />} />
              )}
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
