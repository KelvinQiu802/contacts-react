import axios from 'axios';
import React from 'react';

function Contact({ id, name, number, setUpdate }) {
  async function handleDelete(id) {
    await axios.delete(`http://localhost:7070/api/contacts/${id}`);
    setUpdate((prev) => !prev);
  }

  return (
    <div className='contact'>
      <div>{name}</div>
      <div>{number}</div>
      <div className='del-btn' onClick={() => handleDelete(id)}>
        DELETE
      </div>
    </div>
  );
}

export default Contact;
