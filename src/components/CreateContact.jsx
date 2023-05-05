import axios from 'axios';
import React from 'react';

function CreateContact({ setUpdate }) {
  const [formData, setFormData] = React.useState({ name: '', number: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    setFormData({ name: '', number: '' });
    await axios.post(
      `http://localhost:7070/api/contacts/${formData.name}/${formData.number}`
    );
    setUpdate((prev) => !prev);
  }

  function handleChange(e) {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return (
    <div>
      <h2>New a Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className='contact-input'>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='contact-input'>
          <label htmlFor='number'>Number: </label>
          <input
            type='text'
            id='number'
            name='number'
            value={formData.number}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='submit-btn'>
          CREATE
        </button>
      </form>
    </div>
  );
}

export default CreateContact;
