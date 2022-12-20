import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, query) => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    let ref = projectFirestore.collection(collection);
    console.log(query);
    // const 이 아닌 let, update를 위해서
    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        console.log(results);
        setData(() => {
          let filteredRecipes = results.filter(
            (recipe) =>
              recipe.title
                .toString()
                .toLowerCase()
                .includes(query.toLowerCase()) ||
              recipe.cookingTime
                .toString()
                .toLowerCase()
                .includes(query.toLowerCase()) ||
              recipe.ingredients
                .toString()
                .toLowerCase()
                .includes(query.toLowerCase())
          );
          return filteredRecipes;
        });
        setIsPending(false);
      },
      (error) => {
        console.log(error);
        setError("could not fetch the data");
      }
    );
    //unsubscribe on mount
    return () => unsubscribe();
  }, [collection, query]);

  return { data, error, isPending };
};
