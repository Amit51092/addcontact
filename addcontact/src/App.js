import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  let LOCAL_STORAGE_key = "contacts";
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
  function updateContactHandler(id){
    setContacts(contacts.map(el =>{
      if (el.id == id){
        el.name = el.name + ' update'
        el.email = el.email + ' update'
      }
      return el;
    } ));    
    localStorage.setItem(LOCAL_STORAGE_key,JSON.stringify(contacts));
  }


  return (
    <div className="ui container">
      <Header/>
    <AddContact addContactHandler={AddContactHandler}/><br></br>
     <ContactList  update ={updateContactHandler} deleteRow={deleteContactHandlerRow} contacts={contacts} />
    </div>
  );
}

export default App;

