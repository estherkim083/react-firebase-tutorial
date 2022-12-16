import "./Navbar.css";
import { Link } from "react-router-dom";
import Temple from "../assets/temple.svg";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="dojo logo" />
          <span>The Dojo</span>
        </li>
        {!user ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              {isPending ? (
                <button className="btn" disabled>
                  Logging out...
                </button>
              ) : (
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              )}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
