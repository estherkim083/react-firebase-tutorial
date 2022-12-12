// styles
import "./Recipe.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { projectFirestore } from "../../firebase/config";

export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const handleClick = () => {
    projectFirestore.collection("recipe").doc(id).update({
      title: "smthng",
    });
  };
  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore
      .collection("recipe")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError(`Could not find that recipe`);
        }
      });

    return () => unsub();
  }, [id]);

  // useEffect(() => {
  //   setIsPending(true);
  //   projectFirestore
  //     .collection("recipe")
  //     .doc(id)
  //     .get()
  //     .then((doc) => {
  //       if (doc.exists) {
  //         setIsPending(false);
  //         setRecipe(doc.data());
  //       } else {
  //         setIsPending(false);
  //         setError("couldn't find that recipe");
  //       }
  //     });
  // }, [id]);

  return (
    <div className={`recipe ${mode}`}>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook...</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleClick}>Update me</button>
        </>
      )}
    </div>
  );
}
