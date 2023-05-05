import React from 'react';

function Contact({ name, number }) {
  return (
    <div className='contact'>
      <div>{name}</div>
      <div>{number}</div>
    </div>
  );
}

export default Contact;
