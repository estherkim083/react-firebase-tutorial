import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);

  const [eventsList, setEventsList] = useState([]);

  const addEvent = (e) => {
    setEventsList((prevEvents) => {
      return [...prevEvents, e];
    });
    setShowModal(false);
  };

  const handleClick = (id) => {
    setEventsList(
      eventsList.filter((item) => {
        return id !== item.id;
      })
    );
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
      {showModal && (
        <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
      <button onClick={() => setShowModal(true)}>Add New Event</button>
    </div>
  );
}

export default App;
