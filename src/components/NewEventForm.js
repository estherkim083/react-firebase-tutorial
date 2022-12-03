import "./NewEventForm.css";
import { useState, useRef } from "react";

export default function NewEventForm({ addEvent }) {
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");
  const title = useRef();
  const date = useRef();

  const resetForm = () => {
    // setTitle("");
    // setDate("");
    title.current.value = "";
    date.current.value = "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title.current.value,
      date: date.current.value,
      id: Math.floor(Math.random() * 10000),
    };

    // const event = {
    //   title: title,
    //   date: date,
    //   id: Math.floor(Math.random() * 10000),
    // };
    // console.log(event);
    addEvent(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          ref={title}
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          ref={date}
          // value={date}
          // onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
