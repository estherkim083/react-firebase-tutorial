// styles
import "./Search.css";

import { useLocation } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import RecipeList from "../../components/RecipeList";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  //const url = "http://localhost:8000/recipes?q=" + query;
  const { data, error, isPending } = useCollection("recipe", query);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
