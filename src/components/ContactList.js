import React from "react";
import styles from "./ContactList.module.css";
import ContactCard from "./ContactCard";

function ContactList({ contacts }) {
  const renderContactList = contacts.map((contact, index) => {
    return (
      <ContactCard contact={contact} index={index} />
    )
  });

  return <div>{renderContactList}</div>;
}

export default ContactList;
