import Person from './Person'
import { useDataHandler } from '../context'

const Persons = () => {
  const { persons, editPerson, deletePerson } = useDataHandler()

  return (
    <ul className="container">
      {persons
        .map(person => (
          <Person
            key={person.id}
            name={person.name}
            changed={() => editPerson(person.id)}
            deleted={() => deletePerson(person.id)}
          />
        ))
        .reverse()}
    </ul>
  )
}

export default Persons
