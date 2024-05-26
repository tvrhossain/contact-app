import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

export default function App() {
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Tanvir",
  //     email: "tanvir@gmail.com",
  //   },
  //   { id: "2", name: "Aroz", email: "aroz@gmail.com" },
  // ];

  const [contacts, setContacts] = useState([]);

const contactHandler = (name, email) => {
  
  setContacts([...contacts, name, email])
  console.log("NAME n EMAIL", contacts);
};
  return (
    <div className="w3-container w3-flat-turquoise">
      <Header />
      <AddContact contactHandler={contactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}
