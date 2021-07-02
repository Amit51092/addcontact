
import React  from "react";
// import ContactCard from './ContactCard';
const LOCAL_STORAGE_key = "contacts";

const ContactList = (props) => {
   
    return(
      <table border="1">
        <tr>
          <th>sr no</th>
          <th>name</th>

          <th>email</th>
        </tr>
        { 
        props.contacts.map((contact,index)  =>
          {
            return(
              <tr> 
              <td>{index+1}</td>

                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td><button onClick={()=>props.deleteRow(contact.id)} > Delete</button></td>
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