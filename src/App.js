import React, { useState } from 'react';
import './App.css';
import BookData from "./data.json";
import SearchBar from './Components/SearchBar';


function App() {
  const [contacts] = useState(BookData);
  
  

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th><SearchBar placeholder="დეპარტამენტი..." data={contacts.department} /></th>
            <th><SearchBar placeholder="ჯგუფი..." data={contacts} /></th>
            <th><SearchBar placeholder="მენეჯერი..." data={contacts} /></th>
          </tr>
        </thead>
        <tbody>
          {contacts.department.map((contact, index) => (
             <tr key={index}>
               <td>
                 {contact.groups.map((item) =>
                 item.manager.map((item, index) => 
                  <p key={index}>{contact.name}</p>
                  )
                 )}
               </td>
               <td>
                 {contact.groups.map((groupname, index) =>
                  groupname.manager.map((item, index) => 
                 <p key={index}>{groupname.name}</p>
                  )
                 )}
               </td>
               <td>
                 {contact.groups.map((item) =>
                 item.manager.map((item, index) => 
                  <p key={index}>{item.name}</p>
                  )
                 )}
               </td>
             </tr>
          ))}
        </tbody>
      </table>      
    </div>
  );
}

export default App;
