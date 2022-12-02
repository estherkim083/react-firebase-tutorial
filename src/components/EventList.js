import React from "react";
import styles from "./EventList.module.css";

export default function EventList({ eventsList, handleClick }) {
  return (
    <div>
      {eventsList.map((item, index) => (
        <div className={styles.card} key={item.id}>
          <h2>
            {index}- {item.title}
          </h2>
          <button onClick={() => handleClick(item.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}

//_rfc 하고, 탭 누르기.
