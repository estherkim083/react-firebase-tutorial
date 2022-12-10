import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");
  console.log(name);

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
        quisquam. Tempora quod dolores a, at quis accusantium praesentium vitae
        beatae aliquam harum autem fugit! Unde repellendus est pariatur quia
        odit!
      </p>
    </div>
  );
}
