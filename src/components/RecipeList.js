import "./RecipeList.css";
// import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import Trashcan from "../assets/trashcan.svg";
import { projectFirestore } from "../firebase/config";

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }
  const handleClick = (id) => {
    projectFirestore.collection("recipe").doc(id).delete();
  };
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <a href={`/recipes/${recipe.id}`}>Cook This</a>

          <img
            className="delete"
            onClick={() => handleClick(recipe.id)}
            src={Trashcan}
            alt="delete icon"
          />
        </div>
      ))}
    </div>
  );
}
