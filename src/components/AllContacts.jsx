import axios from 'axios';
import React from 'react';
import Contact from './Contact';
import { nanoid } from 'nanoid';

function AllContacts({ update }) {
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const result = await axios.get('http://localhost:7070/api/contacts');
      setContacts(result.data);
    })();
  }, [update]);

  return (
    <>
      <h2>Contacts</h2>
      {contacts.map((c) => (
        <Contact key={nanoid()} name={c.name} number={c.number} />
      ))}
    </>
  );
}

export default AllContacts;
