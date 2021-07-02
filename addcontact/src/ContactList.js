
import React  from "react";
// import ContactCard from './ContactCard';
const LOCAL_STORAGE_key = "contacts";

const ContactList = (props) => {
  console.log(props)   
    return(
      <table  class="table">
        <tr>
          <th scope="col">name</th>

          <th scope="col">email</th>
        </tr>
        { 
        props.contacts.map((contact,index)  =>
          {
            return(
              <tr> 
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td><button class="btn btn-danger" onClick={()=>props.deleteRow(contact.id)} > Delete</button></td>
                <td><button class="btn btn-dark" onClick={()=> props.update(contact.id)}>update</button></td>
              </tr>

            )
            } ) 
        }
      </table>
      
    )
    
    //   const renderContactList = props.contacts.map((contact) => {
    //     //return <ContactCard contact={contact} />;
    //     return table><tr></tr><td>{contact.name}</td> <td>{contact.email}</td><br/><br/>
    //      <td>{contact.Edit}</td> <td>{contact.delete}</td></tr></table>
         
    //       });
    // return<div className="ui celled list">{renderContactList} </div>
        };

    export default ContactList;