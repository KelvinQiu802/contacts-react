import './App.css';
import AllContacts from './components/AllContacts';
import CreateContact from './components/CreateContact';
import React from 'react';

function App() {
  const [update, setUpdate] = React.useState(true);
  return (
    <>
      <AllContacts update={update} />
      <hr />
      <CreateContact setUpdate={setUpdate} />
    </>
  );
}

export default App;
