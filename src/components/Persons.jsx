import React, { useContext } from 'react';

import Person from './Person';

import MyContext from '../context/MyContext';

const Persons = () => {
  const context = useContext(MyContext);

  return (
    <ul className="container">
      {context.persons
        .map(person => (
          <Person
            changed={event => context.handleEditPerson(event, person.id)}
            deleted={() => context.handleDeletePerson(person.id)}
            fullName={person.fullName}
            key={person.id}
          />
        ))
        .reverse()}
    </ul>
  );
};

export default Persons;
