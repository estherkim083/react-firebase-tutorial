import "./Navbar.css";
import Searchbar from "./Searchbar";
// import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <a href="/" className="brand">
          <h1>Cooking ninja</h1>
        </a>
        <Searchbar />
        <a href="/create">
          <h1>Create Recipe</h1>
        </a>
      </nav>
    </div>
  );
}
