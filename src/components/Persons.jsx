import React from 'react'

import Person from './Person'

const Persons = ({ persons, deletePerson, changePerson }) => {
  return (
    <ul className="container">
      {persons
        .map(person => (
          <Person
            changed={event => changePerson(event, person.id)}
            deleted={() => deletePerson(person.id)}
            fullName={person.fullName}
            key={person.id}
          />
        ))
        .reverse()}
    </ul>
  )
}

export default Persons
