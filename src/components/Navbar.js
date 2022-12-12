import "./Navbar.css";
import Searchbar from "./Searchbar";
// import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
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
