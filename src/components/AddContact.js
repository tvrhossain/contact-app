import React, { useState } from "react";
import styles from "./AddContact.module.css";

function AddContact({ contacts, contactHandler }) {
  const [name, setName] = useState("JOHN");
  const [email, setMail] = useState("test@gmail.com");

  const addContact = (e) => {
    e.preventDefault();
    //console.log(">>>>", name, email);
    contactHandler(name, email);
    setMail("");
    setName("");
  };

  

  return (
    <div className="w3-container">
      <h1>AddContact</h1>
      <form onSubmit={addContact}>
        <div className={styles.fields}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Ur Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.fields}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Ur Email"
            value={email}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <button className="w3-button w3-blue">ADD</button>
      </form>
    </div>
  );
}

export default AddContact;
