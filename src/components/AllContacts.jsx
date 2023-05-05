import axios from 'axios';
import React from 'react';
import Contact from './Contact';
import { nanoid } from 'nanoid';

function AllContacts({ update, setUpdate }) {
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
        <Contact
          key={nanoid()}
          id={c.id}
          name={c.name}
          number={c.number}
          setUpdate={setUpdate}
        />
      ))}
    </>
  );
}

export default AllContacts;
