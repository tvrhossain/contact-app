import React from 'react'

function ContactCard( {contact, index}) {
  return (
    <div className="w3-container" key={index}>
        <div className="">
          <div className="">{contact.name}</div>
          <div>
            {contact.email} <span> &#10008; DELETE  </span>
          </div>
        </div>
      </div>
  )
}

export default ContactCard