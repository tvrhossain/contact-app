import React from 'react'

function ContactCard({ contact, index }) {
  return (
    <div className="w3-container" key={index}>
      
        <div className="" key={index}>
          <p>{contact.name}</p>
          <p>{contact.email} <span> ✘ DELETE </span></p>
        </div>
      
          
        
      
    </div>
  );
}

export default ContactCard