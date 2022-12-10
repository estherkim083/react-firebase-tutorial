import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Article() {
  const { id } = useParams();
  const url = "http://localhost:8000/articles/" + id;
  const { data: article, isPending, error } = useFetch(url);
  let navigate = useNavigate();

  useEffect(() => {
    if (error) {
      // redirect the user
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [error, navigate]);

  return (
    <div>
      {isPending && <div>Loading..</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
