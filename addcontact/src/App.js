import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_key = "contacts";
  const[contacts,setContacts] = useState([]);

  const AddContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
       const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_key));
       if(retriveContacts) setContacts(retriveContacts);
  },[]);
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_key,JSON.stringify(contacts));
  }, [contacts]);

  function deleteContactHandlerRow(id){
    setContacts(contacts.filter(el => el.id !== id));
    localStorage.setItem(LOCAL_STORAGE_key,JSON.stringify(contacts));
  }



  return (
    <div className="ui container">
      <Header/>
    <AddContact addContactHandler={AddContactHandler}/><br></br>
     <ContactList deleteRow={deleteContactHandlerRow} contacts={contacts} />
    </div>
  );
}

export default App;

