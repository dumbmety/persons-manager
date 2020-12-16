import React from 'react'

import Person from './Person'

const Persons = ({ persons, deletePerson, changePerson }) => {
	return (
		<ul className="container">
			{persons
				.map(person => (
					<Person
						key={person.id}
						fullName={person.fullName}
						deleted={() => deletePerson(person.id)}
						changed={event => changePerson(event, person.id)}
					/>
				))
				.reverse()}
		</ul>
	)
}

export default Persons
