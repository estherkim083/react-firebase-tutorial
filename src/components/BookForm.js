import React, { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useAuthContext } from "../hooks/useAuthContext";

export default function BookForm() {
  const [newBook, setNewBook] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newBook);

    await addDoc(collection(db, "books"), { title: newBook, uid: user.uid });
    setNewBook("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          type="text"
          required
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
        />
      </label>
      <button>Add</button>
    </form>
  );
}
