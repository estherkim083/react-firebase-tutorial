// styles
import "./Home.css";
import RecipeList from "../../components/RecipeList";
import { projectFirestore } from "../../firebase/config";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    // projectFirestore // 실시간이 아닌 경우.
    //   .collection("recipe")
    //   .get()
    //   .then((snapshot) => {
    //     if (snapshot.empty) {
    //       setError("no recipes to load");
    //       setIsPending(false);
    //     } else {
    //       let results = [];
    //       snapshot.docs.forEach((doc) => {
    //         results.push({ id: doc.id, ...doc.data() });
    //       });
    //       setData(results);
    //       setIsPending(false);
    //     }
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //     setIsPending(false);
    //   });

    const unsub = projectFirestore.collection("recipe").onSnapshot(
      // 실시간인 경우.
      (snapshot) => {
        if (snapshot.empty) {
          setError("No recipes to load");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            // console.log(doc)
            results.push({ ...doc.data(), id: doc.id });
          });
          setData(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );
    return () => unsub();
  }, []);
  return (
    <div className="home">
      {error && <p className="error"></p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
