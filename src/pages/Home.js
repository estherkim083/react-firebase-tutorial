import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:8000/articles");

  return (
    <div className="home">
      <h2>Home</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {articles &&
        articles.map((article) => (
          <div key={article.id} className="card">
            <h3>{article.title}</h3>
            <p>Written by {article.author}</p>
            <Link to={`article/${article.id}`}>Read More..</Link>
          </div>
        ))}
    </div>
  );
}
