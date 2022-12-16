import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <Router>
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
        </Router>
      )}
    </div>
  );
}

export default App;
