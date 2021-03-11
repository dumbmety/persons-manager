import React, { useContext } from 'react';

import Person from './Person';

import MyContext from '../context/MyContext';

const Persons = () => {
  const { handleDeletePerson, handleNameChange, state } = useContext(MyContext);

  return (
    <ul className="container">
      {state.persons
        .map(person => (
          <Person
            changed={event => handleNameChange(event, person.id)}
            deleted={() => handleDeletePerson(person.id)}
            fullName={person.fullName}
            key={person.id}
          />
        ))
        .reverse()}
    </ul>
  );
};

export default Persons;
