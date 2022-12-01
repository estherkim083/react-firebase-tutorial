import React, { useState } from "react";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [eventsList, setEventsList] = useState([
    { title: "m", id: 1 },
    { title: "a", id: 2 },
    { title: "b", id: 3 },
  ]);

  const handleClick = (id) => {
    setEventsList(
      eventsList.filter((item) => {
        return id != item.id;
      })
    );
  };
  return (
    <div className="App">
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      <div>
        {showEvents &&
          eventsList.map((item, index) => (
            <div key={item.id}>
              <h2>
                {index}- {item.title}
              </h2>
              <button onClick={() => handleClick(item.id)}>delete</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
