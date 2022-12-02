import React from "react";

export default function EventList({ eventsList, handleClick }) {
  return (
    <div>
      {eventsList.map((item, index) => (
        <React.Fragment key={item.id}>
          <h2>
            {index}- {item.title}
          </h2>
          <button onClick={() => handleClick(item.id)}>delete</button>
        </React.Fragment>
      ))}
    </div>
  );
}

//_rfc 하고, 탭 누르기.
