import React, { useState } from 'react';


// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  { id: 1, name: 'Star Trek: Short Treks', age: 32 },
  { id: 2, name: 'Star Trek: Picard', age: 30 },
  { id: 3, name: 'Star Trek: Discovery', age: 40 },
  { id: 4, name: 'Star Trek: Prodigy', age: 50 },
  { id: 5, name: 'Star Trek: Enterprise', age: 30 },
  { id: 6, name: 'Star Trek: Voyager', age: 68 },
  { id: 7, name: 'Star Trek: Odyssey', age: 34 },
  { id: 8, name: 'Star Trek: Lower Decks', age: 28 },
  { id: 9, name: 'Star Trek: Section 31', age: 23 },
];

function App() {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              
              <span className="user-name">{user.name}</span>
              
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}
export default App;
