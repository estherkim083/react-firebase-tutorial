import "./Searchbar.css";
import React, { useState } from "react";

export default function Searchbar() {
  const [term, setTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.href = `/search?q=${term}`;
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
