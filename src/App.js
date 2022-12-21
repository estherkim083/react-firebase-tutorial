import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// page components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            {!user && (
              <Route
                exact
                path="/"
                element={<Navigate replace to="/login" />}
              />
            )}
            {user && <Route exact path="/" element={<Home />} />}
            {!user && <Route path="/login" element={<Login />} />}
            {user && (
              <Route path="/login" element={<Navigate replace to="/" />} />
            )}
            {!user && <Route path="/signup" element={<Signup />} />}
            {user && (
              <Route path="/signup" element={<Navigate replace to="/" />} />
            )}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
