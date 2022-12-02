import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showEvents, setShowEvents] = useState(true);
  const [eventsList, setEventsList] = useState([
    { title: "m", id: 1 },
    { title: "a", id: 2 },
    { title: "b", id: 3 },
  ]);

  const handleClick = (id) => {
    setEventsList(
      eventsList.filter((item) => {
        return id !== item.id;
      })
    );
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const subtitle = "All the latest events in Marioland";
  return (
    <div className="App">
      <Title title="Events on your area" subtitle={subtitle} />
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
        {showEvents && (
          <EventList eventsList={eventsList} handleClick={handleClick} />
        )}
      </div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <h2>10% Off Coupon code!</h2>
          <p>Use the code NINJA10 at the checkout.</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
